import React from 'react'

export default function Achivements() {

    const features = [
        {
            icon: '🚀',
            title: '24/7 Support',
            description: 'Developed a complete digital ecosystem that offers branding, design, strategy, marketing, and technology solutions under one roof — delivering everything a user needs in one place.'
        },
        {
            icon: '🚀',
            title: 'CUSTOMER ACHIEVEMENTS',
            description: 'Earned the trust of customers through consistent quality, transparent communication, and friendly support — turning first-time users into long-term partners.'
        },
        {
            icon: '🚀',
            title: 'Market Research',
            description: 'We listen to customer needs to guide our development, analyze the market to ensure we offer something distinct, and test concepts to make thoughtful decisions.'
        },
    ];

  return (
    <aside className=' bg-darkblue/95  flex flex-col gap-6 sm:gap-8 justify-center items-center p-4 sm:p-6 lg:p-[3%] '>
        <h1 className=' text-xl sm:text-5xl font-bold text-white/80 text-center  '>Our Achivements</h1>
        <div className=' flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-4 sm:gap-5 text-white w-full max-w-8xl'>
            {features.map((features, index) => (
                <div key={index} className=' w-full sm:w-auto lg:w-1/3 grid grid-rows-[auto, 1fr, 1fr] bg-white/5 backdrop-blur-2xl border border-white/20 rounded-tl-[3rem] rounded-br-[3rem] 
                    p-6 sm:p-[3%] gap-3 sm:gap-4 
                    hover:scale-105 hover:rounded-[3rem]  hover:shadow-lg hover:shadow-black/30
                    transition-all duration-700 delay-150 ease-in
                    '>
                    <span className=' bg-blue-600 p-[5%] px-[5.5%] flex justify-center items-center m-auto rounded-full text-2xl sm:text-3xl '>{features.icon}</span>
                    <h2 className=' text-xl sm:text-2xl lg:text-3xl text-center font-bold '>{features.title}</h2>
                    <p className=' text-base sm:text-lg lg:text-xl text-justify'>{features.description}</p>
                </div>
            ))}
        </div>
    </aside>
  )
}
