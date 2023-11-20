import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaUserCheck } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                console.log('log-out successful');
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    const navLinks = <>
        <NavLink to='/' style={({ isActive, isPending }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                // color: isPending ? "red" : "black",
                color: isPending ? 'blue' : isActive ? 'red' : 'black'
            };
        }}>Home</NavLink>
        <NavLink to='/about' style={({ isActive, isPending }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                // color: isPending ? "red" : "black",
                color: isPending ? 'blue' : isActive ? 'red' : 'black'
            };
        }}>About</NavLink>
        <NavLink to='/login' style={({ isActive, isPending }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                // color: isPending ? "red" : "black",
                color: isPending ? 'blue' : isActive ? 'red' : 'black'
            };
        }}>Login</NavLink>
        <NavLink to='/register' style={({ isActive, isPending }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                // color: isPending ? "red" : "black",
                color: isPending ? 'blue' : isActive ? 'red' : 'black'
            };
        }}>Register</NavLink>
        <NavLink to='/services' style={({ isActive, isPending }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                // color: isPending ? "red" : "black",
                color: isPending ? 'blue' : isActive ? 'red' : 'black'
            };
        }}>Services</NavLink>
        <NavLink to='/blog' style={({ isActive, isPending }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                // color: isPending ? "red" : "black",
                color: isPending ? 'blue' : isActive ? 'red' : 'black'
            };
        }}>Blog</NavLink>
        <NavLink to='/contact' style={({ isActive, isPending }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                // color: isPending ? "red" : "black",
                color: isPending ? 'blue' : isActive ? 'red' : 'black'
            };
        }}>Contact</NavLink>
    </>

    return (
        <nav className="mb-4">
            <div className="flex flex-col md:flex-row navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="flex gap-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl text-pink-600">EduTrained</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex md:gap-6 lg:gap-8 menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row navbar-end">
                    <div className="flex flex-col xl:flex-row-reverse navbar-end items-center">
                        {
                            user && user?.photoURL
                                ?
                                <div className="flex flex-col items-center justify-center p-1">
                                    <div className="flex flex-wrap gap-x-2 gap-y-2">
                                        <div className="relative flex-shrink-0">
                                            <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                            <img src={user?.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                        </div>

                                    </div>
                                </div>
                                : user && !user?.photoURL
                                    ?
                                    <div className="flex flex-col items-center justify-center p-2">
                                        <div className="flex space-x-5">
                                            <FaUserCheck className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"></FaUserCheck>
                                        </div>
                                    </div>
                                    :
                                    undefined

                        }
                        {/* https://mambaui.com/components/avatar */}
                        {/* <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-wrap gap-x-2 gap-y-2">
                                <div className="relative flex-shrink-0">
                                    <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                </div>
                                <div className="relative flex-shrink-0">
                                    <span className="absolute bottom-0 right-0 w-4 h-4 border rounded-full dark:bg-amber-500 dark:border-gray-900"></span>
                                    <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                </div>
                                <div className="relative flex-shrink-0">
                                    <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 dark:bg-red-600 border rounded-full dark:border-gray-900 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-3 fill-current">
                                            <rect width="368" height="32" x="72" y="240"></rect>
                                        </svg>
                                    </span>
                                    <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                </div>
                                <div className="relative flex-shrink-0">
                                    <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 border rounded-full dark:bg-gray-900 dark:text-gray-100 dark:border-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-2 fill-current">
                                            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                                        </svg>
                                    </span>
                                    <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="flex flex-col items-center justify-center p-2">
                            <div className="flex space-x-5">
                                <FaUserCheck className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"></FaUserCheck>
                            </div>
                        </div> */}
                        <div className="mb-2">
                            {
                                user && user?.email
                            }
                        </div>
                        {/* <img src={user?.photoURL} alt={user?.displayName} /> */}


                        {/* <div className="flex flex-col items-center justify-center">
                        <div className="flex space-x-5">
                            <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src="https://source.unsplash.com/40x40/?portrait?1" />
                        </div>
                        </div> */}

                    </div >

                    {
                        user ? <a onClick={handleLogOut} className="btn">Logout</a> : <Link to='/login' className="btn">Login</Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;