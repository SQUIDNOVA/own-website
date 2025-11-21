import React from "react";

export default function OurMission() {

  // const featurePoints = [
  //   'To innovate with purpose and create solutions that inspire progress.',
  //   'To empower people and businesses through technology and creativity.',
  //   'To build a future driven by excellence, trust, and sustainable growth.'
  // ]

  return (
    <section className=" bg-darkblue text-white/80 p-4 sm:p-6 lg:p-[3%] flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-7 ">
      <div className=" w-full md:w-1/2 ">
        <h1 className=" text-xl sm:text-2xl font-semibold mb-3 ">
          Our Mission
        </h1>
        <p className="text-sm sm:text-base mb-4">
          To deliver reliable and innovative solutions that meet our clients’
          needs with quality and care. We are committed to building long-term
          relationships, empowering growth, and creating value through
          excellence and continuous improvement.
        </p>
        {/* <h1 className=" text-xl sm:text-2xl font-semibold mb-3 ">
          Key Features of Mission
        </h1> */}
        {/* <ol className=" list-disc ml-5 sm:ml-7 space-y-2 text-sm sm:text-base ">
          {featurePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ol> */}
      </div>
      {/* <img
        src="src/assets/images/discusionPhoto.jpeg"
        alt=""
        className=" w-full md:w-1/2 rounded-2xl "
      /> */}
      <div className=" w-full md:w-1/2 ">
        <h1 className=" font-bold text-2xl">Our Vision</h1>
        <p className="text-sm sm:text-base mb-4">
          To create innovative solutions that inspire growth, empower people,
          and make technology accessible for everyone. We aim to shape a smarter
          and more connected future through dedication, creativity, and
          excellence.
        </p>
        {/* <h1 className=" text-xl sm:text-2xl font-semibold mb-3 ">
          Key Features of Vision
        </h1> */}
        {/* <ol className=" list-disc ml-5 sm:ml-7 space-y-2 text-sm sm:text-base ">
          {featurePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ol> */}
      </div>
    </section>
  );
}
