import { error } from '@sveltejs/kit';

const sgMail = require('@sendgrid/mail')

export async function onRequestPost(context) {
  try {
    return await handleRequest(context);
  } catch (e) {
    console.error(e);
    return new Response("Error sending message", { status: 500 });
  }
}

async function handleRequest({ request }) {
  const ip = request.headers.get("CF-Connecting-IP");

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const token = formData.get("cf-turnstile-response");

  const tokenValidated = await validateToken(ip, token);

  if (!tokenValidated) {
    return new Response("Token validation failed", { status: 403 });
  }

  await forwardMessage(name, email, message);

  return new Response("OK", { status: 200 });
}

async function validateToken(ip, token) {
  const TURNSTILE_SECRET_KEY = context.env.TURNSTILE_SECRET_KEY;

  if (!TURNSTILE_SECRET_KEY) {
    throw new Error("Turnstile secret key is not configured");
  }

  const formData = new FormData();
  formData.append("secret", TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", ip);

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  const result = await fetch(url, {
    body: formData,
    method: "POST",
  });

  const outcome = await result.json();

  return outcome.success;
}

async function forwardMessage(name, email, message) {
  // Forward the message to an email address, webhook etc.
  
  const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY;
  
  if (!SENDGRID_API_KEY) {
    throw new Error("SendGrid API key is not configured");
  }

  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: "contact@hen.ee",
    from: "henri@noreply.kiipy.ee",
    subject: "Form",
    text: "Name: " + name + "\nEmail: " + email + "\nMessage: " + message,
  };
  sgMail.send(msg).then(() => { console.log("Message sent")}).catch((error) => { console.error(error)});
}
