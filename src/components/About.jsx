import React from 'react'

const About = () => {
    return (
        <div className='max-w-7xl mx-auto mt-36'>
            <h2 className='text-2xl font-semibold text-center mb-24'>
                About Me
            </h2>
            <div className='grid grid-cols-2 space-x-4 '>
                <div className="flex justify-center relative">
                    <div className="w-72 h-[24rem] bg-[#383838] rounded-t-full absolute z-0" />
                    <img 
                    src="/about-me.png" 
                    alt="Profile" 
                    className="h-[28rem] w-auto object-cover z-10 relative" 
                    />
                </div>
                <div className='py-4'>
                    <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300 font-light space-y-4">
                        I am an undergraduate student majoring in Information Technology at Universitas Negeri Yogyakarta, where I have developed a strong foundation in computer science and technology. Passionate about leveraging technology to create innovative solutions, I am particularly drawn to the field of Artificial Intelligence (AI). My fascination with AI stems from its potential to revolutionize industries, improve efficiency, and solve complex real-world problems.
                    </p>
                    <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300 font-light space-y-4">
                        Through my academic journey and extracurricular activities, I have actively explored the depths of AI, delving into areas such as machine learning, natural language processing, and computer vision. My experience includes participating in projects and research that utilize AI technologies to analyze data, automate processes, and deliver actionable insights. For instance, I have engaged in hands-on experiments with algorithms, data analysis tools, and frameworks to build predictive models and AI-driven applications.
                    </p>
                    <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300 font-light space-y-4">
                        Beyond my technical skills, I am deeply motivated by the human aspect of technology—how it can positively impact communities and create meaningful change. This perspective has inspired me to continually learn and seek out opportunities to apply my knowledge in collaborative environments.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About