import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-7 md:px-16 lg:px-16 py-3 mb-11 mt-1">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;