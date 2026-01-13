import { useState, useEffect } from "react";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#works" },
    { name: "Contact Me", href: "#contact" },
    ];

    const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        }

        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        }
    };

    const menuVariants = {
        closed: { opacity: 0, height: 0 },
        open: { 
        opacity: 1, 
        height: "auto",
        transition: { 
            staggerChildren: 0.1, 
            when: "beforeChildren"
        }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
            scrolled
            ? "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/50 shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
            
            {/* 1. LOGO */}
            <div className="flex-shrink-0 cursor-pointer">
                <a 
                href="#home" 
                className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white flex items-center gap-1"
                >
                ALIF
                <span className="w-2 h-2 rounded-full bg-[#FD6F00] mt-1"></span> 
                </a>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex space-x-8 items-center">
                {NAV_LINKS.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="relative text-gray-600 dark:text-gray-300 font-medium transition-colors group py-2"
                >
                    <span className="relative z-10 group-hover:text-[#FD6F00] transition-colors duration-300">
                    {link.name}
                    </span>
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#FD6F00] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                </a>
                ))}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4">
                
                {/* Dark Mode Button */}   
                <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
                onClick={toggleMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:shadow-md transition-all duration-300 focus:outline-none ring-1 ring-gray-200 dark:ring-gray-700"
                aria-label="Toggle Dark Mode"
                >
                <motion.div
                    initial={false}
                    animate={{ rotate: isDarkMode ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
                </motion.div>
                </motion.button>

                {/* Hamburger Button */}
                <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-[#FD6F00] transition-colors focus:outline-none"
                >
                {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                </motion.button>
            </div>
            </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden bg-white/90 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 absolute w-full left-0 shadow-xl overflow-hidden"
            >
                <div className="px-6 py-6 space-y-4 flex flex-col">
                {NAV_LINKS.map((link) => (
                    <motion.a
                    key={link.name}
                    variants={itemVariants} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-[#FD6F00] dark:hover:text-[#FD6F00] tracking-wide transition-colors"
                    >
                    {link.name}
                    </motion.a>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </nav>
    );
};

export default Navbar;