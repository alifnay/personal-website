import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='bg-[#f8f9fa] dark:bg-[#1c1c1c] mt-36'>
            <h1 className='text-center text-2xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent py-10'>
                ALIF
            </h1>
            <div className="col-span-3 flex justify-center space-x-20">
                    <div className="text-[#949494] hover:text-[#FD6F00] dark:hover:text-[#FD6F00] cursor-pointer">Home</div>
                    <div className="text-[#949494] hover:text-[#FD6F00] dark:hover:text-[#FD6F00] cursor-pointer">About Me</div>
                    <div className="text-[#949494] hover:text-[#FD6F00] dark:hover:text-[#FD6F00] cursor-pointer">Portfolio</div>
                    <div className="text-[#949494] hover:text-[#FD6F00] dark:hover:text-[#FD6F00] cursor-pointer">Contact Me</div>
            </div>
            <div className="flex gap-3 py-8 justify-center">
                <a href="" className="border border-gray-400 rounded-full p-2 hover:border-gray-600 dark:hover:border-gray-600 transition-all cursor-pointer">
                    <FaInstagram size={16} />
                </a>
                <a href="" className="border border-gray-400 rounded-full p-2 hover:border-gray-600 dark:hover:border-gray-600 transition-all cursor-pointer">
                    <FaLinkedin size={16} />
                </a>
                <a href="" className="border border-gray-400 rounded-full p-2 hover:border-gray-600 dark:hover:border-gray-600 transition-all cursor-pointer">
                    <SiGmail size={16} />
                </a>
                <a href="" className="border border-gray-400 rounded-full p-2 hover:border-gray-600 dark:hover:border-gray-600 transition-all cursor-pointer">
                    <FaGithub size={16} />
                </a>
            </div>
            <div className="flex gap-16 justify-center pb-16">
                <div className='flex items-center gap-2'>
                    <CiMail size={20} color='#949494'/>
                    <h3 className="items-center text-[#949494]">naywaalif@gmail.com</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <FaPhoneAlt size={16} color='#949494'/>
                    <h3 className="items-center text-[#949494]">+62 856-4715-2578</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
