import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const SOCIALS = [
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/alifnaywa_/", label: "Instagram" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/alif-naywa-azzikra/", label: "LinkedIn" },
    { icon: <SiGmail size={20} />, href: "mailto:naywaalif@gmail.com", label: "Email" },
    { icon: <FaGithub size={20} />, href: "https://github.com/alifnay", label: "GitHub" },
];

const Landing = () => {
    const [text] = useTypewriter({
        words: ["AI Engineer", "Mobile Developer", "Front End Developer"],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 30,
        delaySpeed: 2000,
    });

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-transparent">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-6 sm:px-12 relative z-10 pt-20">
            
                {/* TEXT SECTION */}
                <div className='text-center md:text-left space-y-6 order-2 md:order-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wide uppercase mb-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            Available for Projects
                        </div>

                        {/* Name Identity */}
                        <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                            Hi there, I'm <span className="text-gray-900 dark:text-white font-bold border-b-2 border-[#FD6F00]">Alif Naywa</span>
                        </h3>

                        {/* Main Slogan */}
                        <h2 className='text-gray-900 dark:text-white font-extrabold text-5xl md:text-6xl tracking-tight leading-[1.1]'>
                            Building Digital <br />
                            <span className="bg-gradient-to-r from-[#FD6F00] to-[#E60026] bg-clip-text text-transparent">Intelligence.</span>
                        </h2>
                        
                        {/* Typewriter */}
                        <div className="flex items-center justify-center md:justify-start h-8">
                            <span className="text-lg md:text-xl font-mono text-gray-500 dark:text-gray-400">
                                &gt; I am an <span className="text-gray-800 dark:text-white font-semibold">{text}</span>
                                <Cursor cursorBlinking={true} cursorStyle="_" cursorColor="#FD6F00" />
                            </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 text-base leading-relaxed">
                            Focusing on Artificial Intelligence and Modern Web Technologies to solve complex real-world problems.
                        </p>
                    </motion.div>

                    {/* MEDIA SOCIALS */}
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                        className="flex justify-center md:justify-start gap-4 pt-2"
                    >
                        {SOCIALS.map((social, index) => (
                            <a 
                                key={index} href={social.href} target="_blank" rel="noopener noreferrer" 
                                className="p-3 text-gray-500 dark:text-gray-400 hover:text-[#FD6F00] dark:hover:text-[#FD6F00] border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#FD6F00] dark:hover:border-[#FD6F00] transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-[#151515]"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>

                    {/* BUTTONS */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                        className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4'
                    >
                        <a href="mailto:naywaalif@gmail.com">
                            <button className="w-full sm:w-auto bg-[#FD6F00] hover:bg-[#e56400] text-white h-12 px-8 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5">
                                Contact Me
                            </button>
                        </a>
                        <a href="/files/CV_ATS_Alif Naywa.pdf" download="CV_AlifNaywa.pdf">
                            <button className="w-full sm:w-auto bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 h-12 px-8 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                                View Resume
                            </button>
                        </a>
                    </motion.div>
                </div>

                {/* IMAGE SECTION */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center order-1 md:order-2"
                >
                    {/* Glass Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a] rounded-[2rem] rotate-3 opacity-60 blur-sm border border-gray-100 dark:border-gray-800" />
                    
                    {/* Main Image Container */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 w-72 h-80 md:w-[26rem] md:h-[30rem] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-[#151515]"
                    >
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#FD6F00] rounded-tr-lg z-20 opacity-70" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#FD6F00] rounded-bl-lg z-20 opacity-70" />

                        {/* Image */}
                        <img 
                            src="/profile-img.png" 
                            alt="Alif Naywa" 
                            className="w-full h-full object-cover transition-all duration-500" 
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;