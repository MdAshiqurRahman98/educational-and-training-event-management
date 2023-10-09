import { useLoaderData, useParams } from "react-router-dom";
import { saveService } from "../../utilities/localStorage";
import Swal from "sweetalert2/src/sweetalert2.js";


const ServiceDetail = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt);
    // console.log(service);

    const handleService = () => {
        saveService(idInt);

        Swal.fire({
            icon: "success",
            title: "Successful",
            text: "You have bought the service!",
        });
    }

    return (
        <div className="mb-11">
            <figure className="flex justify-center"><img className="rounded-md w-[300px] h-[300px]" src={service.image} alt="Service image" /></figure>
            <div className="flex justify-end">
                <button onClick={handleService} className="btn text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-lg font-medium rounded mr-9">Buy Now ${service.price}</button>
            </div>
            <h3 className="my-5 text-4xl font-bold">{service.name}</h3>
            <p className="text-justify">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;