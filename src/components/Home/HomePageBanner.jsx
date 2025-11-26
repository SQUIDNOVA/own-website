import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePageBanner() {

  const navigate = useNavigate();

  return (
    <main
        className="relative min-h-130 sm:h-screen flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8"
        // style={{
        //     backgroundImage: `url("src/assets/images/discusionPhoto.jpeg")`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        // }}
        >
        <div className="absolute inset-0 bg-darkblue/95"></div>
        <div className="relative z-10 sm:max-w-7xl mx-auto">
            <h1 className="text-3xl font-ethnocentric sm:text-4xl md:text-6xl lg:text-8xl font-semibold px-4">Squidnova</h1>
             <h3 className="text-sm font-ethnocentric animate-expandFormCenter sm:text-2xl md:text-6xl lg:text-3xl font-semibold px-4">Digital Intelligence Hub</h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg px-4">Our mission is to provide the best services to our clients</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button onClick={() => navigate("/service")} className="bg-darkyellow/80 text-white/80 px-6 py-2 sm:px-8 sm:py-3 rounded-2xl hover:bg-darkyellow hover:text-white transition text-md sm:text-base">Get Started</button>
            <button onClick={() => navigate("/contact")} className="border border-white/80 bg-white/20 backdrop-blur-sm px-6 py-2 sm:px-8 sm:py-3 rounded-2xl transition text-sm sm:text-base">Contact Us</button>
            </div>
        </div>
    </main>
  );
}
