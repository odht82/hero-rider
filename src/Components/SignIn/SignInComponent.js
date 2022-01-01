import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const SignInComponent = () => {

    const [loginData, setLoginData] = useState({});
    
    const {
        user,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleForm,
        error,
        signInUsingGoogle,
        loginUser,
        loading
    } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        e.preventDefault();
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => { navigate(redirect_uri); })
    }

    
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/home';
    useEffect(() => {
        if (user.email) {
            navigate(redirect_uri);
        }
    }, [navigate, redirect_uri, user.email]);
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" onSubmit={handleLoginSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={handleOnChange}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={handleOnChange}
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                        <div className='input-area-btn'>
                            <button onClick={handleGoogleLogin} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3"><AiFillGoogleCircle className="h-5 w-5 text-white group-hover:text-white" aria-hidden="true" />
                                </span>
                                Sign in With Google
                            </button>
                        </div>
                        <div>
                            <Link style={{ textDecoration: "none" }} to='/sign-up'>
                                <button
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-white hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                >Don't have Account?
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignInComponent;