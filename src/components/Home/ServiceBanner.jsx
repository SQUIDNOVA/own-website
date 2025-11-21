import React from 'react'

export default function ServiceBanner() {

    const serviceCards = [
        {
            title: "Logo Design",
        },
        {
            title: "Website Design",
        },
        {
            title: "Poster Design",
        },
        {
            title: "Brand and Slogan Design",
        },
        {
            title: "Business Names",
        },
        {
            title: "Start up ideas",
        },
        {
            title: "Business Analyst",
        },
        {
            title: "Cloud support",
        },
        {
            title: "Marketing ideas",
        },
        {
            title: "Business Monitoring",
        },
         {
            title: "UG base line Project",
        }
    ];

  return (
    <section className=' bg-darkblue/95 flex flex-col items-center justify-center py-8 sm:py-10 lg:py-12 gap-6 sm:gap-8 px-4 overflow-hidden'>
        <h1 className=' text-2xl sm:text-3xl text-white/80 lg:text-4xl font-bold '>Our Services</h1>
        <div className=' flex w-full gap-4 sm:gap-5 animate-scrollBox whitespace-nowrap '>
            {serviceCards.map((service1, index) => (
                <div key={index} className=' inline-block bg-white/10 border border-white/40 hover:bg-lightblue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg '>
                    <h2 className='text-sm sm:text-base lg:text-lg'>{service1.title}</h2>
                </div>
            ))}
            {serviceCards.map((service2, index) => (
                <div key={index} className=' inline-block bg-white/10 border border-white/40 hover:bg-lightblue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg '>
                    <h2 className='text-sm sm:text-base lg:text-lg'>{service2.title}</h2>
                </div>
            ))}
        </div>
    </section>
  )
}
