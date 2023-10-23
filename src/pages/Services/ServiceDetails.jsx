import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    let { id } = useParams();
    console.log(id);
    const data = useLoaderData();
    console.log(data);
    const currentService = data.find(service => service.id === parseInt(id));
    console.log(currentService);
    const { title, description, image, price } = currentService;
    return (
        <div className="">
            {/* <img src={image} alt="" /> */}
            <div className="card bg-base-100 shadow-xl h-[480px]">
                <figure className="h-[200px] bg-blue-600" ><img className="object-cover" src={image} alt={title} /></figure>
                <div className="card-body flex justify-between">
                    <div className="grow">
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{description}</p>
                        <p>${price}</p>
                    </div>
                    <button className="btn btn-secondary flex-0">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;