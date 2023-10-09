import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { useRef, useState } from "react";

const Register = () => {
    const { updateUser } = useAuth();
    // const [isAuthenticated, setIsAuthenticated] = useState(null);

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const form = useRef(null);
    const { createUser } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const formdata = new FormData(form.current);
        // console.log(formdata.email);
        const email = formdata.get('email');
        const password = formdata.get('password');
        console.log(email, password);
        const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{6,}$/;
        if (passwordRegex.test(password)) {
            console.log("Password is valid");
        } else {
            return console.log("Password should atleast 6 characters long with minimum one capital letter and one special character");
        }
        createUser(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                updateUser(userCredential.user);
                navigate('/dashboard');
                // setIsAuthenticated(true);
            })
            .catch((error) => {
                // setIsAuthenticated(false);
                setError(error.message);
                console.error(error);
            });
    }
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-3xl text-center">Please Register</h3>
            <form ref={form} id="register-form" className="md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" name="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center">Already have an account? <Link className="text-blue-600" to='/login'>Login</Link></p>
            <p className="text-center text-red-500">{error}</p>
        </div>
    );
}

export default Register;