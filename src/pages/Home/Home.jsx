import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Services from "../../components/Services/Services";


const Home = () => {
    const services = useLoaderData();

    return (
        <div className="text-center">
            <Banner></Banner>
            <h3 className="text-3xl font-bold text-center mb-9">Our Services</h3>
            <div className="join mb-14">
                <input className="input input-bordered join-item w-64" placeholder="Search here..." />
                <button className="btn join-item rounded-r-xl normal-case w-24 bg-[#FF444A] text-white hover:bg-[#FF444A]">Search</button>
            </div>
            <Services services={services}></Services>
            <h3 className="text-3xl font-bold text-center mt-9 mb-9">About Us</h3>
        </div>
    );
};

export default Home;