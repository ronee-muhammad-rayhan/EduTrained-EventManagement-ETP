import { Link } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { useRef } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const auth = getAuth(app);


const Register = () => {
    const { user, updateUser } = useAuth();
    const form = useRef(null);
    const { createUser } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const formdata = new FormData(form.current);
        // console.log(formdata.email);
        const email = formdata.get('email');
        const name = formdata.get('name');
        const photo = formdata.get('photo');
        const password = formdata.get('password');
        console.log(email, name, photo, password);
        createUser(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                updateUser(userCredential.user);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    console.log('Profile updated successfully');
                }).catch((error) => {
                    // An error occurred
                    console.error(error);
                });

            })
            .catch((error) => {
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
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Display name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                    {/* <input type="file" name="photo" accept="image/*" multiple="false" className="file-input file-input-bordered file-input-accent w-full max-w-xs" /> */}
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
                    <Link to={user && '/dashboard'}><button type="submit" name="submit" className="btn btn-primary">Register</button></Link>
                </div>
            </form>
            <p className="text-center">Already have an account? <Link className="text-blue-600" to='/login'>Login</Link></p>
        </div>
    );
}

export default Register;