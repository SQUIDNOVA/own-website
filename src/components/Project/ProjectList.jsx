import { useState, useMemo, useCallback } from "react";

export default function ProjectList() {
  const projectCards = useMemo(
    () => [
      {
        id: 1,
        title: "SLOT PARKING USING QR",
        description: `A car parking system integrated with a scanner is a tool that monitors and displays the occupancy status of parking spaces in real-time. 
          It uses the scanner data to update a dynamic interface, allowing users or operators to view which slots are available and which are occupied, 
          facilitating efficient parking management and guidance.`,
        image: "src/assets/images/discusionPhoto.jpeg",
        gif: "src/assets/gif/login-page.gif",
        techStack: ["HTML", "CSS", "React.JS", "JSON"],
        projectLink: "/",
      },
      {
        id: 2,
        title: "MENTORA",
        description: `The Mentora project is an interactive platform that assesses user skills and career interests to recommend the most suitable 
          professional roles and future paths. It integrates features like quizzes and structured assessments to gather data, uses JSON to manage and 
          process user profiles and guidance information, and leverages React.js to deliver personalized mentorship recommendations and track progress.`,
        image: "src/assets/images/discusionPhoto.jpeg",
        gif: "src/assets/gif/login-page.gif",
        techStack: ["HTML", "CSS", "React.JS", "JSON"],
        projectLink: "/",
      },
      {
        id: 3,
        title: "RESUME",
        description: `This project is a sophisticated web application that allows users to create, edit, and optimize their resumes with built-in 
          Applicant Tracking System (ATS) scoring functionality. It performs automated checks on critical factors like font usage, document alignment, 
          and structural integrity to maximize the resume's score, ensuring professional presentation and compliance for digital submissions, 
          with all data managed locally using JSON.`,
        image: "src/assets/images/discusionPhoto.jpeg",
        gif: "src/assets/gif/login-page.gif",
        techStack: ["HTML", "tailwindcss", "reactjs", "JSON"],
        projectLink: "/",
      },
      {
        id: 4,
        title: "PSM SECURITY MAIN",
        description: `The Private Security Management System  project is a dynamic and responsive web-based application designed to automate 
          the process of booking, managing, and verifying security personnel. It eliminates manual operations, ensures secure data handling, 
          and provides real-time management for both users and administrators.`,
        image: "src/assets/images/discusionPhoto.jpeg",
        gif: "src/assets/gif/login-page.gif",
        techStack: ["HTML", "tailwindcss", "reactjs", "JSON"],
        projectLink: "/",
      },
      {
        id: 5,
        title: "Student A to Z Guide",
        description: `CONNECT 360 is a location-based information platform designed to help students easily find essential services around their area.
                      The system allows users to create an account, enter their personal and college details, select their location, 
                      and instantly view all shops, malls, temples, stationery stores, textiles near by you.`,
        image: "src/assets/images/discusionPhoto.jpeg",
        gif: "src/assets/gif/login-page.gif",
        techStack: ["HTML", "tailwindcss", "reactjs", "JSON"],
        projectLink: "/",
      },
      {
        id: 6,
        title: "May I Help You",
        description: `This project is an advanced web platform that allows users to explore multiple companies and view complete details—including demo links—on a single, unified site. With its sleek design and user-friendly interface,
                      it delivers fast, organized, and up-to-date company information for an effortless browsing experience.`,
        image: "src/assets/images/discusionPhoto.jpeg",
        gif: "src/assets/gif/login-page.gif",
        techStack: ["HTML", "tailwindcss", "js","JSON"],
        projectLink: "/",
      },
    ],
    []
  );

  const [selectedCard, setSelectedCard] = useState(null);
  const [modelOpen, setModelOpen] = useState(false);

  const handleMoreClick = useCallback(
    (cardId) => {
      const card = projectCards.find((c) => c.id === cardId);
      if (card) {
        setSelectedCard(card);
        setModelOpen(true);
      }
    },
    [projectCards]
  );

  console.log(selectedCard);

  return (
    <section
      className=" bg-darkblue/95 text-white/80 flex justify-center items-center  "
    >
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[7%]
        gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 ">
        {projectCards.map((cards) => (
          <div
            key={cards.id}
            className=" grid grid-rows-[auto, 1fr]
                  bg-white/10 rounded-lg overflow-hidden
                  hover:scale-102 transition-transform duration-600 delay-100 "
          >
            <img
              src={cards.image}
              alt="project image"
              className="h-48 sm:h-56 md:h-80 object-cover w-full "
            />
            <div className=" p-4 sm:p-[3%] ">
              <h2
                className=" font-bold
                          text-xl sm:text-2xl mb-2  "
              >
                {cards.title}
              </h2>
              <div className=" flex flex-col gap-1">
                <p className=" text-base sm:text-lg h-6 overflow-hidden ">
                  {cards.description}
                </p>
                <button
                  className=" font-bold text-left text-lg cursor-pointer "
                  onClick={() => handleMoreClick(cards.id)}
                >
                  more
                </button>
              </div>
              {/* <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 ">
                {cards.techStack.map((tech, idx) => (
                  <p
                    key={idx}
                    className=" bg-black/70 text-xs sm:text-sm text-white p-2 px-3 sm:p-[1.5%] sm:px-[2%] rounded-3xl "
                  >
                    {tech}
                  </p>
                ))}
              </div> */}
              <button className=" bg-lightblue w-full rounded-2xl mt-2 sm:mt-[4%] px-4 py-2 sm:px-[4%] sm:py-[2%] hover:bg-lightblue/80 hover:text-white transition-colors ">
                Visit Project
              </button>
            </div>
          </div>
        ))}
      </div>
      {modelOpen && selectedCard && (
        <div
          className=" inset-0 bg-black/50 fixed flex justify-center items-center z-50 "
          onClick={() => setModelOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" bg-darkblue p-6 pt-12 relative rounded-2xl grid grid-rows-[auto, 1fr] gap-5 w-full max-w-xl shadow-xl animate-fadeIn "
          >
            <div className=" flex flex-col gap-3 ">
              <img
                src={selectedCard.gif}
                alt="project gif"
                className=" h-90 w-full rounded-2xl border-4  border-white/40"
              />
              <h1 className=" text-2xl ">{selectedCard.title}</h1>
              <p className=" text-base ">{selectedCard.description}</p>
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 ">
                {selectedCard.techStack.map((tech, idx) => (
                  <p
                    key={idx}
                    className=" bg-lightblue/60 text-xs sm:text-sm text-white p-2 px-3 sm:p-[1.5%] sm:px-[2%] rounded-3xl "
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <a
                href={selectedCard.projectLink}
                className=" bg-lightblue w-full rounded-2xl mt-2 sm:mt-[4%] px-4 py-2 sm:px-[4%] sm:py-[2%] hover:bg-lightblue/80 hover:text-white transition-colors block text-center "
              >
                Visit Project
              </a>
            </div>
            <button
              onClick={() => setModelOpen(false)}
              className="absolute top-[1.3%] right-[4%] text-2xl  text-red-700 rounded-lg transition"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
