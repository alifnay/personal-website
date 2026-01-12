
const Works = () => {
    return (
        <div className='max-w-7xl mx-auto mt-36'>
            <h2 className='drop-shadow-md text-2xl font-semibold text-center'>
                Works
            </h2>
            <p className='drop-shadow-md text-center pt-2 text-[#707070] pb-12'>Some of the noteworthy projects I have built:</p>
            <div className='grid md:grid-cols-3 gap-4'>
                <div className="shadow-xl h-[480px] bg-[#262626] rounded-lg overflow-hidden flex flex-col">
                    <img src="/digi-skill.png" className="w-full h-full object-cover" alt="Digi Skill" />
                    <div className="flex justify-between items-center h-16 px-4 bg-[#1f1f1f] text-lg text-[#C6C6C6]">
                        <h2>Digi Skill</h2>
                        <h2 className='text-[#959595]'>Android</h2>
                    </div>
                </div>
                <div className="shadow-xl h-[480px] bg-[#262626] rounded-lg overflow-hidden flex flex-col">
                    <img src="/smartcorn.png" className="w-full h-full object-cover" alt="Digi Skill" />
                    <div className="flex justify-between items-center h-16 px-4 bg-[#1f1f1f] text-lg text-[#C6C6C6]">
                        <h2>SmartCorn</h2>
                        <h2 className='text-[#959595]'>Website</h2>
                    </div>
                </div>
                <div className="shadow-xl h-[480px] bg-[#262626] rounded-lg overflow-hidden flex flex-col">
                    <img src="/ecommerce.png" className="w-full h-full object-cover" alt="Digi Skill" />
                    <div className="flex justify-between items-center h-16 px-4 bg-[#1f1f1f] text-lg text-[#C6C6C6]">
                        <h2>E-Commerce</h2>
                        <h2 className='text-[#959595]'>UI/UX</h2>
                    </div>
                </div>
                <div className="shadow-xl h-[480px] bg-[#262626] rounded-lg overflow-hidden flex flex-col">
                    <img src="/twt-sentiment.png" className="w-full h-full object-cover" alt="Digi Skill" />
                    <div className="flex justify-between items-center h-16 px-4 bg-[#1f1f1f] text-lg text-[#C6C6C6]">
                        <h2>Twitter Sentiment Analysis</h2>
                        <h2 className='text-[#959595]'>Streamlit</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
