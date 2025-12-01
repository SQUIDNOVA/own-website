import React from "react";

export default function OurMission() {

  return (
    <section className=" bg-darkblue text-white/80 p-4 sm:p-6 lg:p-[3%] flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-7 ">
      <div className=" w-full md:w-1/2 ">
        <h1 className=" text-2xl sm:text-2xl font-semibold mb-3 ">
          Our Mission
        </h1>
        <p className="text-sm sm:text-base mb-0">
          To deliver reliable and innovative solutions that meet our clients’
          needs with quality and care. We are committed to building long-term
          relationships, empowering growth, and creating value through
          excellence and continuous improvement.
        </p>
      </div>
      <div className=" w-full md:w-1/2 ">
        <h1 className=" text-2xl sm:text-2xl font-semibold mb-3">Our Vision</h1>
        <p className="text-sm sm:text-base mb-4">
          To create innovative solutions that inspire growth, empower people,
          and make technology accessible for everyone. We aim to shape a smarter
          and more connected future through dedication, creativity, and
          excellence.
        </p>
      </div>
    </section>
  );
}
