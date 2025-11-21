import React from "react";

export default function OurVision() {

  const featurePoints = [
    'To deliver high-quality services that exceed client expectations.',
    'To foster innovation, teamwork, and continuous improvement in all we do.',
    'To create long-term value and make a positive impact in every project we handle.'
  ]

  return (
    <section className=" bg-darkblue/95 text-white/80 p-4 sm:p-6 lg:p-[3%] flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-7 ">
      <img
        src="src/assets/images/discusionPhoto.jpeg"
        alt=""
        className=" w-full md:w-1/2 rounded-2xl "
      />
      <div className=" w-full md:w-1/2 ">
        <h1 className=" font-bold text-2xl">Our Vision</h1>
        <p className="text-sm sm:text-base mb-4">
          To create innovative solutions that inspire growth, empower people,
          and make technology accessible for everyone. We aim to shape a smarter
          and more connected future through dedication, creativity, and
          excellence.
        </p>
        <h1 className=" text-xl sm:text-2xl font-semibold mb-3 ">
          Key Features of Vision
        </h1>
        <ol className=" list-disc ml-5 sm:ml-7 space-y-2 text-sm sm:text-base ">
          {featurePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
