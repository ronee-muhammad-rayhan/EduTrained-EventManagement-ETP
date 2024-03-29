import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaUserCheck } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
    const { user, setUser, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('UserEmail: ', user?.email);
                setUser(null);
                navigate('/login');
            })
            .catch(error => console.log(error));
    }

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
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
                    <div className="flex flex-col xl:flex-row-reverse xl:mr-32 gap-3 navbar-end items-center">
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
                                    ''
                        }
                        <div className="mb-2">
                            {
                                user && user?.email
                            }
                        </div>
                    </div >
                    {
                        user?.email ? <>
                            <button onClick={handleLogOut} className="btn">Logout</button>
                        </> : <>
                            <Link to='/login' className="btn">Login</Link>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;