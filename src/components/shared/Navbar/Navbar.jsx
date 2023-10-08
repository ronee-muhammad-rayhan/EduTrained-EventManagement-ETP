import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="md:flex justify-between">
            <div className="text-2xl">This is Navbar</div>
            <div id="navbar" className="flex gap-2">
                {/* <NavLink to='/' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>Home</NavLink> */}

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
            </div>
        </nav>
    );
};

export default Navbar;