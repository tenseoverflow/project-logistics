<script>
	// @ts-ignore
	import { scrollTo, scrollRef } from 'svelte-scrolling';
</script>

<main>
	<div class="bg-gradient-to-r from-green-500 to-green-300">
		<nav class="navbar flex-wrap gap-x-28 bg-transparent px-12 pt-12 lg:px-40">
			<div class="flex-1">
				<a class="btn btn-ghost text-2xl dark:text-black" href="/">
					<!-- <img src="" alt="Logo" width="112" height="28"> -->
					Delyver.ai
				</a>
			</div>
			<div class="navbar-menu">
				<div class="flex flex-wrap gap-2 lg:flex-row">
					<a
						class="navbar-item btn btn-ghost text-2xl dark:text-black"
						href="#why"
						use:scrollTo={'why'}>Why choose us</a
					>
					<a
						class="navbar-item btn btn-ghost text-2xl dark:text-black"
						href="#contact"
						use:scrollTo={'contact'}>Contact</a
					>
				</div>
			</div>
		</nav>
		<div class="px-8 py-10 lg:py-24 lg:pl-40">
			<div class="flex flex-col content-between justify-center gap-4 p-4 lg:flex-row">
				<div class="z-0 max-w-5xl">
					<h1 class="text-3xl font-bold lg:text-6xl dark:text-black">
						Streamline Your Supply Chain with Delyver.ai
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
						class="btn btn-primary border-0 bg-slate-100 text-xl hover:bg-slate-300">Learn more</a
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
		<h2 class="m-auto text-3xl font-bold">Expand Your Reach, Shrink Your Impact</h2>
		<p class="m-auto text-xl">
			Global expansion doesn’t have to come at the expense of the environment. With Delyver.ai, you
			can grow your business across borders while keeping your environmental footprint to a minimum.
			Our AI-driven logistics solutions optimize every aspect of your supply chain, allowing you to
			receive your products in the most efficient and eco-friendly way possible.
		</p>
	</div>

	<div id="works" use:scrollRef={'works'} class="flex flex-col gap-10 px-16 py-20 lg:px-72">
		<h2 class="m-auto text-3xl font-bold">How it works</h2>
		<div class="flex flex-row gap-2 align-middle">
			<div class="text-xl">
				<h3 class="font-bold">1. Submit your order details</h3>
				<p class="">
					Provide us with the specifics of your shipment, including origin, destination, product
					type, and any special requirements. Our system then analyzes your needs to create a
					customized logistics plan.
				</p>
			</div>
			<div class="text-xl">
				<h3 class="font-bold">2. AI-Optimized Route Generation</h3>
				<p class="">
					Our advanced AI algorithms get to work, calculating the most efficient and cost-effective
					shipping routes. By analyzing real-time data and various logistics factors, we ensure the
					fastest delivery at the lowest possible cost.
				</p>
			</div>
			<div class="text-xl">
				<h3 class="font-bold">3. Secure Warehousing and Fulfillment</h3>
				<p class="">
					Your products are stored and managed in our network of verified, high-quality warehouses
					in China. Our partners ensure that your goods are handled with care and precision, ready
					for timely dispatch.
				</p>
			</div>
			<div class="text-xl">
				<h3 class="font-bold">4. Fast and Reliable Shipping</h3>
				<p class="">
					Once your order is ready, it is shipped using the AI-generated route. You can track your
					shipment in real-time as it moves swiftly through the optimized path, ensuring on-time
					delivery at a fraction of the cost.
				</p>
			</div>
		</div>
	</div>

	<div
		id="why"
		class="flex flex-col flex-wrap items-center gap-10 px-16 py-20 lg:px-72"
		use:scrollRef={'why'}
	>
		<h2 class="m-auto text-5xl font-bold">Why choose us</h2>
		<div id="verified" class="flex flex-col justify-center gap-8 lg:flex-row">
			<div class="text-left lg:w-1/2">
				<h3 class="m-auto pb-4 text-3xl font-bold">AI-Powered Optimization</h3>
				<p class="text-xl">
					Our advanced AI algorithms meticulously analyze vast amounts of data to design the most
					efficient and cost-effective shipping routes, ensuring your products are delivered faster
					and at significantly lower costs. This technology allows us to constantly adapt and
					optimize, providing you with a logistics solution that evolves alongside your business
					needs."
				</p>
			</div>
			<div class="artboard artboard-horizontal lg:w-1/2">
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1608141%2Fearth-from-space.jpg%3Fw%3D1180&f=1&nofb=1&ipt=e7e98864aef7a366b50329a750192007ac2f2a054f65478e0618e2f0beb3552b&ipo=images vecteezy_worldwide-shipping-concept-with-globe-airplane-van-boat_40747157.png"
					alt="earth"
					class="m-auto rounded-xl shadow-xl"
				/>
			</div>
		</div>

		<div id="" class="flex flex-col justify-center gap-8 lg:flex-row-reverse">
			<div class="text-left lg:w-1/2">
				<h3 class="m-auto pb-4 text-3xl font-bold">Verified Warehousing in China</h3>
				<p class="text-xl">
					We have established partnerships with a network of thoroughly vetted and verified
					warehouses across China, ensuring that your goods are stored and handled with the utmost
					care and precision. This reliable infrastructure supports seamless order fulfillment,
					helping you maintain a consistent and high-quality supply chain."
				</p>
			</div>
			<div class="artboard artboard-horizontal lg:w-1/2">
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1608141%2Fearth-from-space.jpg%3Fw%3D1180&f=1&nofb=1&ipt=e7e98864aef7a366b50329a750192007ac2f2a054f65478e0618e2f0beb3552b&ipo=images"
					alt="earth"
					class="m-auto rounded-xl shadow-xl"
				/>
			</div>
		</div>

		<div id="trusted" class="flex flex-col justify-center gap-8 lg:flex-row">
			<div class="text-left lg:w-1/2">
				<h3 class="m-auto pb-4 text-3xl font-bold">Cost-Effective Solutions</h3>
				<p class="text-xl">
					By leveraging our AI-driven approach, we help you save up to 60% on your logistics costs
					compared to traditional methods. Our focus on efficiency doesn't just reduce expenses; it
					enhances your overall operational effectiveness, allowing you to allocate resources more
					strategically and boost your bottom line
				</p>
			</div>
			<div class="artboard artboard-horizontal lg:w-1/2">
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1608141%2Fearth-from-space.jpg%3Fw%3D1180&f=1&nofb=1&ipt=e7e98864aef7a366b50329a750192007ac2f2a054f65478e0618e2f0beb3552b&ipo=images"
					alt="earth"
					class="m-auto rounded-xl shadow-xl"
				/>
			</div>
		</div>
	</div>

	<div class=" bg-slate-900">
		<div use:scrollRef={'contact'} id="contact" class="px-16 py-20 lg:px-96">
			<h2 class="py-3 text-center text-5xl font-bold text-white">Contact us</h2>
			<div class="text-center">
				<p class="py-6 text-xl text-white">Let's take your logistics to the next level!</p>
				<form action="" method="get" class="flex flex-col gap-3 lg:px-60">
					<label class="input input-bordered flex items-center gap-2">
						Name
						<input type="text" class="grow" placeholder="Delyver.ai" />
					</label>
					<label class="input input-bordered flex items-center gap-2">
						Email
						<input type="text" class="grow" placeholder="delyver@delyver.ai" />
					</label>
					<textarea class="textarea textarea-bordered textarea-md" placeholder="Message" />
					<button class="btn btn-primary border-0" type="submit">Send</button>
				</form>
			</div>
		</div>
		<footer>
			<div class="px-8 pb-16 lg:px-16">
				<div class="flex flex-auto flex-wrap justify-between gap-2">
					<p class="text-white">Delyver. All rights reserved. 2024</p>
					<p class="self-end text-right text-white">
						<a href="mailto:example@example.com" class="link text-white">hello@delyver.ai</a>
					</p>
				</div>
			</div>
		</footer>
	</div>
</main>
