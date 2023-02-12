import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between md:items-center font-bold px-10 py-5 mb-10'>
            <div>
                <h1 className='text-7xl mb-3'>A Simple Blog App</h1>
                <h2 className='mt-5 md:mt-0'>
                    Welcome to <span className='underline decoration-2 decoration-emerald-500'>Every Developers</span> favourite blog in the city.
                </h2>
            </div>

            <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
                New product features | The latest in technology | The weekly debugging & More!
            </p>
        </div>
    );
};

export default Banner;