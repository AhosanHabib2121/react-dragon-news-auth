import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('location in the login page', location)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                // console.log(result.user);
                navigate(location?.state ? location.state:'/')
                // e.target.reset();
            })
            .catch(error => console.error(error))

    }

    return (
        <div className=" bg-[#F3F3F3] md:px-32 pt-5  min-h-screen pb-5">
            {/* navbar section here */}
            <Navbar/>
            
            {/* login form here */}
            <div className="hero-content flex-col lg:w-2/4 mx-auto ">
                <div className="text-center my-3 ">
                    <h1 className=" text-4xl  font-semibold">Login your account</h1>
                </div>
                <div className="card w-full bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary normal-case">Login</button>
                        </div>
                    </form>
                    <div className=" py-5 text-center">
                        <h4>Do not Have An Account ? <Link to='/register' className=" text-orange-400">Register</Link></h4>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Login;