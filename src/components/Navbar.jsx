import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-5 items-center">
                <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
                        Alif
                    </div>
                </div>
                <div className='col-span-3 flex justify-center space-x-20'>
                    <div className="text-[#FD6F00] cursor-pointer">Home</div>
                    <div className="hover:text-[#FD6F00] cursor-pointer">About Me</div>
                    <div className="hover:text-[#FD6F00] cursor-pointer">Portfolio</div>
                    <div className="hover:text-[#FD6F00] cursor-pointer">Contact Me</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;