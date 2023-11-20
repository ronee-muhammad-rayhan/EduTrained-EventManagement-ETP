import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    let { id } = useParams();
    const data = useLoaderData();
    const currentService = data.services.find(service => service.id === parseInt(id));
    const { name, image, price, detailsInfo } = currentService;
    return (
        <div>
            <section>
                <div className="dark:bg-violet-400 relative">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">{name}</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">{detailsInfo.description}</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Add this Event to Cart </button>
                            <a href="#keyFeatures"><button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button></a>
                        </div>
                    </div>
                    <h3 className="absolute top-0 right-0"><button type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Price: ${price}
                        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">New</span>
                    </button></h3>
                </div>
                <img src={image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
            <div id="keyFeatures" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100">
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
                </div>
            </section>
            <button type="button" className="w-full px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Add this Event to Cart </button>
        </div>
    );
};

export default ServiceDetails;