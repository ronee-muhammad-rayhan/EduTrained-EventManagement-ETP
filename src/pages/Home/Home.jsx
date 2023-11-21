import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import ServiceCard from "../Services/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();

const Home = () => {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    const services = useLoaderData();

    return (
        <div>
            {/* banner section */}
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <Slider></Slider>
            </div>

            {/* services section */}
            <div data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <section className="py-10">
                    <h3 className="text-center text-3xl font-bold py-8">Our services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mx-auto w-full">
                        {
                            services.services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                        }
                    </div>
                </section>
            </div>

            {/* testimonial section */}
            <div data-aos="flip-right"
                data-aos-duration="2000"
                data-aos-anchor-placement="top">
                <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                        <h1 className="p-4 text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
                    </div>
                    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                                <p className="text-sm uppercase">Aliquam illum</p>
                            </div>
                        </div>
                        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                                <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                                <p className="text-sm uppercase">Aliquam illum</p>
                            </div>
                        </div>
                        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                                <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                                <p className="text-sm uppercase">Aliquam illum</p>
                            </div>
                        </div>
                        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                                <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                                <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                                <p className="text-sm uppercase">Aliquam illum</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <div data-aos="fade-up"
                data-aos-duration="3000"
            >
                <section className="py-10">
                    <div className="w-full dark:bg-gray-500" style={{ backgroundImage: "url('https://source.unsplash.com/random/640x480')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}>
                        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                            <h1 className="text-5xl antialiased font-semibold leadi text-center text-pink-600 dark:text-gray-100">Get Our Updates</h1>
                            <p className="pt-2 pb-8 text-xl antialiased text-center text-white dark:text-gray-100">Find out about events and other news</p>
                            <div className="flex flex-row">
                                <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                                <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-600 dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </section >
            </div>
        </div >
    );
};

export default Home;