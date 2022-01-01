import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const SignUpComponent = () => {
    const {
        user,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleForm,
        error,
        signInUsingGoogle,
        handlePhoneChange,
        handleCountryChange,
        handleAgeChange,
        handleAddressChange,
        handleCityNameChange,
        handleStateNameChange,
        handleZipChange
        
    } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/profile';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => { navigate(redirect_uri); })
    }
    // const handleGithubLogin = () => {
    //     signInUsingGithub().then((response) => { navigate(redirect_uri); })
    // }
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
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleForm}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                                                Full name
                                            </label>
                                            <input
                                                onBlur={handleNameChange}
                                                type="text"
                                                name="full-name"
                                                id="full-name"
                                                autoComplete="full-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                onBlur={handleEmailChange}
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                Phone
                                            </label>
                                            <input
                                                onBlur={handlePhoneChange}
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="phone"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country
                                            </label>
                                            <select
                                                onSelect={handleCountryChange}
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                                <option>Bangladesh</option>
                                                <option>India</option>
                                                <option>China</option>
                                                <option>Pakistan</option>
                                                <option>Australia</option>
                                                <option>Germany</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                                Age
                                            </label>
                                            <input
                                                onBlur={handleAgeChange}
                                                type="number"
                                                name="age"
                                                id="age"
                                                autoComplete="age"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Street address
                                            </label>
                                            <input
                                                onBlur={handleAddressChange}
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                City
                                            </label>
                                            <input
                                                onBlur={handleCityNameChange}
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                State / Province
                                            </label>
                                            <input
                                                onBlur={handleStateNameChange}
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                onBlur={handleZipChange}
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                            </label>
                                            <input
                                                onBlur={handlePasswordChange}
                                                type="password"
                                                name="password"
                                                id="password"
                                                autoComplete="password"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                                Confirm password
                                            </label>
                                            <input
                                                type="password"
                                                name="confirm-password"
                                                id="confirm-password"
                                                autoComplete="confirm-password"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="px-4 py-4 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span>
                                        Sign up
                                    </button>
                                </div>
                                <div className="px-4 py-4 bg-gray-50 text-right sm:px-6">
                                    <Link style={{ textDecoration: "none" }} to='/sign-in'>
                                    <button
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-white hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                    >Already have Account?
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='input-area-btn'>
                        <button onClick={handleGoogleLogin} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3"><AiFillGoogleCircle className="h-5 w-5 text-white group-hover:text-white" aria-hidden="true" />
                            </span>
                            Sign Up With Google
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SignUpComponent;





        
        
        // <form onSubmit={handleForm} >
        //     <div className='input-area'>
        //         <input
        //             onBlur={handleNameChange}
        //             className='signup-input'
        //             name='name'
        //             type='text'
        //             placeholder='your name'
        //         />
        //         <input
        //             onBlur={handleEmailChange}
        //             className='signup-input'
        //             name='email'
        //             type='email'
        //             placeholder='Put E-mail'
        //         />
        //         <input
        //             onBlur={handlePasswordChange}
        //             className='signup-input'
        //             name='password'
        //             type='password'
        //             placeholder='Put password'
        //         />
        //         <input
        //             className='signup-input'
        //             name='confirm-password'
        //             type='password'
        //             placeholder='Confirm Password'
        //         />
        //         <p style={{ margin: "2px" }} className="row mb-3 text-danger">{error}</p>
        //         <Button
        //             style={{ textDecoration: "none", margin: "7px" }}
        //             buttonSize='btn--medium'
        //             buttonColor='blue'>Sign Up</Button>
        //         <Link style={{ textDecoration: "none" }} to='/sign-in'>
        //             <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black' > Already have Account?</Button>
        //         </Link>
        //     </div>
        // </form>
        

        // <div className='input-area-btn'>
        //     <h2 className='signup-heading'>
        //         Sign Up with</h2>
        //     <Button onClick={handleGoogleLogin} buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillGoogleCircle className='auth-icons' /> Sign Up With Google</Button>
        //     <Button onClick={handleGithubLogin} buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiOutlineGithub className='auth-icons' />Sign Up With Github</Button>
        // </div>