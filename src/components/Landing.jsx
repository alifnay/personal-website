import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Landing = () => {
    const [text] = useTypewriter({
        words: [
            "AI Engineer",
            "Mobile Developer",
            "Front End Developer",
        ],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 30,
        delaySpeed: 1000,
    });

    return (
        <div className='max-w-7xl mx-auto mt-36 grid md:grid-cols-2 '>
            <div className='pl-16'>
                <h3 className='text-[#707070] font-semibold text-lg'>Hi, I am</h3>
                <h2 className='text-[#959595] font-semibold text-2xl'>Alif Naywa Azzikra</h2>
                <h1 className='text-5xl py-12 font-bold bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent'>
                    {text}
                    <Cursor
                        cursorBlinking={true}
                        cursorStyle="|"
                        cursorColor="#FD6F00"
                    />
                </h1>
                <div className="flex space-x-4 ">
                    <div className="border border-gray-400 rounded-full p-3 hover:border-gray-600 transition-all cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                    <div className="border border-gray-400 rounded-full p-3 hover:border-gray-600 transition-all cursor-pointer">
                        <FaLinkedin size={20} />
                    </div>
                    <div className="border border-gray-400 rounded-full p-3 hover:border-gray-600 transition-all cursor-pointer">
                        <SiGmail size={20} />
                    </div>
                    <div className="border border-gray-400 rounded-full p-3 hover:border-gray-600 transition-all cursor-pointer">
                        <FaGithub size={20} />
                    </div>
                </div>
                <div className='flex space-x-4 pt-12'>
                    <button className="bg-[#FD6F00] py-3 px-10 rounded-lg text-white hover:bg-[#E55C00] transition-all duration-300 text-sm font-semibold">
                        Hire Me
                    </button>
                    <button className="border border-[#959595] py-3 px-10 rounded-lg transition-all hover:bg-[#959595] hover:text-white">
                        Download CV
                    </button>
                </div>
            </div>
            <div className="flex justify-center relative">
                <div className="w-72 h-72 bg-[#575757] rounded-full absolute" />
                <img src="/profile-image.png" alt="Profile" className="size-9/12 object-cover z-10" />
            </div>
        </div>
    );
};

export default Landing;