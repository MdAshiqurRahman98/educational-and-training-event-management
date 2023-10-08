import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServicesCard = ({ service }) => {
    const { id, name, image, price, short_description } = service || {};

    return (
        <div className="card rounded-lg p-5 bg-[#F8F8F8] h-96">
            <div className="mb-1 flex flex-grow justify-center">
                <img className="w-40 h-36" src={image} alt="" />
            </div>
            <div>
                <h3 className="text-xl font-bold mt-3 mb-1 px-2 py-[2px]">{name}</h3>
                <p className="text-left mb-1">{short_description}</p>
                <p className="text-sm font-semibold mt-2 mb-1">Price: ${price}.00</p>
                <Link to={`/services/${id}`}>
                    <button className="btn btn-sm text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-[15px] font-semibold rounded mt-3">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesCard;

ServicesCard.propTypes = {
    service: PropTypes.object
}