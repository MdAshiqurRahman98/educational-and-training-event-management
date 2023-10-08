import ServicesCard from "../ServicesCard/ServicesCard";
import PropTypes from 'prop-types';

const Services = ({ services }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {services?.map((service) => (
                <ServicesCard key={service.id} service={service}></ServicesCard>
            ))}
        </div>
    );
};

export default Services;

Services.propTypes = {
    services: PropTypes.array
}