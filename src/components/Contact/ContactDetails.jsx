import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import Swal from "sweetalert2";

export default function ContactDetails() {
  const contactDetailsList = [
    {
      title: "Email",
      links: "squidnova04@gmail.com",
    },
    {
      title: "Number",
      links: "+918903500842",
    },
    {
      title: "Address",
      links: "Coimbatore-641021",
    },
  ];

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDivClick = (detail) => {
    if (detail.title === "Email") {
      window.location.href = "mailto:squidnova04@gmail.com";
    } else if (detail.title === "Number") {
      window.location.href = "tel:";
    } else if (detail.title === "Address") {
      window.open(
        "https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu,+India/",
        "_blank"
      );
    }
  };

  const postContactForm = async (e) => {
    e.preventDefault();
    if (!contactFormData.name || !contactFormData.email || !contactFormData.message) {
      Swal.fire("Error", "Please fill in all fields before submitting the form.", "error");
      return;
    }
    try {
      await axiosInstance.post("/contact", contactFormData);
      Swal.fire("Success", "Form submitted successfully!", "success");
    } catch (error) {
      console.error("Error on posting data:", error);
      Swal.fire("Error", "Submission failed!", "error");
    }
  };

  return (
    <section className=" bg-darkblue/95 text-white/80 flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 lg:p-8">
      <div className=" flex flex-col lg:flex-row w-full gap-5 lg:gap-5  ">
        
        <div className=" w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-8 ">
          <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold ">
            GetIn-Touch
          </h1>
          {contactDetailsList.map((detail, index) => (
            <div
              key={index}
              className=" flex gap-2 justify-between items-center bg-white/5 border border-white/20 rounded-2xl
                p-4 sm:p-6 lg:p-[2%]
                "
              onClick={() => handleDivClick(detail)}
            >
              <div className=" space-y-2 ">
                <h1 className=" font-bold text-lg sm:text-2xl ">
                  {detail.title}
                </h1>
                <p className=" text-base sm:text-lg wrap-break-word ">
                  {detail.links}
                </p>
              </div>
              <img 
                src="src/assets/images/Contact/right-arrow.svg" 
                alt="arrow mark log"
                className=" h-10 w-10 rotate-320 text-white " />
            </div>
          ))}
        </div>
        <form
          className=" w-full lg:w-1/2 flex flex-col text-black bg-white/10 border border-white/20 rounded-2xl p-[2%]
            gap-3 sm:gap-4 lg:gap-5            "
            onSubmit={postContactForm}
        >
          <label
            htmlFor="name"
            className=" font-bold text-base sm:text-lg text-white/80"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={contactFormData.name}
            placeholder="Name"
            className=" bg-white/60 placeholder:text-black/80  outline-0
                p-3 sm:p-[1.5%] px-4 sm:px-[2%] rounded-2xl
              "
            onChange={handleInputChange}
          />
          <label
            htmlFor="email"
            className=" font-bold text-base sm:text-lg text-white/80"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={contactFormData.email}
            placeholder="Email"
            className=" bg-white/60 placeholder:text-black/80 outline-0
              p-3 sm:p-[1.5%] px-4 sm:px-[2%] rounded-2xl
            "
            onChange={handleInputChange}
          />
          <label
            htmlFor="message"
            className=" font-bold text-base sm:text-lg text-white/80"
          >
            Message
          </label>
          <textarea
            placeholder="Message"
            name="message"
            value={contactFormData.message}
            className=" bg-white/60 placeholder:text-black/80 outline-0
              p-3 sm:p-[1.5%] px-4 sm:px-[2%] rounded-2xl h-32 sm:h-36 lg:h-40
            "
            onChange={handleInputChange}
          ></textarea>
          <button
            type="submit"
            className=" bg-darkyellow/80 text-white font-semibold
              p-3 sm:p-[2%] rounded-2xl hover:bg-darkyellow hover:white transition-colors
            "
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
