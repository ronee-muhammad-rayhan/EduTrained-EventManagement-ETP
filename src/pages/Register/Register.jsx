import { Link } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-3xl text-center">Please Register</h3>
            <form className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center">Already have an account? <Link className="text-blue-600" to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;