import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase";
import { useState } from "react";

const Login = () => {
    const [error,setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLoginSubmit = e => {

        setError('');
        setSuccess('');
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
            console.log(userCredential.user);
            setSuccess('Logged in successfully')
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
        })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat .</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    {/* email */}
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    {/* password */}
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <p>New user? <Link to={'/registration'} className="text-blue-600 hover:underline">Register</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div>
                                    {error && <p className="text-red-600">{error}</p>}
                                    {success && <p className="text-green-600">{success}</p>}
                                </div>
                            </div></form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;