import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import ServiceCard from "../Services/ServiceCard";

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            {/* banner section */}
            <Slider></Slider>

            {/* services section */}
            <section className="py-10">
                <h3 className="text-center text-3xl font-bold py-8">Our services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mx-auto w-full">
                    {
                        services.services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </section>

            {/* CTA Section */}
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
                {/* <div className="w-full dark:bg-gray-500" style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;">
                    <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                        <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">Get Our Updates</h1>
                        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                        <div className="flex flex-row">
                            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
                        </div>
                    </div>
                </div> */}
            </section >
        </div >
    );
};

export default Home;