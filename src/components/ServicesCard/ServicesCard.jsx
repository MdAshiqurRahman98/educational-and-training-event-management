/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { id, name, image, price, short_description } = service || {};

    return (
        <Link to={`/services/${id}`}>
            <div className="rounded-lg">
                <div className="mb-1">
                    <img src={image} alt="" />
                </div>
                <div className="p-3">
                    <h2 className="text-xs font-medium mb-1 w-min px-2 py-[2px] rounded-sm">{name}</h2>
                    <p className="text-lg font-semibold">{short_description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServicesCard;