
import PropTypes from "prop-types"
const ServiceCard = ({ service }) => {
    const { image, title, price, description } = service;
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
                        <p>{price}</p>
                    </div>
                    <button className="btn btn-secondary flex-0">See Details</button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
        description: PropTypes.any,
        image: PropTypes.any,
        price: PropTypes.any,
        title: PropTypes.any
    })
}

export default ServiceCard;