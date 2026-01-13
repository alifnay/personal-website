import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";

const PROJECTS = [
    {
        title: "Digi Skill",
        category: "Mobile App",
        description: "Android application designed to improve digital literacy skills with interactive modules.",
        techStack: ["Kotlin", "Android XML", "Firebase"],
        image: "/digi-skill.png",
        githubLink: "https://github.com/alifnay",
        demoLink: "#"
    },
    {
        title: "SmartCorn",
        category: "Web Development",
        description: "IoT-based website to monitor corn field conditions including humidity and soil quality.",
        techStack: ["React", "Laravel", "IoT MQTT"],
        image: "/smartcorn.png",
        githubLink: "https://github.com/alifnay",
        demoLink: "#"
    },
    {
        title: "E-Commerce Design",
        category: "UI/UX Design",
        description: "Modern and user-friendly interface design for a fashion marketplace application.",
        techStack: ["Figma", "Prototyping", "User Research"],
        image: "/ecommerce.png",
        githubLink: "https://github.com/alifnay",
        demoLink: "#"
    },
    {
        title: "Twitter Sentiment",
        category: "AI & NLP",
        description: "Machine learning model to analyze public sentiment on Twitter regarding specific trends.",
        techStack: ["Python", "Streamlit", "Scikit-Learn"],
        image: "/twt-sentiment.png",
        githubLink: "https://github.com/alifnay",
        demoLink: "#"
    },
];

const Works = () => {
    return (
        <section id="portfolio" className="py-24 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured <span className="text-[#FD6F00]">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        A showcase of my technical journey, solving real problems with code.
                    </p>
                </motion.div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-[#151515] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-[#FD6F00]/50 dark:hover:border-[#FD6F00]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-[#FD6F00]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                />
                                
                                {/* Category Badge Overlay */}
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 text-xs font-bold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-[#FD6F00]">
                                        <FiFolder size={24} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FD6F00] transition-colors">
                                            <FaGithub size={20} />
                                        </a>
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FD6F00] transition-colors">
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#FD6F00] transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span 
                                                key={idx} 
                                                className="text-xs font-medium text-gray-500 dark:text-gray-400"
                                            >
                                                #{tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* View More Button */}
                <div className="mt-16 text-center">
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