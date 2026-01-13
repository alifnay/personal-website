import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaJs, FaAndroid, FaPhp, FaChartBar } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssLine, RiFlutterFill, RiFileExcel2Fill } from "react-icons/ri";
import { SiMysql, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiTypescript } from "react-icons/si";

const SKILL_CATEGORIES = [
    {
        title: "AI & Machine Learning",
        description: "Building intelligent models & predictive systems.",
        skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" size={28} /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" size={28} /> },
        { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" size={28} /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" size={28} /> },
        { name: "NumPy", icon: <SiNumpy className="text-[#013243]" size={28} /> },
        ],
    },
    {
        title: "Data Science & Analysis",
        description: "Extracting insights & visualizing complex datasets.",
        skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={28} /> },
        { name: "Pandas", icon: <SiPandas className="text-[#150458]" size={28} /> },
        { name: "Data Viz", icon: <FaChartBar className="text-[#FF6384]" size={28} /> }, 
        { name: "Excel", icon: <RiFileExcel2Fill className="text-[#217346]" size={28} /> },
        ],
    },
    {
        title: "Mobile Development",
        description: "Creating robust Android & Cross-platform apps.",
        skills: [
        { name: "Android", icon: <FaAndroid className="text-[#3DDC84]" size={28} /> },
        { name: "Kotlin", icon: <TbBrandKotlin className="text-[#7F52FF]" size={28} /> },
        { name: "Flutter", icon: <RiFlutterFill className="text-[#02569B]" size={28} /> },
        { name: "Java", icon: <FaJava className="text-[#007396]" size={28} /> },
        ],
    },
    {
        title: "Web Development",
        description: "Modern & responsive web interfaces.",
        skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={28} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={28} /> },
        { name: "Tailwind", icon: <RiTailwindCssLine className="text-[#06B6D4]" size={28} /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={28} /> },
        { name: "PHP", icon: <FaPhp className="text-[#777BB4]" size={28} /> },
        ],
    },
    ];

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
    };

    const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
            
            {/* HEADER SECTION */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technical <span className="text-[#FD6F00]">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                A specialized stack focused on AI Engineering, Data Science, and Modern Application Development.
            </p>
            </motion.div>

            {/* GRID CATEGORIES */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
            {SKILL_CATEGORIES.map((category, index) => (
                <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-[#151515] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-all duration-300 group"
                >
                {/* Category Title */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#FD6F00] transition-colors">
                    {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                    {category.description}
                    </p>
                </div>

                {/* Skills Grid inside Card */}
                <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-[#202020] hover:shadow-md transition-all duration-300 cursor-default"
                    >
                        {/* Icon */}
                        <span className="text-xl filter drop-shadow-sm">
                            {skill.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            {skill.name}
                        </span>
                    </div>
                    ))}
                    </div>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </section>
    );
};

export default Skills;