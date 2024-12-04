import React from 'react';

function Hub() {
    return (
        <div className="h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className='grid items-center justify-center text-white'>
                <div className='w-full py-16 px-4'>
                    <div className='backdrop-blur rounded-lg px-10 py-10 text-white mt-40'>
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">
                            Teach'shop <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600">the world's #1</span> SHOP.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hub;