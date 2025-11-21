import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data - replace with your actual serviceListData
const serviceListData = [
  {
    title: "Website Development for Businesses",
    points: [
      `We will create a professional website tailored to your business needs.And give your business a strong online presence.
      Make your brand stand out with a custom-designed website that reflects your unique identity.And brings your vision to life.
      `,
      "Responsive and mobile-friendly layouts",
    ]
  },
  {
    title: "Mobile App Development",
    points: [
      "iOS and Android applications",
      "Cross-platform solutions",
      "UI/UX design",
      "App maintenance and updates"
    ]
  },
  {
    title: "Cloud Services",
    points: [
      "Cloud infrastructure setup",
      "Migration services",
      "Scalable solutions",
      "24/7 monitoring and support"
    ]
  },
  {
    title: "Digital Marketing",
    points: [
      "SEO optimization",
      "Social media management",
      "Content marketing",
      "Analytics and reporting"
    ]
  }
];

const GlareHover = ({ children, className, glareColor, glareOpacity, glareSize }) => {
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x, y });
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ position: 'relative' }}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(${glareSize}px circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}${Math.round(glareOpacity * 255).toString(16).padStart(2, '0')}, transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default function ServiceSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [applicationForm, setApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % serviceListData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + serviceListData.length) % serviceListData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleClick = () => {
    setApplicationForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      alert("Please fill all the fields");
      return;
    }
    else {
      console.log("Form Data Submitted: ", formData);
      setApplicationForm(false);
    }
  }

  const currentService = serviceListData[currentIndex];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-darkblue via-blue-900 to-lightblue flex items-center justify-center px-1 sm:p-4">
      <div className=" w-full flex gap-2 justify-evenly items-center">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className=" bg-white/10 size-10 sm:size-13 backdrop-blur-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-[2%] sm:p-3 rounded-full transition-all duration-300 border border-blue-800/50"
          aria-label="Previous service"
        >
          <ChevronLeft className="size-5 sm:size-6" />
        </button>

        <div>
          {/* Service Card */}
          <div className="text-white/80 w-full">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareSize={300}
              className="border border-blue-800 min-w-50 sm:w-lg md:w-xl lg:w-3xl flex flex-col bg-white/10 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 rounded-2xl gap-4 sm:gap-5 lg:gap-6 transition-all duration-500"
              key={currentIndex}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                {currentService.title}
              </h1>
              
              <div className="space-y-3">
                {currentService.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className="bg-blue-500 w-full p-3 sm:p-4 rounded-2xl hover:bg-blue-600 transition-colors font-medium text-white text-lg mt-4"
                onClick={handleClick}
              >
                Apply
              </button>
            </GlareHover>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {serviceListData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-blue-500'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>


        <button
          onClick={handleNext}
          disabled={isAnimating}
          className=" bg-white/10 size-10 sm:size-13 backdrop-blur-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-300 border border-blue-800/50"
          aria-label="Next service"
        >
          <ChevronRight className="size-5 sm:size-6" />
        </button>
      </div>
      {applicationForm && (
        <div
          className=" inset-0 bg-black/50 fixed flex justify-center items-center z-50 "
          onClick={() => setApplicationForm(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" bg-darkblue text-white/80 p-6 relative rounded-2xl grid grid-rows-[auto, 1fr] gap-5 w-full max-w-xl shadow-xl animate-fadeIn "
          >
            <h1 className=" text-2xl ">Application Form</h1>
            <form className=" flex flex-col gap-4 " onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-2 ">
                <label className=" font-bold text-lg " htmlFor="">Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your Name" 
                  className=" bg-white text-black/80 p-2 rounded-md outline-0 "
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className=" flex flex-col gap-2 ">
                <label className=" font-bold text-lg " htmlFor="">Email ID</label>
                <input 
                  type="email" 
                  placeholder="Enter your Email Id" 
                  className=" bg-white text-black/80 p-2 rounded-md outline-0 " 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className=" flex flex-col gap-2 ">
                <label className=" font-bold text-lg " htmlFor="">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="Enter your Phone Number" 
                  className=" bg-white text-black/80 p-2 rounded-md outline-0 " 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className=" flex flex-col gap-2 ">
                <label className=" font-bold text-lg " htmlFor="">Select Your Service</label>
                <select 
                  name=""  
                  id="" 
                  className=" bg-white text-black/80 p-2 rounded-md outline-0 "
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="" disabled selected>Select a service</option>
                  {serviceListData.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <button 
                type="submit"
                className=" p-[2%] bg-darkyellow/80 hover:bg-darkyellow rounded-md "
              >Submit</button>
            </form>
            <button
              onClick={() => setApplicationForm(false)}
              className="absolute top-[9%] right-[5%]  text-2xl  text-red-700 rounded-lg transition"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}