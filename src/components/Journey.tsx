import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiCredly } from "react-icons/si";
import { FaTrophy, FaBriefcase, FaGraduationCap, FaRobot, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";

const EXPERIENCE = [
    {
        role: "Intern - PRQ Division",
        company: "Telkom Indonesia (Witel Yogya Jateng Selatan)",
        period: "Dec 2025 - Present",
        desc: "Managing performance risk & quality assurance for enterprise projects.",
        icon: <FaBriefcase />,
    },
    {
        role: "AI Engineer (MSIB)",
        company: "IBM Academy - Infinite Learning",
        period: "Aug 2024 - Dec 2024",
        desc: "Developed Deep Learning models & deployed AI solutions (Smart Farming).",
        icon: <FaRobot />,
    },
    {
        role: "Information Technology",
        company: "Universitas Negeri Yogyakarta",
        period: "2022 - Present",
        desc: "Final year student focused on AI & Software Engineering. GPA: 3.86",
        icon: <FaGraduationCap />,
    },
];

const AWARDS = [
    {
        title: "2nd Place Winner - PEKAN IT UNSIKA",
        category: "Software Development Competition",
        issuer: "Universitas Singaperbangsa Karawang",
        year: "2025",
        icon: <FaTrophy />,
    },
    {
        title: "2nd Honorable Mention - UNITY 13",
        category: "Software Development Competition",
        issuer: "Universitas Negeri Yogyakarta",
        year: "2024",
        icon: <FaTrophy />,
    }
];

const CERTIFICATES = [
    {
        title: "MSIB - Infinite Learning",
        image: "/certificate-il.jpg",
        link: "https://drive.google.com/file/d/1SNMgAFrBk8ZbCf7mvyGGFp0rjI4LSgKU/view?usp=sharing"
    },
    {
        title: "2nd Place - PEKAN IT UNSIKA",
        image: "/certificate-pekanit.png",
        link: "#"
    },
    {
        title: "2nd Honorable Mention - UNITY 13",
        image: "/certificate-unity.png",
        link: "#"
    },

];

const Journey = () => {
    const [showAllCerts, setShowAllCerts] = useState(false);

    const initialCount = 2;
    const displayedCerts = showAllCerts ? CERTIFICATES : CERTIFICATES.slice(0, initialCount);

    return (
        <section id="journey" className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                
                {/* HEADER */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Track <span className="text-[#FD6F00]">Record</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        My professional journey, achievements, and verified competencies.
                    </p>
                </motion.div>

                {/* LAYOUT UTAMA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* --- LEFT COLUMN: EXPERIENCE --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#FD6F00] animate-pulse" />
                            Experience & Education
                        </h3>
                        
                        <div className="space-y-0 border-l border-gray-200 dark:border-gray-800 ml-3">
                            {EXPERIENCE.map((item, idx) => (
                                <div key={idx} className="relative pl-8 py-4 first:pt-0 last:pb-0">
                                    <div className="absolute -left-[13px] top-4 w-7 h-7 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#FD6F00] text-xs shadow-sm z-10">
                                        {item.icon}
                                    </div>
                                    
                                    <div className="group p-4 rounded-xl hover:bg-white dark:hover:bg-[#151515] hover:shadow-sm border border-transparent hover:border-gray-100 dark:hover:border-gray-800 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                            <h4 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-[#FD6F00] transition-colors">
                                                {item.role}
                                            </h4>
                                            <span className="w-fit text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-orange-100 dark:bg-orange-900/20 text-[#FD6F00] font-bold">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            {item.company}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* --- RIGHT COLUMN: AWARDS & CERTIFICATES --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-10"
                    >
                        
                        {/* 1. AWARDS SECTION */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FD6F00] animate-pulse" />
                                Honors & Awards
                            </h3>
                            <div className="space-y-4">
                                {AWARDS.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#151515] border border-gray-100 dark:border-gray-800 hover:border-[#FD6F00]/30 hover:shadow-md transition-all group">
                                        <div className="p-3 rounded-lg bg-orange-50 dark:bg-[#202020] text-[#FD6F00] group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base group-hover:text-[#FD6F00] transition-colors">
                                                    {item.title}
                                                </h4>
                                                <span className="text-xs font-mono text-gray-400 bg-gray-50 dark:bg-[#202020] px-2 py-1 rounded">
                                                    {item.year}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                {item.category} • <span className="font-medium text-gray-600 dark:text-gray-300">{item.issuer}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. CERTIFICATES SECTION */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Certifications
                            </h3>
                            
                            {/* Grid Image Container */}
                            <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-4">
                                <AnimatePresence>
                                    {displayedCerts.map((cert, idx) => (
                                        <motion.a
                                            key={idx}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative aspect-video bg-gray-200 dark:bg-[#202020] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg cursor-pointer"
                                        >
                                            <div className="w-full h-full flex items-center justify-center relative bg-gray-100 dark:bg-[#1a1a1a]">
                                                {/* Image */}
                                                <img 
                                                    src={cert.image} 
                                                    alt={cert.title} 
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
                                                />
                                                
                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-center z-10">
                                                    <h4 className="text-white font-bold text-xs mb-1 line-clamp-2">{cert.title}</h4>
                                                    <FaExternalLinkAlt className="text-[#FD6F00]" size={12} />
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                            
                            {/* ACTION BUTTONS */}
                            <div className="mt-6 flex flex-col items-center gap-3">
                                
                                {/* Credly Button */}
                                <AnimatePresence>
                                    {showAllCerts && (
                                        <motion.a
                                            initial={{ opacity: 0, height: 0, y: -10 }}
                                            animate={{ opacity: 1, height: "auto", y: 0 }}
                                            exit={{ opacity: 0, height: 0, y: -10 }}
                                            href="https://www.credly.com/users/alif-naywa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 py-3 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-[#FD6F00] hover:text-white hover:border-[#FD6F00] transition-all duration-300"
                                        >
                                            <SiCredly size={20} />
                                            View More on Credly
                                        </motion.a>
                                    )}
                                </AnimatePresence>

                                {/* Toggle Button */}
                                {CERTIFICATES.length > initialCount && (
                                    <button 
                                        onClick={() => setShowAllCerts(!showAllCerts)}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-[#FD6F00] hover:text-[#e56400] transition-colors mt-2"
                                    >
                                        {showAllCerts ? (
                                            <>Show Less <FaChevronUp /></>
                                        ) : (
                                            <>Show All Certificates ({CERTIFICATES.length}) <FaChevronDown /></>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Journey;