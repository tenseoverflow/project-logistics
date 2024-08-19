<script>
	import { scrollTo, scrollRef } from 'svelte-scrolling';
</script>

<main>
	<div class="bg-gradient-to-r from-blue-400 to-white">
		<nav class="navbar flex-wrap gap-x-28 bg-transparent px-12 pt-12 lg:px-40">
			<div class="flex-1">
				<a class="btn btn-ghost text-2xl dark:text-black" href="/">
					<!-- <img src="" alt="Logo" width="112" height="28"> -->
					Project Logistics (LOGO SIIA)
				</a>
			</div>
			<div class="navbar-menu">
				<div class="flex-none">
					<a
						class="navbar-item btn btn-ghost text-2xl dark:text-black"
						href="#why"
						use:scrollTo={'why'}>Why us</a
					>
					<a
						class="navbar-item btn btn-ghost text-2xl dark:text-black"
						href="#contact"
						use:scrollTo={'contact'}>Contact</a
					>
				</div>
			</div>
		</nav>
		<div class="z-0 max-w-4xl px-8 py-28 lg:px-40">
			<h1 class="text-6xl font-bold dark:text-black">Project Logistics</h1>
			<p class="py-6 text-xl dark:text-black">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut deleniti earum fugit unde
				adipisci ex corporis vel eligendi animi dignissimos suscipit sit, eveniet odio
				exercitationem ipsa modi eos ad nam.
			</p>
			<!-- <div class="join">
                <input class="input join-item" placeholder="Let's get in contact" type="email">
                <button class="btn join-item">Talk to us</button>
            </div> -->
			<a
				href="#contact"
				class="btn btn-primary border-0 bg-slate-900 text-xl text-white hover:bg-black"
				>Get in touch</a
			>
		</div>
	</div>

	<div
		id="why"
		class="flex flex-col flex-wrap items-center gap-10 px-16 py-20 text-center lg:px-72"
		use:scrollRef={'why'}
	>
		<h2 class="m-auto text-5xl font-bold">Why us</h2>
		<div id="trusted" class="flex flex-col flex-wrap items-center justify-center gap-8">
			<h3 class="m-auto text-3xl font-bold">Trusted network</h3>
			<p class="max-w-3xl text-xl">
				We are Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non odio suscipit a
				laboriosam, exercitationem corporis eveniet hic modi iusto necessitatibus at quam error
				nobis perferendis aspernatur accusantium optio voluptas.
			</p>
			<div class="artboard artboard-horizontal">
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1608141%2Fearth-from-space.jpg%3Fw%3D1180&f=1&nofb=1&ipt=e7e98864aef7a366b50329a750192007ac2f2a054f65478e0618e2f0beb3552b&ipo=images"
					alt="earth"
					class="max-h-4xl m-auto w-full max-w-4xl rounded-xl shadow-xl"
				/>
			</div>
		</div>

		<div id="numbers" class="flex w-full flex-col flex-wrap items-center gap-8">
			<h3 class="m-auto text-3xl font-bold">Numbers</h3>
			<div class="w-full">
				<h4 class="w-full text-5xl text-blue-900">100%</h4>
				<p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div class="w-full">
				<h4 class="w-full text-5xl text-blue-900">100%</h4>
				<p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div class="w-full">
				<h4 class="w-full text-5xl text-blue-900">100%</h4>
				<p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
		</div>
	</div>

	<div class=" bg-slate-900">
		<div use:scrollRef={'contact'} id="contact" class="px-16 py-20 lg:px-72">
			<h2 class="py-3 text-center text-5xl font-bold text-white">Contact us</h2>
			<div class="text-center">
				<p class="py-6 text-xl text-white">Let's take your logistics to the next level!</p>
				<a href="mailto:example@example.com" class="link text-white">example@example.com</a>
			</div>
		</div>
		<footer>
			<div class="px-8 pb-16 lg:px-16">
				<div class="flex flex-auto flex-wrap justify-between gap-2">
					<p class="text-white">Project Logistics. All rights reserved.</p>
					<p class="self-end text-right text-white">2024</p>
				</div>
			</div>
		</footer>
	</div>
</main>
