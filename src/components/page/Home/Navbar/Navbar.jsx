import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error);
            });
    }
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>


            {user ?
                <>
                   
                    <li>
                        <NavLink to = "/detail">Packages</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/fqa">FQA</NavLink>
                    </li>
                </>
                :
                <>    <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </>

            }
        </>
    );
    return (
        <div className="bg-emerald-100">
            <div className="navbar bg-emerald-100 p-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-outline btn-info lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="form-control hidden lg:flex ">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="normal-case text-cyan-800 font-serif font-extrabold text-4xl lg:text-6xl">TechShade</Link>
                </div>
                <div className="navbar-end">
                    <div className="flex-none gap-2">
                        {
                            user ?.email?

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName}
                                            </a>
                                        </li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </div>

                                :
                                <Link to="/login" className="btn btn-outline btn-info">Login</Link>

                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-cyan-300 my-2"></div>
            <div className="justify-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;