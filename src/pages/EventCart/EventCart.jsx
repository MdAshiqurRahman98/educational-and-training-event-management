import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const EventCart = () => {
    const services = useLoaderData();

    const [displayServices, setDisplayServices] = useState([]);

    const [serves, setServes] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedServiceIds = getStoredService();
        if (services.length > 0) {

            const servicesAdded = [];
            for (const id of storedServiceIds) {
                const service = services.find(service => service.id === id);
                if (service) {
                    servicesAdded.push(service)
                }
            }
            setDisplayServices(servicesAdded);
            // console.log(services, storedServiceIds, servicesAdded);
        }
    }, [services]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServes(data));
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 -mt-14">
                {
                    displayServices.slice(0, dataLength).map(service => <div key={service.id} className="card rounded-lg p-5 bg-[#F8F8F8] h-96">
                        <div className="mb-1 flex flex-grow justify-center">
                            <img className="w-40 h-36" src={service.image} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-3 mb-1 px-2 py-[2px]">{service.name}</h3>
                            <p className="text-left mb-1">{service.short_description}</p>
                            <p className="text-sm font-semibold mt-2 mb-1">Price: ${service.price}.00</p>
                            <Link to={`/services/${service.id}`}>
                                <button className="btn btn-sm text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-[15px] font-semibold rounded mt-3">View Details</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
            {
                serves && <div className={serves.length < 5 ? 'hidden' : ''}>
                    <div className="text-center mt-5">
                        <div className={dataLength === serves.length ? 'hidden' : ''}>
                            <button onClick={() => setDataLength(serves.length)} className="btn text-white bg-[#009444] hover:bg-[#009444] normal-case text-sm font-semibold rounded-lg mt-3 w-24">See All</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default EventCart;