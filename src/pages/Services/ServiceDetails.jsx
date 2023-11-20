import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    let { id } = useParams();
    console.log(id);
    const data = useLoaderData();
    console.log(data);
    const currentService = data.services.find(service => service.id === parseInt(id));
    console.log(currentService);
    const { name, image, price, shortDescription, detailsInfo } = currentService;
    return (
        <div>


            <section>
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">{name}</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">{shortDescription}</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src={image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
            {/* <section>
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">Provident blanditiis cum exercitationem</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section> */}

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100">
                <h2 className="mb-8 text-4xl font-bold leadi text-center">Key Features</h2>
                <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {
                        detailsInfo?.keyFeatures?.map((keyFeature, idx) => <li key={idx} className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                            </svg>
                            <span>{keyFeature}</span>
                        </li>)
                    }

                </ul>
            </div>

            {/* https://mambaui.com/components/feature */}
            {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100">
                <h2 className="mb-8 text-4xl font-bold leadi text-center">What do we have to offer?</h2>
                <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Ea et neque distinctio</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Quaerat obcaecati voluptatem </span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Quas eius repudianda</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Free and MIT licensed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Praesentium ea et neque distinctio</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-400">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Architecto beatae esse ab amet </span>
                    </li>
                </ul>
            </div> */}



            {/* https://mambaui.com/components/feature */}
            {/* <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">All the features you want</h2>
                        <p className="mt-4 text-lg dark:text-gray-400">Pellentesque viverra, leo id euismod laoreet, nunc risus molestie orci, vel faucibus quam justo id mauris.</p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Quisque at urna</dt>
                                <dd className="mt-2 dark:text-gray-400">Vivamus ultricies bibendum tortor, molestie imperdiet justo cursus eu. Donec quis arcu magna. Integer tempor egestas dolor.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
                                <dd className="mt-2 dark:text-gray-400">Quisque ultricies volutpat sapien nec varius. Sed sit amet justo vestibulum, efficitur risus quis, gravida libero.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Mauris dignissim</dt>
                                <dd className="mt-2 dark:text-gray-400">Phasellus nec molestie arcu. Proin dictum, lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Proin nulla eros</dt>
                                <dd className="mt-2 dark:text-gray-400">Sed ornare ultricies gravida. Morbi egestas dolor turpis, ornare laoreet est vehicula non.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Proin dictum</dt>
                                <dd className="mt-2 dark:text-gray-400">Lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
                                <dd className="mt-2 dark:text-gray-400">Cras a mauris tincidunt, scelerisque justo sit amet, hendrerit est. Fusce venenatis diam fringilla metus convallis, at dapibus enim congue.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cras vel bibendum tellus</dt>
                                <dd className="mt-2 dark:text-gray-400">Curabitur molestie neque ac massa pulvinar, nec sollicitudin nunc consequat. Donec mattis orci eros, vitae porttitor risus pretium eget.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Dignissim magna</dt>
                                <dd className="mt-2 dark:text-gray-400">Cras ac lectus erat. Curabitur condimentum luctus nisi, non lacinia ipsum.</dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div> */}

            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leadi text-center">Testimonials</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">

                    {
                        detailsInfo.testimonials.map((element, index) => <div key={index} className="flex flex-col items-center mx-12 lg:mx-0">
                            <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                <p className="px-6 py-1 text-lg italic">{element?.testimonial}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </div>
                            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                            <p>{element?.clientName}</p>
                        </div>)
                    }

                    {/* https://mambaui.com/components/hero */}

                    {/* <div className="flex flex-col items-center mx-12 lg:mx-0">
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                    <p>Leroy Jenkins</p>
                </div>

                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                    <p>Leroy Jenkins</p>
                </div> */}
                </div>
            </section>

        </div>
        // <section className="my-8">
        //     <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        //         <h1 className="text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
        //     </div>
        //     <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        //         <div className="flex flex-col items-center mx-12 lg:mx-0">
        //             <div className="relative text-center">
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
        //                     <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
        //                     <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
        //                 </svg>
        //                 <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
        //                     <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
        //                     <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
        //                 </svg>
        //             </div>
        //             <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
        //             <p>Leroy Jenkins</p>
        //         </div>
        //         <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
        //             <div className="relative text-center">
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
        //                     <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
        //                     <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
        //                 </svg>
        //                 <p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
        //                     <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
        //                     <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
        //                 </svg>
        //             </div>
        //             <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
        //             <p>Leroy Jenkins</p>
        //         </div>
        //     </div>
        // </section>
        // <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
        //     <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
        //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 dark:text-violet-400">
        //             <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
        //             <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
        //         </svg>
        //         <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-300">"Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis."</p>
        //         <div className="flex justify-center space-x-3">
        //             <img src="https://source.unsplash.com/80x80/?portrait?1" alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500 dark:bg-gray-700" />
        //             <div>
        //                 <p className="leadi">Leroy Jenkins</p>
        //                 <p className="text-sm leadi dark:text-gray-300">Founder, Company</p>
        //                 <a className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400" href="/">
        //                     <span>Read full story</span>
        //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        //                         <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        //                     </svg>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        // <div className="">
        //     {/* <img src={image} alt="" /> */}
        //     <div className="card bg-base-100 shadow-xl h-[480px]">
        //         <figure className="h-[200px] bg-blue-600" ><img className="object-cover" src={image} alt={title} /></figure>
        //         <div className="card-body flex justify-between">
        //             <div className="grow">
        //                 <h2 className="card-title">
        //                     {title}
        //                     <div className="badge badge-secondary">NEW</div>
        //                 </h2>
        //                 <p>{description}</p>
        //                 <p>${price}</p>
        //             </div>
        //             <button className="btn btn-secondary flex-0">Enroll Now</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ServiceDetails;