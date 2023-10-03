import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { AuthContext } from "../../authProvider/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const { createRegistration } = useContext(AuthContext)
    
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo_url = form.get('photo_url');
        const email = form.get('email');
        const password = form.get('password');
        const term = form.get('term');
        // console.log(name, photo_url, email, password, term)

        // create registration
        createRegistration(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div>
            <div className=" bg-[#F3F3F3] md:px-32 pt-5  min-h-screen pb-5">
            {/* navbar section here */}
            <Navbar/>
            
            {/* login form here */}
            <div className="hero-content flex-col lg:w-2/4 mx-auto ">
                <div className="text-center my-3 ">
                    <h1 className=" text-4xl  font-semibold">Register your account</h1>
                </div>
                <div className="card w-full bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo_url" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className=" my-4">
                            <input type="checkbox" name="term" id="term" className="mr-2" />
                            <label htmlFor="term" className=" text-[#706F6F] text-base font-medium">Accept Term & Conditions</label>    
                                
                        </div> 
                            
                        <div className="form-control mt-6">
                            <button className="btn btn-primary normal-case">Register</button>
                        </div>
                    </form>
                    <div className=" py-5 text-center">
                        <h4>Already have An Account ? <Link to='/login' className=" text-orange-400">Login</Link></h4>
                    </div>
                </div>
            </div>
        </div>    
        </div>
    );
};

export default Register;