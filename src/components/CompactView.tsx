import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const CompactView = () => {
    return (
        <div className="min-h-screen pt-28 pb-10 px-4 bg-gray-100 dark:bg-[#050505] flex justify-center font-sans transition-colors duration-300">
        
        {/* CONTAINER */}
        <div className="w-full max-w-[210mm] bg-white dark:bg-[#121212] shadow-xl dark:shadow-none border border-gray-200 dark:border-gray-800 p-8 md:p-12 rounded-lg transition-colors duration-300 text-gray-800 dark:text-gray-200">
            
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-2 border-gray-100 dark:border-gray-800 pb-8 mb-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-900 dark:text-white mb-2">
                        Alif Naywa <span className="text-[#FD6F00]">Azzikra</span>
                    </h1>
                    <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
                        Information Technology Student
                    </p>
                </div>
                
                <div className="text-sm space-y-2 md:text-right">
                    <div className="flex items-center md:justify-end gap-2 text-gray-600 dark:text-gray-400">
                        <span>Yogyakarta, Indonesia</span> <FaMapMarkerAlt className="text-[#FD6F00]" />
                    </div>
                    <div className="flex items-center md:justify-end gap-2 text-gray-600 dark:text-gray-400">
                        <span>+62 856-4715-2578</span> <FaPhone className="text-[#FD6F00]" />
                    </div>
                    <a href="mailto:naywaalif@gmail.com" className="flex items-center md:justify-end gap-2 hover:text-[#FD6F00] transition-colors">
                        naywaalif@gmail.com <FaEnvelope className="text-[#FD6F00]" />
                    </a>
                    <a href="https://linkedin.com/in/alifnaywa" target="_blank" className="flex items-center md:justify-end gap-2 hover:text-[#FD6F00] transition-colors">
                        linkedin.com/in/alifnaywa <FaLinkedin className="text-[#FD6F00]" />
                    </a>
                </div>
            </div>

            {/* --- MAIN CONTENT GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                
                {/* LEFT COLUMN (SIDEBAR) - Span 4 */}
                <div className="md:col-span-4 space-y-8">
                    
                    {/* EDUCATION */}
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#FD6F00] mb-3 flex items-center gap-2">
                            Education
                        </h3>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-base">Universitas Negeri Yogyakarta</h4>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 italic mb-1">Bachelor in Information Technology</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">Aug 2022 - Present</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 font-semibold mt-1">GPA: 3.86 / 4.00</p>
                        </div>
                    </section>

                    {/* SKILLS */}
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#FD6F00] mb-3">
                            Technical Skills
                        </h3>
                        
                        <div className="mb-4">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Programming</p>
                            <div className="flex flex-wrap gap-2">
                                {["Kotlin", "Python", "Java", "JavaScript", "PHP"].map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-xs font-medium rounded border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Web & Mobile</p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Tailwind CSS", "Android SDK", "Flutter", "HTML/CSS"].map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-xs font-medium rounded border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">AI & Data</p>
                            <div className="flex flex-wrap gap-2">
                                {["Machine Learning", "Deep Learning", "MySQL", "Data Visualization"].map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-xs font-medium rounded border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* AWARDS */}
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#FD6F00] mb-3">
                            Honors & Awards
                        </h3>
                        <ul className="space-y-4">
                            <li className="text-sm">
                                <span className="font-bold text-gray-900 dark:text-white block">2nd Place Winner</span>
                                <span className="text-gray-600 dark:text-gray-300 text-xs block mb-0.5">PEKAN IT UNSIKA (Software Dev)</span>
                                <span className="text-gray-400 text-[10px]">Aug 2025</span>
                            </li>
                            <li className="text-sm">
                                <span className="font-bold text-gray-900 dark:text-white block">2nd Honorable Mention</span>
                                <span className="text-gray-600 dark:text-gray-300 text-xs block mb-0.5">UNITY 13 UNY (Software Dev)</span>
                                <span className="text-gray-400 text-[10px]">Jun 2025</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* RIGHT COLUMN (MAIN) */}
                <div className="md:col-span-8 space-y-8">
                    
                    {/* PROFILE SUMMARY */}
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#FD6F00] border-b border-gray-200 dark:border-gray-800 pb-2 mb-4">
                            Profile
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                            Passionate Information Technology student with hands-on experience in Mobile Development, Front-end Development, and Artificial Intelligence (Machine Learning). I have a strong background in developing Android and web-based applications, as well as implementing ML models using Python. Eager to contribute to technology-driven projects that create real-world impact.
                        </p>
                    </section>

                    {/* EXPERIENCE */}
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#FD6F00] border-b border-gray-200 dark:border-gray-800 pb-2 mb-6">
                            Experience
                        </h3>
                        
                        <div className="space-y-6">
                            {/* ITEM 1: TELKOM */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white">Intern - PRQ Division</h4>
                                    <span className="text-xs font-mono text-gray-500 bg-gray-100 dark:bg-[#1a1a1a] px-2 py-1 rounded">Jan 2026 - Present</span>
                                </div>
                                <p className="text-sm font-semibold text-[#FD6F00] mb-2">Telkom Indonesia (Witel Yogya Jateng Selatan)</p>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    Responsible for Performance, Risk, & Quality (PRQ) assurance. Managing enterprise project data and ensuring operational quality standards are met.
                                </p>
                            </div>

                            {/* ITEM 2: IBM/INFINITE LEARNING */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white">Advanced AI (MSIB Batch 7)</h4>
                                    <span className="text-xs font-mono text-gray-500 bg-gray-100 dark:bg-[#1a1a1a] px-2 py-1 rounded">Sep 2024 - Dec 2024</span>
                                </div>
                                <p className="text-sm font-semibold text-[#FD6F00] mb-2">IBM Academy - Infinite Learning</p>
                                <ul className="list-disc list-outside ml-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 space-y-1">
                                    <li>Participated in Advanced Artificial Intelligence course focused on machine learning and AI implementation.</li>
                                    <li>Developed SmartCorn project, implementing CNN models for disease detection.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#FD6F00] border-b border-gray-200 dark:border-gray-800 pb-2 mb-6">
                            Selected Projects
                        </h3>
                        
                        <div className="space-y-5">
                            {/* PROJECT 1: MindGarden */}
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">MindGarden <span className="font-normal text-gray-500 ml-1">| AI & Mobile Dev</span></h4>
                                    <span className="text-[10px] text-gray-400">May 2025 - Aug 2025</span>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                                    <em>Tools: Kotlin, Python, TensorFlow, Cloud Integration</em>
                                </p>
                                <ul className="list-disc list-outside ml-4 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Built an AI-driven journaling app that visualizes user emotions for mental well-being.</li>
                                    <li>Served as AI Backend & DevOps Engineer, developing backend infrastructure and API services.</li>
                                </ul>
                            </div>
                            
                            {/* PROJECT 2: SmartCorn */}
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">SmartCorn <span className="font-normal text-gray-500 ml-1">| AI-Web Based System</span></h4>
                                    <span className="text-[10px] text-gray-400">Oct 2024 - Dec 2024</span>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                                    <em>Tools: Python, CNN, React, MLOps</em>
                                </p>
                                <ul className="list-disc list-outside ml-4 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Developed a CNN model to detect corn leaf diseases with high accuracy.</li>
                                    <li>Handled MLOps: deployment and performance scalability in a cloud environment.</li>
                                </ul>
                            </div>

                            {/* PROJECT 3: Digi Skill */}
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">Digi Skill <span className="font-normal text-gray-500 ml-1">| Android Dev</span></h4>
                                    <span className="text-[10px] text-gray-400">Nov 2024 - Dec 2025</span>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                                    <em>Tools: Kotlin, Firebase Auth, Firestore</em>
                                </p>
                                <ul className="list-disc list-outside ml-4 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Developed an Android educational app to enhance digital literacy.</li>
                                    <li>Implemented real-time data storage and user progress tracking via Firebase.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </div>
        </div>
    );
};

export default CompactView;