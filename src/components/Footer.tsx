import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SOCIAL_LINKS = [
    { 
        icon: <FaInstagram size={20} />, 
        href: "https://www.instagram.com/alifnaywa_/", 
        label: "Instagram" 
    },
    { 
        icon: <FaLinkedin size={20} />, 
        href: "https://www.linkedin.com/in/alif-naywa-azzikra/", 
        label: "LinkedIn" 
    },
    { 
        icon: <SiGmail size={20} />, 
        href: "mailto:naywaalif@gmail.com", 
        label: "Email" 
    },
    { 
        icon: <FaGithub size={20} />, 
        href: "https://github.com/alifnay", 
        label: "GitHub" 
    },
];

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" }, 
    { name: "Contact", href: "mailto:naywaalif@gmail.com" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-white/50 dark:bg-[#050505]/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 mt-20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
                    
                    {/* 1. BRAND & TAGLINE */}
                    <div className="text-center md:text-left">
                        <a href="#home" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center justify-center md:justify-start gap-1 mb-2">
                            ALIF
                            <span className="w-2 h-2 rounded-full bg-[#FD6F00]"></span>
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                            Building digital experiences with modern technologies and intelligent systems.
                        </p>
                    </div>

                    {/* 2. QUICK NAVIGATION */}
                    <div className="flex gap-8">
                        {NAV_LINKS.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#FD6F00] dark:hover:text-[#FD6F00] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* 3. SOCIALS */}
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((social, index) => (
                            <a 
                                key={index}
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-2 bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 rounded-lg dark:hover:bg-[#FD6F00] hover:bg-[#FD6F00] dark:hover:text-white hover:text-white transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* 4. COPYRIGHT & CREDIT */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                    
                    <p>
                        &copy; {currentYear} Alif Naywa Azzikra. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    )
}

export default Footer