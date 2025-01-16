import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <div className='bg-[#1c1c1c] mt-36'>
            <h1 className='text-center text-2xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent py-10'>
                Alif
            </h1>
            <div className="col-span-3 flex justify-center space-x-20">
                    <div className="text-[#949494] hover:text-[#FD6F00] cursor-pointer">Home</div>
                    <div className="text-[#949494] hover:text-[#FD6F00] cursor-pointer">About Me</div>
                    <div className="text-[#949494] hover:text-[#FD6F00] cursor-pointer">Portfolio</div>
                    <div className="text-[#949494] hover:text-[#FD6F00] cursor-pointer">Contact Me</div>
            </div>
            <div className="flex gap-3 pt-8 justify-center">
                <div className="border border-gray-400 rounded-full p-2 hover:border-gray-600 transition-all cursor-pointer">
                    <FaInstagram size={16} />
                </div>
                <div className="border border-gray-400 rounded-full p-2 hover:border-gray-600 transition-all cursor-pointer">
                    <FaLinkedin size={16} />
                </div>
                <div className="border border-gray-400 rounded-full p-2 hover:border-gray-600 transition-all cursor-pointer">
                    <SiGmail size={16} />
                </div>
                <div className="border border-gray-400 rounded-full p-2 hover:border-gray-600 transition-all cursor-pointer">
                    <FaGithub size={16} />
                </div>
            </div>
        </div>
    )
}

export default Footer
