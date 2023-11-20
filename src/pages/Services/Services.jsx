import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import useAuth from "../../hooks/useAuth";

const Services = () => {

    const services = useLoaderData();
    console.log(services.services);
    const { loading } = useAuth();

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 space-x-1">
            {
                services.services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;