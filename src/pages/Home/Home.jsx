import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import Banner from "./Banner";
import Slider from "./Slider";
import ServiceCard from "../Services/ServiceCard";

const Home = () => {
    // console.log("home");
    const services = useLoaderData();

    return (
        <div>
            {/* <div className="text-3xl">This is Homepage</div> */}
            {/* <Banner></Banner> */}
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
        </div>
    );
};

export default Home;