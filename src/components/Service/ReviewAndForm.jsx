import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";

export default function ReviewAndForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseData, setResponseData] = useState([]);

  const handleUserEnter = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePostData();
  };

  const handleGetData = async () => {
    try {
      const response = await axiosInstance.get("/service");
      setResponseData(response.data);
    } catch (error) {
      console.error(`Error on fetching data: ${error}`);
    }
  };
  console.log("response data:", responseData);

  const handlePostData = async () => {
    try {
      await axiosInstance
        .post("/service", userData)
        .then((response) => {
          console.log("data posted successfully", response.data);
        })
        .catch((error) => {
          console.error("Error posting data", error);
        });
        handleGetData();
    } catch (error) {
      console.error("Data posting error", error);
    }
    setUserData({
      name: "",
      email: "",
      message: ""
    })
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <section className=" bg-darkblue text-white/80 flex flex-col-reverse sm:flex-row gap-6 p-4 sm:p-6 lg:p-[3%] ">
      <div className=" sm:w-1/2 w-full ">
        <div className=" h-118 rounded-2xl p-[4%] overflow-y-auto scrollbar-hidden bg-lightblue/10 ">
          {responseData.map((data, index) => (
            <div
              key={index}
              className=" space-y-2 w-full mb-[2.5%] p-4 bg-white/10 border border-white/30 rounded-2xl "
            >
              <div className=" flex items-center w-full gap-4 bg-lightblue/60 p-[1%] px-[4%] rounded-2xl ">
                <div className="  grid grid-rows-2 space-y-0 place-content-center ">
                  <h2 className=" text-xl sm:text-2xl font-bold ">{data.name}</h2>
                  <p className=" text-xs sm:text-sm ">{data.email}</p>
                </div>
              </div>
              <p className=" text-sm sm:text-lg ">{data.message}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" sm:w-1/2 w-full px-[2%]">
        <div className=" bg-white/10 border border-white/40 rounded-2xl  p-[4%] px-[6%] ">
          <h1 className=" text-lg sm:text-4xl text-white/80 ">Review Form</h1>
          <form onSubmit={handleSubmit} className=" space-y-5 ">
            <div className=" flex flex-col space-y-2 ">
              <label className=" text-md sm:text-xl ">Name</label>
              <input
                type="text"
                className=" bg-white text-black/80 outline-0  rounded-lg sm:rounded-2xl text-md sm:text-lg p-[1.5%] "
                placeholder=" Enter your name "
                name="name"
                value={userData.name}
                onChange={(e) => handleUserEnter(e.target.name, e.target.value)}
              />
            </div>
            <div className=" flex flex-col space-y-2 ">
              <label className=" text-md sm:text-xl ">Email Id</label>
              <input
                type="text"
                className=" bg-white text-black/80 outline-0  rounded-lg sm:rounded-2xl text-md sm:text-lg p-[1.5%] "
                placeholder=" Enter your email "
                name="email"
                value={userData.email}
                onChange={(e) => handleUserEnter(e.target.name, e.target.value)}
              />
            </div>
            <div className=" flex flex-col space-y-2 ">
              <label className=" text-md sm:text-xl ">Message</label>
              <textarea
                type="text"
                className=" bg-white text-black/80 outline-0  rounded-lg sm:rounded-2xl text-md sm:text-lg p-[1.5%] "
                placeholder=" Enter your message "
                name="message"
                value={userData.message}
                onChange={(e) => handleUserEnter(e.target.name, e.target.value)}
              />
            </div>
            <button className=" bg-darkyellow/80 hover:bg-darkyellow w-full text-xl outline-0 cursor-pointer p-[1.5%] rounded-2xl ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
