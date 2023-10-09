import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    return (
        <div>
            <nav className="flex justify-between py-1 mb-3 items-center">
                <figure><img className="w-[300px] h-[100px] -ml-14 mt-2" src="/public/logo.png" alt="" /></figure>
                <ul className="flex gap-5 flex-1 items-center justify-end">
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
                        {
                            !user && <NavLink
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
                        }
                    </li>

                    <li className="text-lg">
                        {
                            !user && <NavLink
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
                        }
                    </li>

                    {/* <li>
                        {
                            user ? <>
                                <span className="mr-1">{user.email}</span>
                                <span className="mr-3">{user.displayName}</span>
                                <a onClick={handleLogOut} className="btn btn-sm mr-3 normal-case">Logout</a>
                            </>
                                : <Link to="/login">
                                    <button className="btn btn-sm mr-3 normal-case">Login</button>
                                </Link>
                        }
                    </li> */}
                </ul>
                <ul>
                    <li className="text-lg ml-60">
                        {
                            user ? <div className="flex items-center">
                                <span>{user.email}</span>
                                <span className="mr-1">{user.displayName}</span>
                                <span className="mr-1"><img className="rounded-full w-9" src={user.photoURL} alt="" /></span>
                                <NavLink
                                    onClick={handleLogOut}
                                >
                                    <button className="btn btn-sm normal-case text-white bg-[#FF444A] hover:bg-[#FF444A]">Logout</button>
                                </NavLink>
                            </div>
                                : <NavLink
                                    to="/login"
                                >
                                    <button className="btn btn-sm normal-case text-white bg-[#FF444A] hover:bg-[#FF444A]">Login Now</button>
                                </NavLink>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;