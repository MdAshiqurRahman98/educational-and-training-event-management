/* eslint-disable react/prop-types */
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = ({ services }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services?.map((service) => (
                <ServicesCard key={service.id} service={service}></ServicesCard>
            ))}
        </div>
    );
};

export default Services;