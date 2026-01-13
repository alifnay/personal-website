import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaBrain } from "react-icons/fa";

const About = () => {
    const HIGHLIGHTS = [
        {
            icon: <FaGraduationCap size={20} />,
            title: "Education",
            subtitle: "Information Technology",
            desc: "Universitas Negeri Yogyakarta"
        },
        {
            icon: <FaBriefcase size={20} />,
            title: "Experience",
            subtitle: "Internship",
            desc: "Telkom Indonesia (PRQ Division)"
        },
        {
            icon: <FaBrain size={20} />,
            title: "Interest",
            subtitle: "AI & Data Science",
            desc: "Focusing on Predictive Models"
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-20 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
                        About <span className="text-[#FD6F00]">Me</span>
                        <div className="h-1 w-20 bg-[#FD6F00] rounded-full hidden md:block mt-2 opacity-50"></div>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
                    
                    {/* LEFT: IMAGE & DECORATION */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        {/* Frame Border Effect */}
                        <div className="relative w-72 h-[26rem] md:w-80 md:h-[30rem]">
                            {/* Accent Borders */}
                            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#FD6F00]/30 rounded-tr-3xl -mr-4 -mt-4 z-0" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#FD6F00]/30 rounded-bl-3xl -ml-4 -mb-4 z-0" />
                            
                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                                <div className="absolute inset-0 bg-gray-200 dark:bg-[#1a1a1a] animate-pulse -z-10" /> {/* Loading Placeholder */}
                                <img 
                                    src="/about-me.png" 
                                    alt="About Alif Naywa" 
                                    className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105" 
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: TEXT CONTENT */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Narrative Text */}
                        <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify md:text-left font-light">
                            <p>
                                Hi, I'm <strong className="text-gray-900 dark:text-white font-semibold">Alif Naywa Azzikra</strong>, a final-year Information Technology student at Universitas Negeri Yogyakarta. My journey in tech is driven by a curiosity to understand how intelligent systems can solve real-world complexities.
                            </p>
                            <p>
                                Currently, I am expanding my professional experience as an <span className="text-[#FD6F00] font-medium">Intern at Telkom Indonesia</span>, diving deep into Performance, Risk, & Quality management. Simultaneously, I am working on my thesis focusing on <strong className="text-gray-900 dark:text-white">Predictive Modeling for Diabetes Risk</strong> using Machine Learning and NLP.
                            </p>
                            <p>
                                Beyond code, I believe in technology that empowers communities. Whether it's building a seamless mobile app or training a neural network, my goal is always the same: <span className="italic">Efficiency, Impact, and Innovation.</span>
                            </p>
                        </div>

                        {/* Bento Grid Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {HIGHLIGHTS.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className={`p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#151515] shadow-sm hover:shadow-md hover:border-[#FD6F00]/30 transition-all duration-300 ${index === 2 ? 'sm:col-span-2' : ''}`} // Item terakhir lebar full
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg text-[#FD6F00]">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">
                                                {item.subtitle}
                                            </p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;