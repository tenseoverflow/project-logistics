<script>
	// @ts-ignore
	import { scrollTo, scrollRef } from 'svelte-scrolling';
</script>

<main>
	<div class="bg-gradient-to-r from-green-500 to-green-300">
		<nav class="top-nav navbar gap-x-28 bg-transparent px-12 pt-16 lg:px-40 lg:pt-12">
			<div class="md:flex-1">
				<a class="btn btn-ghost text-2xl dark:text-black" href="/">
					<!-- <img src="" alt="Logo" width="112" height="28"> -->
					Delyver
				</a>
			</div>
			<div class="navbar-menu">
				<input id="menu-toggle" type="checkbox" />
				<label class="menu-button-container" for="menu-toggle">
					<div class="menu-button"></div>
				</label>
				<ul class="menu flex-nowrap">
					<li>
						<a
							class="navbar-item btn btn-ghost text-2xl dark:text-black"
							href="#why"
							use:scrollTo={'why'}>Why choose us</a
						>
					</li>
					<li>
						<a
							class="navbar-item btn btn-ghost text-2xl dark:text-black"
							href="#contact"
							use:scrollTo={'contact'}>Contact</a
						>
					</li>
				</ul>
			</div>
		</nav>
		<div class="px-8 py-8 lg:py-24 lg:pl-40">
			<div class="flex flex-col content-between justify-center gap-4 p-4 lg:flex-row">
				<div class="z-0 max-w-5xl">
					<h1 class="text-3xl font-bold lg:text-6xl dark:text-black">
						Streamline Your Supply Chain with Delyver
					</h1>
					<p class="py-6 text-xl dark:text-black">
						Leverage the power of AI to optimize shipping routes and reduce costs by up to 60%. Our
						network of verified warehouses in China ensures your orders are fulfilled swiftly and
						accurately.
					</p>
					<!-- <div class="join">
                <input class="input join-item" placeholder="Let's get in contact" type="email">
                <button class="btn join-item">Talk to us</button>
            </div> -->
					<a
						href="#learn"
						use:scrollTo={'learn'}
						class="btn btn-primary mb-1 border-0 bg-slate-100 text-xl hover:bg-slate-300 sm:mb-0"
						>Learn more</a
					>
					<a
						href="#contact"
						class="btn btn-primary border-0 bg-slate-900 text-xl text-white hover:bg-slate-950"
						use:scrollTo={'contact'}>Get in touch</a
					>
				</div>

				<div class="artboard artboard-horizontal">
					<img
						src="vecteezy_worldwide-shipping-concept-with-globe-airplane-van-boat_40747157.png"
						alt="earth"
						class="m-auto max-h-72"
					/>
				</div>
			</div>
		</div>
	</div>

	<div
		id="learn"
		use:scrollRef={'learn'}
		class="flex flex-col items-center gap-10 px-16 py-20 text-center lg:px-72"
	>
		<h2 class="m-auto text-3xl font-bold">Grow Globally, Go Green</h2>
		<p class="m-auto text-2xl">
			Expand your business without compromising the planet. With Delyver, you can scale across
			borders while minimizing your environmental impact. Our AI-powered logistics solutions
			optimize your supply chain, ensuring your products reach their destination in the most
			efficient and eco-friendly way possible.
		</p>
		<div class="align-center flex flex-col flex-wrap items-center gap-x-40 lg:flex-row">
			<div class="">
				<h2 class="text-6xl font-bold text-primary">100%</h2>
				<p class="text-xl">Emissions reduction</p>
			</div>
			<div class="">
				<h2 class="text-6xl font-bold text-primary">50%</h2>
				<p class="text-xl">Costs reduction</p>
			</div>
		</div>
	</div>

	<div
		id="works"
		use:scrollRef={'works'}
		class="flex flex-col gap-10 bg-gray-100 px-16 py-20 lg:px-72"
	>
		<h2 class="m-auto text-3xl font-bold">How it works</h2>
		<div class="flex flex-row flex-wrap gap-2 align-middle lg:flex-nowrap">
			<ul class="steps steps-vertical xl:steps-horizontal">
				<li class="step step-primary">
					<div class="text-xl">
						<h3 class="font-bold">Tell Us About Your Shipment</h3>
						<p class="">
							Share your shipment details—where it’s coming from, where it’s going, and what’s
							inside. We’ll take it from there, crafting a logistics plan tailored just for you.
						</p>
					</div>
				</li>
				<li class="step step-primary">
					<div class="text-xl">
						<h3 class="font-bold">Smart Route Planning</h3>
						<p class="">
							Our AI goes to work, finding the fastest and most affordable shipping routes. It
							crunches real-time data to get your goods where they need to be, fast.
						</p>
					</div>
				</li>
				<li class="step step-primary">
					<div class="text-xl">
						<h3 class="font-bold">Safe and Sound Storage</h3>
						<p class="">
							Your products are securely stored in our top-tier warehouses in China, handled with
							the utmost care, and prepped for quick dispatch.
						</p>
					</div>
				</li>
				<li class="step step-primary">
					<div class="text-xl">
						<h3 class="font-bold">Speedy Delivery You Can Track</h3>
						<p class="">
							When your order’s ready, it’s shipped along the optimized route. Track it in real-time
							as it zips through to its destination—on time, and on budget.
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>

	<div
		id="why"
		class="flex flex-col flex-wrap items-center gap-10 px-16 py-20 lg:px-72"
		use:scrollRef={'why'}
	>
		<h2 class="m-auto text-5xl font-bold">Why choose us</h2>
		<div
			id=""
			class="flex flex-col-reverse items-center justify-center gap-8 align-middle lg:flex-row"
		>
			<div class="text-left lg:w-1/2">
				<h3 class="m-auto pb-4 text-3xl font-bold">AI-Driven Shipping Optimization</h3>
				<p class="text-xl">
					Harness the power of advanced AI to revolutionize your logistics. Our intelligent
					algorithms dive deep into data to craft the fastest, most cost-efficient shipping routes,
					delivering your products quicker while slashing costs. Stay ahead with a dynamic solution
					that adapts and evolves with your business, ensuring optimal performance every step of the
					way.
				</p>
			</div>
			<div class="artboard artboard-horizontal lg:w-1/2">
				<img src="undraw_firmware_re_fgdy.svg" alt="earth" class="m-auto rounded-xl" />
			</div>
		</div>

		<div
			id=""
			class="flex flex-col-reverse items-center justify-center gap-8 align-middle lg:flex-row-reverse"
		>
			<div class="text-left lg:w-1/2">
				<h3 class="m-auto pb-4 text-3xl font-bold">Trusted Warehousing in China</h3>
				<p class="text-xl">
					Partner with confidence. Our carefully vetted network of verified warehouses across China
					ensures your goods are stored with the highest standards of care and precision. This
					dependable infrastructure guarantees seamless order fulfillment, keeping your supply chain
					consistent and high-quality.
				</p>
			</div>
			<div class="artboard artboard-horizontal lg:w-1/2">
				<img src="undraw_logistics_x-4-dc.svg" alt="earth" class="m-auto rounded-xl" />
			</div>
		</div>

		<div
			id="trusted"
			class="flex flex-col-reverse items-center justify-center gap-8 align-middle lg:flex-row"
		>
			<div class="text-left lg:w-1/2">
				<h3 class="m-auto pb-4 text-3xl font-bold">Smart, Cost-Effective Solutions</h3>
				<p class="text-xl">
					Save up to 60% on logistics with our AI-driven approach. We go beyond cutting costs—our
					efficiency-first strategy enhances your entire operation, freeing up resources for smarter
					investments and driving your bottom line.
				</p>
			</div>
			<div class="artboard artboard-horizontal lg:w-1/2">
				<img src="undraw_environment_iaus.svg" alt="earth" class="m-auto rounded-xl" />
			</div>
		</div>
	</div>

	<div class=" bg-slate-900">
		<div use:scrollRef={'contact'} id="contact" class="px-16 py-20 lg:px-96">
			<h2 class="py-3 text-center text-5xl font-bold text-white">Contact us</h2>
			<div class="min-w-64 text-center">
				<p class="py-6 text-xl text-white">Let's take your logistics to the next level!</p>
				<form
					action="https://formspree.io/f/xeojdoqo"
					method="POST"
					class="flex flex-col gap-3 xl:px-60"
				>
					<label class="input input-bordered flex items-center gap-2">
						Name
						<input required type="text" name="name" class="grow" placeholder="Delyver" />
					</label>
					<label class="input input-bordered flex items-center gap-2">
						Email
						<input
							required
							type="email"
							name="email"
							class="grow"
							placeholder="delyver@delyver.eu"
						/>
					</label>
					<textarea
						name="message"
						class="textarea textarea-bordered textarea-md"
						placeholder="Message"
						required
					/>
					<button class="btn btn-primary border-0" type="submit">Send</button>
				</form>
			</div>
		</div>
		<footer>
			<div class="px-8 pb-16 lg:px-16">
				<div class="flex flex-auto flex-wrap justify-between gap-2">
					<p class="text-white">Delyver. All rights reserved. 2024-{new Date().getFullYear()}</p>
					<p class="self-end text-right text-white">
						<a href="mailto:contact@delyver.eu" class="link text-white">contact@delyver.eu</a>
					</p>
				</div>
			</div>
		</footer>
	</div>
</main>
