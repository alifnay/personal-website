import React from 'react'
import { FaAndroid, FaPython, FaJava, FaHtml5, FaPhp, FaJs, FaReact } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMysql, SiTensorflow } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.div
            className="py-20"
            initial={{ opacity: 0, y: 50, scale: 0.9 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            viewport={{ once: true, amount: 0.2 }} 
        > 
        <div className='max-w-7xl mx-auto pt-12'>
            <h2 className='text-2xl font-semibold text-center drop-shadow-md'>
                Skills
            </h2>
            <h3 className='text-center pt-2 text-[#707070] drop-shadow-md'>
                The skills, tools and technologies I am really good at:
            </h3>
            <div className='max-w-6xl mx-auto pt-8'>
                <div className='flex space-x-8 items-center justify-center drop-shadow-xl'>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <FaAndroid size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            Android
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <FaPython size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            Python
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <SiTensorflow size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            Tensorflow
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <FaJava size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            Java
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <TbBrandKotlin size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            Kotlin
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <FaHtml5 size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            HTML
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <RiTailwindCssLine size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            Tailwind
                        </h2>
                    </div>
                </div>
                <div className='flex mt-8 space-x-8 items-center justify-center'>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <FaPhp size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            PHP
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <SiMysql size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            MySQL
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <FaJs size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            Javascript
                        </h2>
                    </div>
                    <div className="border-2 w-32 border-[#FD6F00] flex flex-col items-center justify-center py-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-out">
                        <FaReact size={48} color="#FD6F00" className="transition-transform duration-300 ease-out" />
                        <h2 className="text-md font-medium text-[#FD6F00] transition-transform duration-300 ease-out">
                            React
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Skills