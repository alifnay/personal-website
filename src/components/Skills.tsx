import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaJava, FaReact, FaJs, FaAndroid, FaPhp, FaChartBar } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssLine, RiFlutterFill, RiFileExcel2Fill } from "react-icons/ri";
import { SiMysql, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiTypescript } from "react-icons/si";

const SKILL_CATEGORIES = [
    {
        title: "AI & ML",
        fullTitle: "AI & Machine Learning",
        description: "Building intelligent models & predictive systems.",
        skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" size={24} /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" size={24} /> },
        { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" size={24} /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" size={24} /> },
        { name: "NumPy", icon: <SiNumpy className="text-[#013243]" size={24} /> },
        ],
    },
    {
        title: "Data Science",
        fullTitle: "Data Science & Analysis",
        description: "Extracting insights & visualizing complex datasets.",
        skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={24} /> },
        { name: "Pandas", icon: <SiPandas className="text-[#150458]" size={24} /> },
        { name: "Data Viz", icon: <FaChartBar className="text-[#FF6384]" size={24} /> },
        { name: "Excel", icon: <RiFileExcel2Fill className="text-[#217346]" size={24} /> },
        ],
    },
    {
        title: "Mobile",
        fullTitle: "Mobile Development",
        description: "Creating robust Android & Cross-platform apps.",
        skills: [
        { name: "Android", icon: <FaAndroid className="text-[#3DDC84]" size={24} /> },
        { name: "Kotlin", icon: <TbBrandKotlin className="text-[#7F52FF]" size={24} /> },
        { name: "Flutter", icon: <RiFlutterFill className="text-[#02569B]" size={24} /> },
        { name: "Java", icon: <FaJava className="text-[#007396]" size={24} /> },
        ],
    },
    {
        title: "Web",
        fullTitle: "Web Development",
        description: "Modern & responsive web interfaces.",
        skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={24} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={24} /> },
        { name: "Tailwind", icon: <RiTailwindCssLine className="text-[#06B6D4]" size={24} /> },
        { name: "JS", icon: <FaJs className="text-[#F7DF1E]" size={24} /> },
        { name: "PHP", icon: <FaPhp className="text-[#777BB4]" size={24} /> },
        ],
    },
    ];

    const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
            
            {/* HEADER */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technical <span className="text-[#FD6F00]">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
                A specialized stack focused on AI Engineering, Data Science, and Modern Apps.
            </p>
            </motion.div>

            {/* ================= MOBILE VIEW (TABS) ================= */}
            <div className="md:hidden flex flex-col items-center">
                
                {/* 1. Pill Navigation */}
                <div className="flex p-1 gap-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-full overflow-x-auto scrollbar-hide max-w-full mb-8 border border-gray-200 dark:border-gray-800">
                    {SKILL_CATEGORIES.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`
                                relative px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 z-10
                                ${activeTab === index ? "text-white" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"}
                            `}
                        >
                            {activeTab === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#FD6F00] rounded-full -z-10 shadow-md"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* 2. Content Area */}
                <div className="w-full bg-white dark:bg-[#151515] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 min-h-[280px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {SKILL_CATEGORIES[activeTab].fullTitle}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                                {SKILL_CATEGORIES[activeTab].description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-gray-700"
                                    >
                                        <span className="text-xl">{skill.icon}</span>
                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* ================= DESKTOP VIEW (GRID) ================= */}
            <div className="hidden md:grid grid-cols-2 gap-8">
                {SKILL_CATEGORIES.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white dark:bg-[#151515] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-[#FD6F00]/30 transition-all duration-300 group"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#FD6F00] transition-colors">
                                {category.fullTitle}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {category.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {category.skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-[#202020] hover:shadow-md transition-all duration-300 cursor-default"
                                >
                                    <span className="text-xl filter drop-shadow-sm">{skill.icon}</span>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>

        {/* Utilities for hide scrollbar */}
        <style>{`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        </section>
    );
};

export default Skills;