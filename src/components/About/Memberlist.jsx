import { useState } from "react";
import founderPic from "../../assets/images/About/ceo&founder.jpeg";
import webDevPic from "../../assets/images/About/WebSiteDevelopment.jpeg";
import testingEngineerPic from "../../assets/images/About/TestingEngineer.jpeg";
import logoDesignerPic from "../../assets/images/About/LogoDesigner.jpeg";
import processorAnalystPic from "../../assets/images/About/ProcessorAnalyst.jpeg";
import businessExecutivePic from "../../assets/images/About/BusinessExecutive.jpeg";
import linkedin from "../../assets/images/About/linkedin.svg"
import mail from "../../assets/images/About/mail.svg"
import user from "../../assets/images/About/user.svg"

export default function Memberlist() {
  const memberDetails = [
    {
      image: founderPic,
      imageAlt: "Founder and CEO",
      role: "Founder and CEO",
    },
    {
      image: webDevPic,
      imageAlt: "Interactive Web Specialist",
      role: "Interactive Web Specialist",
    },
    {
      image: testingEngineerPic,
      imageAlt: "Application Test Engineer",
      role: "Application Test Engineer",
    },
    {
      image: logoDesignerPic,
      imageAlt: "Graphic Identity Specialist",
      role: "Graphic Identity Specialist",
    },
    {
      image: processorAnalystPic,
      imageAlt: "Systems Optimization Analyst",
      role: "Systems Optimization Analyst",
    },
    {
      image: businessExecutivePic,
      imageAlt: "Business & Brand Developer",
      role: "Business & Brand Developer",
    },
  ];

  const MemberDetailsLists = [
    {
      image: "../../assets/images/discusionPhoto.jpeg",
      imageAlt: "founder & CEO",
      name: "PS",
      role: "Founder & CEO",
      as: [ "https://www.linkedin.com/in/prabhashankar-k/", "prabhashankark2003@gmail.com", "https://ps.squidnova.in/" ]
    },
    {
      image: "../../assets/images/discusionPhoto.jpeg",
      imageAlt: "Interactive Web Specialist",
      name: "Tharun Kumar",
      role: "Interactive Web Specialist",
      as: ['https://www.linkedin.com/in/tharun-kumar-84977926a/', "tharunkumarsubburaj@gmail.com", "https://tharunkumarsubburaj.tech/"]
    },
    {
      image: "../../assets/images/discusionPhoto.jpeg",
      imageAlt: "Interactive Web Specialist",
      name: "Harries",
      role: "Application Test Engineer",
      as: [ "https://www.linkedin.com/in/mohamed-harries/", 'harriesameer142003@gmai.com', "https://harries.squidnova.in/" ]
    },
    {
      image: "../../assets/images/discusionPhoto.jpeg",
      imageAlt: "Interactive Web Specialist",
      name: "Monisha",
      role: "Systems Optimization Analyst",
      as: [ "https://www.linkedin.com/in/monisha-kirubasankar-mk20112000", "monishakirubasankar@gmail.com", "https://moni.squidnova.in/" ]
    },
    {
      image: "../../assets/images/discusionPhoto.jpeg",
      imageAlt: "Interactive Web Specialist",
      name: "Vithya",
      role: "Graphic Identity Specialist",
      as: [ "https://www.linkedin.com/in/vithya", "vithya@example.com", "https://vithya.squidnova.in/" ]
    },
    {
      image: "../../assets/images/discusionPhoto.jpeg",
      imageAlt: "Interactive Web Specialist",
      name: "Sakthisubashree ",
      role: "Business & Brand Developer",
      as: [ "https://www.linkedin.com/in/sakthisubashree-m", " Subashreemarimuthu87@gmail.com ", "https://suba.squidnova.in"]
    },
  ];

  const [ceoMembers, setCeoMembers] = useState(false);
  const [webDevMembers, setWebDevMembers] = useState(false);
  const [ TestingEngineerMembers, setTestingEngineerMembers ] = useState(false);
  const [ LogoDesignerMembers, setLogoDesignerMembers ] = useState(false);
  const [ ProcessorAnalystMembers, setProcessorAnalystMembers ] = useState(false);
  const [ BusinessAndMarketingExecutiveMembers, setBusinessAndMarketingExecutiveMembers ] = useState(false);

  const handlechanges = (e, member) => {
    e.preventDefault();
    console.log(member);
    if (member.role === "Founder and CEO") {
      setCeoMembers(true);
      setWebDevMembers(false);
      //   setMarketingMembers(false);
    }
    else if (member.role === "Interactive Web Specialist") {
      setWebDevMembers(true);
      setTestingEngineerMembers(false);
      //   setMarketingMembers(false);
    } else if (member.role === "Application Test Engineer") {
      setWebDevMembers(false);
      setTestingEngineerMembers(true);
      //   setMarketingMembers(false);
    } else if (member.role === "Graphic Identity Specialist") {
      setWebDevMembers(false);
      setLogoDesignerMembers(true);
      //   setMarketingMembers(false);
    } else if (member.role === "Systems Optimization Analyst") {
      setWebDevMembers(false);
      setProcessorAnalystMembers(true);
      //   setMarketingMembers(false);
    }else if (member.role === "Business & Brand Developer") {
      setWebDevMembers(false);
      setBusinessAndMarketingExecutiveMembers(true);
      //   setMarketingMembers(true);
    }
  };

  return (
    <section className=" bg-darkblue text-white/80 p-4 sm:p-6 lg:p-[2%] flex flex-col overflow-hidden gap-6 items-center group ">
      <h1 className=" font-bold text-3xl ">Meet Our Teams</h1>
      <div className="  flex overflow-x-scroll w-full scrollbar-hidden hover:scrollbar ">
        <div className=" flex gap-3 sm:gap-5 lg:gap-8 py-6 ">
          {memberDetails.map((member, index) => (
            <div
              key={index}
              className={`bg-darkblue text-white/80 w-71 sm:w-sm border border-white/15 flex flex-col items-center rounded-2xl
                          transition-transform duration-300 cursor-pointer hover:shadow-lg hover:shadow-darkblue/90 hover:border-white/30
                          ${ index === 0 ? "bg-darkyellow  lg:bg-darkblue lg:hover:bg-darkyellow lg:hover:text-black" : "bg-lightblue lg:bg-darkblue lg:hover:bg-lightblue"}
                          ${
                            index % 2 === 0
                              ? "md:group-hover:translate-y-5"
                              : " md:group-hover:-translate-y-5 "
                          }
                      `}
              onClick={(e) => handlechanges(e, member)}
            >
              <img
                src={member.image}
                alt={member.imageAlt}
                className=" h-48 sm:h-56 md:h-64 lg:h-72 w-full rounded-t-2xl object-cover"
              />

              <div className=" p-4 sm:p-[5%] text-center ">
                <h1 className=" text-xl sm:text-2xl lg:text-3xl font-bold ">
                  {member.name}
                </h1>
                <p className=" text-base sm:text-lg ">{member.role}</p>
              </div>
            </div>
          ))}

          {/* CEO Modal */}
          {ceoMembers && (
            <div
              className="fixed inset-0 bg-black flex justify-center items-center z-50 px-[4%] "
              onClick={() => setCeoMembers(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-darkblue text-white/80 relative rounded-2xl p-6 w-full max-w-xl shadow-xl animate-fadeIn"
              >
                <h1 className=" font-bold text-lg sm:text-2xl ">Founder & CEO Members</h1>
                <div className=" scrollbar overflow-y-auto max-h-140 ">
                  {MemberDetailsLists.filter(value => value.role === "Founder & CEO").map((memberDetails, index) => (
                    <div
                      key={index}
                      className=" flex flex-col items-center mt-4 p-4 bg-white/10 border border-white/20 rounded-lg "
                    >
                      <div className=" flex flex-col space-y-1 items-center justify-center ">
                        <h2 className=" text-xl font-semibold ">
                          {memberDetails.name}
                        </h2>
                        <p className=" text-base ">{memberDetails.role}</p>
                      </div>
                      <div className=" grid grid-cols-3 w-full place-content-center ">
                        <a className=" flex justify-center " href={memberDetails.as[0]}>
                          <img src={linkedin} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={`mailto:${memberDetails.as[1]}`}>
                          <img src={mail} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={memberDetails.as[2]}>
                          <img src={user} alt="" className=" h-10 w-10 " />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- Close Button --- */}
                <button
                  onClick={() => setCeoMembers(false)}
                  className="absolute top-[11%] right-[7%] sm:top-[4%] sm:right-[5%] text-lg sm:text-2xl  text-red-700 rounded-lg transition"
                >
                  X
                </button>
              </div>
            </div>
          )}

          {/* Web Members Modal */}
          {webDevMembers && (
            <div
              className="fixed inset-0 bg-black flex justify-center items-center z-50 px-[4%] "
              onClick={() => setWebDevMembers(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-darkblue text-white/80 relative rounded-2xl p-6 w-full max-w-xl shadow-xl animate-fadeIn"
              >
                <h1 className=" font-bold text-lg sm:text-2xl ">Web Developer Members</h1>
                <div className=" scrollbar overflow-y-auto max-h-140 ">
                  {MemberDetailsLists.filter(value => value.role === "Interactive Web Specialist").map((memberDetails, index) => (
                    <div
                      key={index}
                      className=" flex flex-col items-center mt-4 p-4 bg-white/10 border border-white/20 rounded-lg "
                    >
                      <div className=" flex flex-col space-y-1 items-center justify-center ">
                        <h2 className=" text-xl font-semibold ">
                          {memberDetails.name}
                        </h2>
                        <p className=" text-base ">{memberDetails.role}</p>
                      </div>
                      <div className=" grid grid-cols-3 w-full place-content-center ">
                        <a className=" flex justify-center " href={memberDetails.as[0]}>
                          <img src={linkedin} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={`mailto:${memberDetails.as[1]}`}>
                          <img src={mail} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={memberDetails.as[2]}>
                          <img src={user} alt="" className=" h-10 w-10 " />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- Close Button --- */}
                <button
                  onClick={() => setWebDevMembers(false)}
                  className="absolute top-[11%] right-[7%] sm:top-[4%] sm:right-[5%] text-lg sm:text-2xl  text-red-700 rounded-lg transition"
                >
                  X
                </button>
              </div>
            </div>
          )}

          {/* Application Test Engineer Modal */}
          {TestingEngineerMembers && (
            <div
              className="fixed inset-0 bg-black flex justify-center items-center z-50 px-[4%] "
              onClick={() => setTestingEngineerMembers(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-darkblue text-white/80 relative rounded-2xl p-6 w-full max-w-xl shadow-xl animate-fadeIn"
              >
                <h1 className=" font-bold text-lg sm:text-2xl ">Application Test Engineer Members</h1>
                <div className=" scrollbar overflow-y-auto max-h-140 ">
                  {MemberDetailsLists.filter(value => value.role === "Application Test Engineer").map((memberDetails, index) => (
                    <div
                      key={index}
                      className=" flex flex-col items-center mt-4 p-4 bg-white/10 border border-white/20 rounded-lg "
                    >
                      <div className=" flex flex-col space-y-1 items-center justify-center ">
                        <h2 className=" text-xl font-semibold ">
                          {memberDetails.name}
                        </h2>
                        <p className=" text-base ">{memberDetails.role}</p>
                      </div>
                      <div className=" grid grid-cols-3 w-full place-content-center ">
                        <a className=" flex justify-center " href={memberDetails.as[0]}>
                          <img src={linkedin} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={`mailto:${memberDetails.as[1]}`}>
                          <img src={mail} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={memberDetails.as[2]}>
                          <img src={user} alt="" className=" h-10 w-10 " />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- Close Button --- */}
                <button
                  onClick={() => setTestingEngineerMembers(false)}
                  className="absolute top-[11%] right-[7%] sm:top-[4%] sm:right-[5%] text-lg sm:text-2xl  text-red-700 rounded-lg transition"
                >
                  X
                </button>
              </div>
            </div>
          )}

          {/* Logo Creator Modal */}
          {LogoDesignerMembers && (
            <div
              className="fixed inset-0 bg-black flex justify-center items-center z-50 px-[4%] "
              onClick={() => setLogoDesignerMembers(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-darkblue text-white/80 relative rounded-2xl p-6 w-full max-w-xl shadow-xl animate-fadeIn"
              >
                <h1 className=" font-bold text-lg sm:text-2xl ">Logo Designer Members</h1>
                <div className=" scrollbar overflow-y-auto max-h-140 ">
                  {MemberDetailsLists.filter(value => value.role === "Graphic Identity Specialist").map((memberDetails, index) => (
                    <div
                      key={index}
                      className=" flex flex-col items-center mt-4 p-4 bg-white/10 border border-white/20 rounded-lg "
                    >
                      <div className=" flex flex-col space-y-1 items-center justify-center ">
                        <h2 className=" text-xl font-semibold ">
                          {memberDetails.name}
                        </h2>
                        <p className=" text-base ">{memberDetails.role}</p>
                      </div>
                      <div className=" grid grid-cols-3 w-full place-content-center ">
                        <a className=" flex justify-center " href={memberDetails.as[0]}>
                          <img src={linkedin} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={`mailto:${memberDetails.as[1]}`}>
                          <img src={mail} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={memberDetails.as[2]}>
                          <img src={user} alt="" className=" h-10 w-10 " />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- Close Button --- */}
                <button
                  onClick={() => setLogoDesignerMembers(false)}
                  className="absolute top-[11%] right-[7%] sm:top-[4%] sm:right-[5%] text-lg sm:text-2xl  text-red-700 rounded-lg transition"
                >
                  X
                </button>
              </div>
            </div>
          )}

          {/* Web Members Modal */}
          {ProcessorAnalystMembers && (
            <div
              className="fixed inset-0 bg-black flex justify-center items-center z-50 px-[4%] "
              onClick={() => setProcessorAnalystMembers(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-darkblue text-white/80 relative rounded-2xl p-6 w-full max-w-xl shadow-xl animate-fadeIn"
              >
                <h1 className=" font-bold text-lg sm:text-2xl ">Processor Analyst Members</h1>
                <div className=" scrollbar overflow-y-auto max-h-140 ">
                  {MemberDetailsLists.filter(value => value.role === "Systems Optimization Analyst").map((memberDetails, index) => (
                    <div
                      key={index}
                      className=" flex flex-col items-center mt-4 p-4 bg-white/10 border border-white/20 rounded-lg "
                    >
                      <div className=" flex flex-col space-y-1 items-center justify-center ">
                        <h2 className=" text-xl font-semibold ">
                          {memberDetails.name}
                        </h2>
                        <p className=" text-base ">{memberDetails.role}</p>
                      </div>
                      <div className=" grid grid-cols-3 w-full place-content-center ">
                        <a className=" flex justify-center " href={memberDetails.as[0]}>
                          <img src={linkedin} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={`mailto:${memberDetails.as[1]}`}>
                          <img src={mail} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={memberDetails.as[2]}>
                          <img src={user} alt="" className=" h-10 w-10 " />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- Close Button --- */}
                <button
                  onClick={() => setProcessorAnalystMembers(false)}
                  className="absolute top-[11%] right-[7%] sm:top-[4%] sm:right-[5%] text-lg sm:text-2xl  text-red-700 rounded-lg transition"
                >
                  X
                </button>
              </div>
            </div>
          )}

          {/* Web Members Modal */}
          {BusinessAndMarketingExecutiveMembers && (
            <div
              className="fixed inset-0 bg-black flex justify-center items-center z-50 px-[4%] "
              onClick={() => setBusinessAndMarketingExecutiveMembers(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-darkblue text-white/80 relative rounded-2xl p-6 w-full max-w-xl shadow-xl animate-fadeIn"
              >
                <h1 className=" font-bold text-lg sm:text-2xl ">Business and Marketing Executive Members</h1>
                <div className=" scrollbar overflow-y-auto max-h-140 ">
                  {MemberDetailsLists.filter(value => value.role === "Business & Brand Developer").map((memberDetails, index) => (
                    <div
                      key={index}
                      className=" flex flex-col items-center mt-4 p-4 bg-white/10 border border-white/20 rounded-lg "
                    >
                      <div className=" flex flex-col space-y-1 items-center justify-center ">
                        <h2 className=" text-xl font-semibold ">
                          {memberDetails.name}
                        </h2>
                        <p className=" text-base ">{memberDetails.role}</p>
                      </div>
                      <div className=" grid grid-cols-3 w-full place-content-center ">
                        <a className=" flex justify-center " href={memberDetails.as[0]}>
                          <img src={linkedin} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={`mailto:${memberDetails.as[1]}`}>
                          <img src={mail} alt="" className=" h-10 w-10 " />
                        </a>
                        <a className=" flex justify-center " href={memberDetails.as[2]}>
                          <img src={user} alt="" className=" h-10 w-10 " />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- Close Button --- */}
                <button
                  onClick={() => setBusinessAndMarketingExecutiveMembers(false)}
                  className="absolute top-[11%] right-[7%] sm:top-[4%] sm:right-[5%] text-lg sm:text-2xl  text-red-700 rounded-lg transition"
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
