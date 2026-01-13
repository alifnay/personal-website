import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiFolder, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PROJECTS = [
    {
        title: "MindGarden",
        category: "AI Mental Wellness",
        description: "A personalized mental health companion app that uses AI to analyze mood patterns and provide tailored meditation & journaling prompts.",
        techStack: ["Kotlin", "AI", "LLM", "NLP", "Firebase"],
        image: "/mindgarden.png",
        githubLink: "https://github.com/MindGardenApp"
    },
    {
        title: "Digi Skill",
        category: "Mobile App",
        description: "Android application designed to improve digital literacy skills with interactive modules.",
        techStack: ["Kotlin", "Android XML", "Firebase"],
        image: "/digi-skill.png",
        githubLink: "https://github.com/alifnay/digi-skill",
    },
    {
        title: "SmartCorn",
        category: "AI-Powered Web App",
        description: "Intelligent plant disease detection system using Convolutional Neural Networks (CNN) to diagnose corn leaf health from images.",
        techStack: ["React", "CNN", "TensorFlow", "Tailwind"],
        image: "/smartcorn.png",
        githubLink: "https://github.com/alifnay/corn_leaf_disease"
    },
    {
        title: "E-Commerce Design",
        category: "UI/UX Design",
        description: "Modern and user-friendly interface design for a fashion marketplace application.",
        techStack: ["Figma", "Prototyping", "User Research"],
        image: "/ecommerce.png",
        githubLink: "https://github.com/alifnay"
    },
    {
        title: "Twitter Sentiment",
        category: "AI & NLP",
        description: "Machine learning model to analyze public sentiment on Twitter regarding specific trends.",
        techStack: ["Python", "Streamlit", "Scikit-Learn"],
        image: "/twt-sentiment.png",
        githubLink: "https://github.com/alifnay/text_sentiment"
    },
];

const Works = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };

    const getCardProps = (index: number) => {
        const len = PROJECTS.length;
        const offset = (index - activeIndex + len) % len;

        if (offset === 0) return { position: "center", zIndex: 30, opacity: 1, scale: 1, x: 0, blur: 0 };
        if (offset === 1) return { position: "right", zIndex: 20, opacity: 0.6, scale: 0.85, x: 350, blur: 4 }; 
        if (offset === len - 1) return { position: "left", zIndex: 20, opacity: 0.6, scale: 0.85, x: -350, blur: 4 }; 
        
        return { position: "hidden", zIndex: 10, opacity: 0, scale: 0.5, x: 0, blur: 10 };
    };

    return (
        <section id="works" className="py-24 relative bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured <span className="text-[#FD6F00]">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        A showcase of my technical journey, solving real problems with code.
                    </p>
                </motion.div>

                {/* --- CAROUSEL AREA --- */}
                <div className="relative h-[600px] flex items-center justify-center">
                    
                    {/* Navigation Buttons (Left) */}
                    <button 
                        onClick={handlePrev}
                        className="absolute left-4 md:left-10 z-50 p-3 rounded-full bg-white/80 dark:bg-[#202020]/80 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-[#FD6F00] hover:text-white hover:border-[#FD6F00] transition-all duration-300"
                    >
                        <FiChevronLeft size={24} />
                    </button>

                    {/* Navigation Buttons (Right) */}
                    <button 
                        onClick={handleNext}
                        className="absolute right-4 md:right-10 z-50 p-3 rounded-full bg-white/80 dark:bg-[#202020]/80 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-[#FD6F00] hover:text-white hover:border-[#FD6F00] transition-all duration-300"
                    >
                        <FiChevronRight size={24} />
                    </button>

                    {/* Cards Container */}
                    <div className="relative w-full max-w-4xl h-full flex items-center justify-center perspective-1000">
                        <AnimatePresence>
                            {PROJECTS.map((project, index) => {
                                const { zIndex, opacity, scale, x, blur } = getCardProps(index);

                                return (
                                    <motion.div
                                        key={index}
                                        initial={false}
                                        animate={{ 
                                            zIndex, 
                                            opacity, 
                                            scale, 
                                            x, 
                                            filter: `blur(${blur}px)` 
                                        }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeInOut"
                                        }}
                                        onClick={() => {
                                            if (x > 0) handleNext();
                                            if (x < 0) handlePrev();
                                        }}
                                        className={`absolute w-[90%] md:w-[380px] bg-white dark:bg-[#151515] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl cursor-pointer`}
                                        style={{ 
                                            pointerEvents: opacity === 0 ? "none" : "auto" 
                                        }}
                                    >
                                        {/* Image Container */}
                                        <div className="relative h-52 overflow-hidden">
                                            <div className="absolute inset-0 bg-[#FD6F00]/20 mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-300 z-10" />
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover" 
                                            />
                                            {/* Category Badge */}
                                            <div className="absolute top-4 right-4 z-20">
                                                <span className="px-3 py-1 text-xs font-bold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col h-[280px]">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="text-[#FD6F00]">
                                                    <FiFolder size={24} />
                                                </div>
                                                <div className="flex gap-4">
                                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FD6F00] transition-colors relative z-50">
                                                        <FaGithub size={20} />
                                                    </a>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                {project.title}
                                            </h3>
                                            
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack Tags */}
                                            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.slice(0, 4).map((tech, idx) => (
                                                        <span 
                                                            key={idx} 
                                                            className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#202020] px-2 py-1 rounded"
                                                        >
                                                            #{tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
                
                {/* View More Button */}
                <div className="text-center mt-8">
                    <a 
                        href="https://github.com/alifnay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#FD6F00] text-[#FD6F00] font-semibold hover:bg-[#FD6F00] hover:text-white transition-all duration-300"
                    >
                        View More on GitHub
                        <FaGithub />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Works;