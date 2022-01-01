import React from 'react';

const NotFound = () => {
    return (
        <>
            <div className="h-96 not-found">
                <div className="h-96 sm:text-center lg:text-Center">
                    <h1 className="h-96 text-9xl tracking-tight font-extrabold text-red-500 sm:text-5xl md:text-6xl">
                        <span className="text-9xl block xl:inline">404</span>{' '}
                        <br />
                        <span className="text-7xl block text-indigo-600 xl:inline">Not Found</span>
                    </h1>
                </div>
            </div >
        </>
    );
};

export default NotFound;