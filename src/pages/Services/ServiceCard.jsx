import { useNavigate } from "react-router-dom";
const ServiceCard = ({ service }) => {
    const { id, image, name, price, shortDescription } = service;
    const navigate = useNavigate();

    const handleSeeDetails = () => {
        navigate(`/services/${id}`);
    }
    return (
        <div className="">
            {/* <img src={image} alt="" /> */}
            <div className="card bg-base-100 shadow-xl h-[480px]">
                <figure className="h-[200px] bg-blue-600" ><img className="object-cover" src={image} alt={name} /></figure>
                <div className="card-body flex justify-between">
                    <div className="grow">

                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <p>{shortDescription}</p>
                        <p>${price}</p>
                    </div>
                    <button onClick={handleSeeDetails} className="btn btn-secondary flex-0">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;