import { useState, useEffect } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode  } from "react-icons/md";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Saat pertama kali website dimuat, cek preferensi di localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("theme");
        if (savedMode === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    // Fungsi Toggle Dark Mode
    const toggleMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-5 items-center">
                <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
                    ALIF
                    </div>
                </div>
                <div className="col-span-3 flex justify-center space-x-20">
                    <div className="text-[#FD6F00] cursor-pointer relative group">
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FD6F00] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                    <div className="hover:text-[#FD6F00] cursor-pointer relative group">
                        About Me
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FD6F00] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                    <div className="hover:text-[#FD6F00] cursor-pointer relative group">
                        Portfolio
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FD6F00] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                    <div className="hover:text-[#FD6F00] cursor-pointer relative group">
                        Contact Me
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FD6F00] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    {/* Toggle Button */}
                    <button
                        onClick={toggleMode}
                        className="relative px-2 inline-flex items-center w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer transition-all duration-300"
                    >
                        {/* Lingkaran */}
                        <span
                            className={`${
                            isDarkMode ? 'translate-x-6 bg-yellow-400' : 'bg-white'
                            } inline-block w-6 h-6 rounded-full transition-all duration-300`}
                        ></span>
                        {/* Ikon */}
                        <span
                            className={`absolute text-sm text-gray-800 dark:text-gray-200 right-1 ${
                            isDarkMode ? 'opacity-0' : 'opacity-100'
                            } transition-opacity duration-300`}
                        >
                        <MdOutlineLightMode size={20}/>
                        </span>
                        <span
                            className={`absolute text-sm text-gray-800 dark:text-gray-200 left-1 ${
                            isDarkMode ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-300`}
                        >
                        <MdOutlineDarkMode size={20} color='yellow'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;