import React from 'react';
import { Link } from 'react-router-dom';
import './PriceSection.css'
import useAuth from '../../Hooks/useAuth';

const PriceSection = () => {
    const { user } = useAuth();

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Drive training fees
                    </p>
                </div>

                <>
                    <div className="container">
                        <div className="panel pricing-table">


                            <div className="pricing-plan">
                                <h2 className="pricing-header">Bike Lesson</h2>
                                <ul className="pricing-features">
                                    <li className="pricing-features-item">2 Months</li>
                                    <li className="pricing-features-item">No bike needed</li>
                                </ul>
                                <span className="pricing-price">$100</span>
                                {user.email ?
                                    <Link to="/pricing/checkout/:Bike" className="pricing-button is-featured">Purchase</Link> :
                                    <Link to="/sign-up" className="pricing-button is-featured">Sign up</Link>
                                }
                            </div>

                            <div className="pricing-plan">
                                <h2 className="pricing-header">Car Lesson</h2>
                                <ul className="pricing-features">
                                    <li className="pricing-features-item">3 Months</li>
                                    <li className="pricing-features-item">Basic Engine Knowledge</li>
                                </ul>
                                <span className="pricing-price">$200</span>
                                {user.email ?
                                    <Link to="/pricing/checkout/:Car" className="pricing-button is-featured">Purchase</Link> :
                                    <Link to="/sign-up" className="pricing-button is-featured">Sign up</Link>
                                }
                            </div>

                        </div>
                    </div>
                </>
            </div>
        </div >
    );
}

export default PriceSection;