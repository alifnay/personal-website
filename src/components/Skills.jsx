import React from 'react'
import { FaAndroid } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='max-w-7xl mx-auto pt-12'>
            <div className='text-2xl font-semibold text-center'>
                Skills
            </div>
            <div className='text-center pt-4 text-[#707070]'>
                The skills, tools and technologies I am really good at:
            </div>
            <div className='flex space-x-8 pt-4'>
                <div className="border border-gray-400 flex flex-col items-center justify-center p-4 rounded-lg">
                    <FaAndroid size={48} />
                    <div className="text-lg font-medium mt-2">Android</div>
                </div>
            </div>
        </div>
    )
}

export default Skills
