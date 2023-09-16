import React from 'react';

export function FeaturesList() {
    return (
        <div className='mb-10 md:mt-0 mt-20 flex flex-wrap justify-center gap-5'>
            <div className="bg-gray-200 border border-zinc-300 p-3 rounded-lg flex items-center">
                <img
                    src="https://img.icons8.com/?size=512&id=TdgoFB7uKPlI&format=png"
                    className="w-10 h-10"
                />
                <p
                    className="font-bridge font-bold text-black md:w-3/4 mx-5 text-xl select-none"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    Secure Payment
                </p>
            </div>

            <div className="bg-gray-200 border border-zinc-300 p-3 rounded-lg flex items-center">
                <img
                    src="https://img.icons8.com/?size=512&id=woMC0BA8mqBt&format=png"
                    className="w-10 h-10"
                />
                <p
                    className="font-bridge font-bold text-black md:w-3/4 mx-5 text-xl select-none"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    24/7 Support
                </p>
            </div>

            <div className="bg-gray-200 border border-zinc-300 p-3 rounded-lg flex items-center">
                <img
                    src="https://img.icons8.com/?size=512&id=sH5IBgX3H7wP&format=png"
                    className="w-10 h-10"
                />
                <p
                    className="font-bridge font-bold text-black md:w-3/4 mx-5 text-xl select-none"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    Fast Delivery
                </p>
            </div>

            <div className="bg-gray-200 border border-zinc-300 p-3 rounded-lg flex items-center">
                <img
                    src="https://img.icons8.com/?size=512&id=yEzFx4cwLDIh&format=png"
                    className="w-10 h-10"
                />
                <p
                    className="font-bridge font-bold text-black md:w-3/4 mx-5 text-xl select-none"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    Amazing Designs
                </p>
            </div>
        </div>
    );
}
