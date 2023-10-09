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

            <h3 className="text-3xl font-bold text-center mt-20 mb-14">To Grab Our Service</h3>
            <ul className="steps steps-vertical lg:steps-horizontal lg:w-[700px] text-lg font-semibold mb-11">
                <li className="step step-neutral">Login/Register</li>
                <li className="step step-neutral">View Details</li>
                <li className="step">Purchase</li>
                <li className="step">Get Service</li>
            </ul>

            <h3 className="text-3xl font-bold text-center mt-9 mb-9">About Us</h3>
            <p className="text-center mb-14">
                As a premier educational and training event management company, Team Event excels at crafting immersive experiences that catalyze professional growth and collaboration. Our diverse range of services, including workshops and webinars, educational conferences, training programs, and more, are designed to empower participants with the knowledge, skills, and networks essential for success. Through hands-on activities, expert-led sessions, and engaging interactions, Team Event fosters a culture of teamwork and skill development. We inspire individuals to not only excel in their current roles but also embrace future opportunities, making Team Event the catalyst for collective achievement and personal advancement in today`s competitive landscape.</p>
        </div>
    );
};

export default Home;