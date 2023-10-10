import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut, updateUser } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                updateUser(null);
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
    </>

    return (
        <>
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
                    <a className="btn btn-ghost normal-case text-xl">Event Management</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex md:gap-6 lg:gap-8 menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row navbar-end">
                    {
                        user && user?.email
                    }
                    <img src={user?.photoURL} alt={user?.displayName} />
                    {
                        user ? <a onClick={handleLogOut} className="btn">Logout</a> : <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;