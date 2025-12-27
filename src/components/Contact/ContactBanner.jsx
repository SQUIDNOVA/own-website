import React, { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import Swal from "sweetalert2";

export default function ContactBanner() {

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
    setContactFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section
      className="w-full min-h-screen relative flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(2,6,23,0.45), rgba(2,6,23,0.7)), url('https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      aria-label="Contact hero"
    >
      <div className="max-w-6xl w-full px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text / Headline */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Let's build something{" "}
                <span className="bg-linear-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  remarkable
                </span>
                .
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl">
                Have a question, idea, or project? Tell us about it — we’ll get
                back quickly with thoughtful collaboration. Start the
                conversation and turn ideas into measurable results.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-linear-to-r from-emerald-500 to-cyan-400 text-slate-900 font-semibold px-5 py-3 rounded-lg shadow-lg hover:scale-[1.03] transition-transform"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                  Send a Message
                </a>

                <div className="text-sm text-white/80">
                  Or email us at{" "}
                  <a
                    href="mailto:hello@example.com"
                    className="underline underline-offset-2 text-white"
                  >
                    squidnova04@gmail.com                  </a>
                  <div className="mt-2 text-xs text-white/70">
                    Typical response within 24 hours
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3 flex-wrap">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 text-sm text-white/90 px-3 py-2 bg-white/5 rounded-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.2 4.03a1 1 0 01-.27.95L8.91 11.09a16.01 16.01 0 006 6l1.43-1.43a1 1 0 01.95-.27l4.03 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V6a1 1 0 011-1z"></path>
                  </svg>
                  +91 8903500842
                </a>

                <a
                  href="https://www.linkedin.com/in/squid-nova/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/90 px-3 py-2 bg-white/5 rounded-md"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7 0h4.8v2.2h.1c.7-1.3 2.4-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24H17v-7.3c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H7V8z"></path>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Quick contact card (compact, responsive) */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="bg-linear-to-tr from-white/6 to-white/3 border border-white/8 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Quick contact</h3>
                  <p className="text-xs text-white/70">Send a short message — no account needed</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m-4 4l4 4"></path>
                  </svg>
                </div>
              </div>

              <form className="mt-4 grid grid-cols-1 gap-3" onSubmit={postContactForm}>
                <input
                  type="text"
                  value={contactFormData.name}
                  name="name" 
                  onChange={handleInputChange}
                  aria-label="Your name"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/6 rounded-md px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  aria-label="Your email"
                  type="email"
                  value={contactFormData.email}
                  name="email" 
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/6 rounded-md px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <textarea
                  aria-label="Message"
                  value={contactFormData.message}
                  name="message" 
                  onChange={handleInputChange}
                  placeholder="Short message..."
                  rows="3"
                  className="w-full bg-white/5 border border-white/6 rounded-md px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                />
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center w-full bg-linear-to-r from-emerald-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-md shadow hover:scale-[1.02] transition-transform"
                >
                  Send
                </button>
              </form>

              <div className="mt-4 text-xs text-white/60">
                Prefer email?{" "}
                <a href="mailto:hello@example.com" className="underline">
                  hello@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full h-20">
          <path
            fill="rgba(2,6,23,0.85)"
            d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,112C672,117,768,107,864,96C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
