import React, { useState } from 'react';
import { useAppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({});
    const { state, setCurrentUser } = useAppContext();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("from oru ", user);
        const cred = state?.user?.find(item => item.ID == user.userID)
        console.log(cred);
        if (cred != undefined && cred?.password == user?.password) {
            if (cred.Role == 'admin') navigate('/');
            if (cred.Role == 'oru') navigate('/oru');
            if (cred.Role == 'rio') navigate('/rio');
            if (cred.Role == 'cso') navigate('/cso');
            setCurrentUser(cred)
        }

        else {
            alert("Invalid Credentials")
        }
    };


    return (

        <section className="min-h-screen flex flex-col">
            <nav>
                <div className="px-4 py-6">

                </div>
            </nav>
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form onSubmit={handleSubmit} className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign in
                        </h1>
                        <div className="py-2 text-left">
                            <input
                                name='userID'
                                onChange={handleChange}
                                type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="User Id" />
                        </div>
                        <div className="py-2 text-left">
                            <input
                                name='password'
                                onChange={handleChange}
                                type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Don't have an account?
                        </span>
                        <a href="#" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;