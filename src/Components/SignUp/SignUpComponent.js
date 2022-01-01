import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import { useEffect } from 'react';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const SignUpComponent = () => {
    const {
        user,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleForm,
        error,
        signInUsingGoogle,
        signInUsingGithub
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/sign-up';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => { history.push(redirect_uri); })
    }
    const handleGithubLogin = () => {
        signInUsingGithub().then((response) => { history.push(redirect_uri); })
    }
    useEffect(() => {
        if (user.email) {
            history.push(redirect_uri);
        }
    }, [history, redirect_uri, user.email]);
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
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleForm}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label onBlur={handleNameChange} htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                name="full-name"
                                                id="full-name"
                                                autoComplete="full-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label onBlur={handleEmailChange} htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
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
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label onBlur={handleEmailChange} htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                autoComplete="password"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-6">
                                            <label onBlur={handleEmailChange} htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
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
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SignUpComponent;


// <>
//     <div>
//         <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//                 <div className="px-4 sm:px-0">
//                     <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
//                     <p className="mt-1 text-sm text-gray-600">
//                         This information will be displayed publicly so be careful what you share.
//                     </p>
//                 </div>
//             </div>
//             <div className="mt-5 md:mt-0 md:col-span-2">
//                 <form action="#" method="POST">
//                     <div className="shadow sm:rounded-md sm:overflow-hidden">
//                         <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Photo</label>
//                                 <div className="mt-1 flex items-center">
//                                     <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
//                                         <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                                         </svg>
//                                     </span>
//                                     <button
//                                         type="button"
//                                         className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                     >
//                                         Change
//                                     </button>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Cover photo</label>
//                                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                                     <div className="space-y-1 text-center">
//                                         <svg
//                                             className="mx-auto h-12 w-12 text-gray-400"
//                                             stroke="currentColor"
//                                             fill="none"
//                                             viewBox="0 0 48 48"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                                                 strokeWidth={2}
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                             />
//                                         </svg>
//                                         <div className="flex text-sm text-gray-600">
//                                             <label
//                                                 htmlFor="file-upload"
//                                                 className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//                                             >
//                                                 <span>Upload a file</span>
//                                                 <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                                             </label>
//                                             <p className="pl-1">or drag and drop</p>
//                                         </div>
//                                         <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                             <button
//                                 type="submit"
//                                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>

//     <div className="hidden sm:block" aria-hidden="true">
//         <div className="py-5">
//             <div className="border-t border-gray-200" />
//         </div>
//     </div>

//     <div className="mt-10 sm:mt-0">
//         <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//                 <div className="px-4 sm:px-0">
//                     <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
//                     <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
//                 </div>
//             </div>
//             <div className="mt-5 md:mt-0 md:col-span-2">
//                 <form action="#" method="POST">
//                     <div className="shadow overflow-hidden sm:rounded-md">
//                         <div className="px-4 py-5 bg-white sm:p-6">
//                             <div className="grid grid-cols-6 gap-6">
//                                 <div className="col-span-6 sm:col-span-3">
//                                     <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
//                                         First name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="first-name"
//                                         id="first-name"
//                                         autoComplete="given-name"
//                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                                     />
//                                 </div>

//                                 <div className="col-span-6 sm:col-span-3">
//                                     <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
//                                         Last name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="last-name"
//                                         id="last-name"
//                                         autoComplete="family-name"
//                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                                     />
//                                 </div>

//                                 <div className="col-span-6 sm:col-span-4">
//                                     <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
//                                         Email address
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="email-address"
//                                         id="email-address"
//                                         autoComplete="email"
//                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                                     />
//                                 </div>

//                                 <div className="col-span-6 sm:col-span-3">
//                                     <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                                         Country
//                                     </label>
//                                     <select
//                                         id="country"
//                                         name="country"
//                                         autoComplete="country-name"
//                                         className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     >
//                                         <option>United States</option>
//                                         <option>Canada</option>
//                                         <option>Mexico</option>
//                                     </select>
//                                 </div>

//                                 <div className="col-span-6">
//                                     <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
//                                         Street address
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="street-address"
//                                         id="street-address"
//                                         autoComplete="street-address"
//                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                                     />
//                                 </div>

//                                 <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                                     <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                                         City
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="city"
//                                         id="city"
//                                         autoComplete="address-level2"
//                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                                     />
//                                 </div>

//                                 <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                                     <label htmlFor="region" className="block text-sm font-medium text-gray-700">
//                                         State / Province
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="region"
//                                         id="region"
//                                         autoComplete="address-level1"
//                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                                     />
//                                 </div>

//                                 <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                                     <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
//                                         ZIP / Postal code
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="postal-code"
//                                         id="postal-code"
//                                         autoComplete="postal-code"
//                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                             <button
//                                 type="submit"
//                                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>

//     <div className="hidden sm:block" aria-hidden="true">
//         <div className="py-5">
//             <div className="border-t border-gray-200" />
//         </div>
//     </div>

// </>



        
        
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