<script>
    import { scrollTo, scrollRef } from 'svelte-scrolling';
</script>

<main>
    <div class="bg-gradient-to-r from-green-500 to-green-300">
        <nav class="navbar flex-wrap gap-x-28 bg-transparent px-12 pt-12 lg:px-40">
            <div class="flex-1">
                <a class="btn btn-ghost text-2xl dark:text-black" href="/">
                    <!-- <img src="" alt="Logo" width="112" height="28"> -->
                    Delyver
                </a>
            </div>
            <div class="navbar-menu">
                <div class="flex-none">
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
        <div class="px-8 py-10 lg:py-28 lg:px-40">
            <div class="hero-content flex-col lg:flex-row">

            <div class="z-0 max-w-5xl ">

            <h1 class="text-3xl lg:text-6xl font-bold dark:text-black">Streamline Your Supply Chain with Delyver.ai
</h1>
            <p class="py-6 text-xl dark:text-black">
                Leverage the power of AI to optimize shipping routes and reduce costs by up to 60%. Our network of verified warehouses in China ensures your orders are fulfilled swiftly and accurately.
            </p>
            <!-- <div class="join">
                <input class="input join-item" placeholder="Let's get in contact" type="email">
                <button class="btn join-item">Talk to us</button>
            </div> -->
            <a
                href="#contact"
                class="btn btn-primary border-0 bg-slate-900 text-xl text-white hover:bg-black"
                use:scrollTo={'contact'}
                >Get in touch</a
            >
            </div>

            <div class="artboard artboard-horizontal">
                <img
                    src="vecteezy_worldwide-shipping-concept-with-globe-airplane-van-boat_40747157.png"
                    alt="earth"
                    class="m-auto"
                />
            </div>
            
        </div>
        </div>
    </div>

    <div
        id="why"
        class="flex flex-col flex-wrap items-center gap-10 px-16 py-20 text-center lg:px-72"
        use:scrollRef={'why'}
    >
        <h2 class="m-auto text-5xl font-bold">Why choose us</h2>
        <div id="verified" class="flex flex-col lg:flex-row justify-center gap-8">
            <div class="w-1/2 text-left">
                <h3 class="m-auto text-3xl font-bold pb-4">AI-Powered Optimization</h3>
                <p class="text-xl">
                    Our advanced AI algorithms meticulously analyze vast amounts of data to design the most efficient and cost-effective shipping routes, ensuring your products are delivered faster and at significantly lower costs. This technology allows us to constantly adapt and optimize, providing you with a logistics solution that evolves alongside your business needs."
                </p>
            </div>
            <div class="artboard artboard-horizontal w-1/2">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1608141%2Fearth-from-space.jpg%3Fw%3D1180&f=1&nofb=1&ipt=e7e98864aef7a366b50329a750192007ac2f2a054f65478e0618e2f0beb3552b&ipo=images vecteezy_worldwide-shipping-concept-with-globe-airplane-van-boat_40747157.png"
                    alt="earth"
                    class="m-auto rounded-xl shadow-xl"
                />
            </div>
        </div>

        <div id="" class="flex flex-col lg:flex-row-reverse justify-center gap-8">
            <div class="w-1/2 text-left">
                <h3 class="m-auto text-3xl font-bold pb-4">Verified Warehousing in China</h3>
                <p class="text-xl">
                    We have established partnerships with a network of thoroughly vetted and verified warehouses across China, ensuring that your goods are stored and handled with the utmost care and precision. This reliable infrastructure supports seamless order fulfillment, helping you maintain a consistent and high-quality supply chain."
                </p>
            </div>
            <div class="artboard artboard-horizontal w-1/2">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1608141%2Fearth-from-space.jpg%3Fw%3D1180&f=1&nofb=1&ipt=e7e98864aef7a366b50329a750192007ac2f2a054f65478e0618e2f0beb3552b&ipo=images"
                    alt="earth"
                    class="m-auto rounded-xl shadow-xl"
                />
            </div>
        </div>

        <div id="trusted" class="flex flex-col lg:flex-row justify-center gap-8">
            <div class="w-1/2 text-left">
                <h3 class="m-auto text-3xl font-bold pb-4">Cost-Effective Solutions</h3>
                <p class="text-xl">
By leveraging our AI-driven approach, we help you save up to 60% on your logistics costs compared to traditional methods. Our focus on efficiency doesn't just reduce expenses; it enhances your overall operational effectiveness, allowing you to allocate resources more strategically and boost your bottom line
                </p>
            </div>
            <div class="artboard artboard-horizontal w-1/2">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1608141%2Fearth-from-space.jpg%3Fw%3D1180&f=1&nofb=1&ipt=e7e98864aef7a366b50329a750192007ac2f2a054f65478e0618e2f0beb3552b&ipo=images"
                    alt="earth"
                    class="m-auto rounded-xl shadow-xl"
                />
            </div>
        </div>

        <div id="numbers" class="flex w-full flex-col flex-wrap items-center gap-8">
            <h3 class="m-auto text-3xl font-bold">Numbers</h3>
            <div class="w-full">
                <h4 class="w-full text-5xl text-primary">100%</h4>
                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="w-full">
                <h4 class="w-full text-5xl text-primary">100%</h4>
                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="w-full">
                <h4 class="w-full text-5xl text-primary">100%</h4>
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
                    <p class="text-white">Delyver. All rights reserved.</p>
                    <p class="self-end text-right text-white">2024</p>
                </div>
            </div>
        </footer>
    </div>
</main>
