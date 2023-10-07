import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="">
            <nav className="flex justify-between py-5 mb-24 items-center">
                <figure><img className="w-[79%]" src="/public/Resources/Logo.png" alt="" /></figure>
                <ul className="flex gap-5">
                    <li className="text-lg">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF444A] text-lg font-bold"
                                        : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/eventCart"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF444A] text-lg font-bold"
                                        : ""
                            }
                        >
                            Event Cart
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF444A] text-lg font-bold"
                                        : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF444A] text-lg font-bold"
                                        : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF444A] text-lg font-bold"
                                        : ""
                            }
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;