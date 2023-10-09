import { Link } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import { useRef } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { updateUser } = useAuth();
    const form = useRef(null);
    const { signIn } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const formdata = new FormData(form.current);
        // console.log(formdata.email);
        const email = formdata.get('email');
        const password = formdata.get('password');
        console.log(email, password);
        signIn(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                updateUser(userCredential.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-3xl text-center">Please Login</h3>
            <form ref={form} id="login-form" className="md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleSubmit}>
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
                    <button type="submit" name="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">Don&apos;t have an account? <Link className="text-blue-600" to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;