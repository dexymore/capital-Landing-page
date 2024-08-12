import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (value.trim() === "") {
      error = "This field is required.";
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setStatus('an error occurred,send your message directly to Info@Capitalint.ae');
  
      // fetch(JSON.stringify(import.meta.env.VITE_REACT_APP_GOOGLE_SCRIPT), {  // Use the environment variable here
      //   method: 'POST',
      //   body: formDataToSend,
      // })
      //   .then((response) => response.text())
      //   .then((data) => {
      //     setStatus(data);
      //     setFormData({
      //       name: "",
      //       email: "",
      //       subject: "",
      //       message: "",
      //     });
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //     setStatus('An error occurred.');
      //   });
    }
  
  

  return (
    <section className="contact">
      <div className="w-full bg-[#101015]">
        <h1 className="text-white text-3xl md:text-5xl font-bold pb-8 md:pb-12 text-center pt-12">
          Контакты
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 pt-12 pb-12 bg-[#060606]">
        <div className="flex flex-col items-center p-8 md:w-[20%]">
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center hover:text-white mt-4 mb-4 transition-colors hover:bg-transparent">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="mt-2 mb-3"
            />
          </div>
          <p className="text-white text-sm md:text-base text-center leading-tight">
            Info@Capitalint.ae
          </p>
        </div>

        <div className="flex flex-col items-center p-8 md:w-[20%]">
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center hover:text-white mt-4 mb-4 transition-colors hover:bg-transparent">
            <FontAwesomeIcon icon={faPhone} size="2x" className="mt-2 mb-3" />
          </div>
          <p className="text-white text-sm md:text-base text-center leading-tight">
            +971 4 227 9033
          </p>
        </div>

        <div className="flex flex-col items-center p-8 md:w-[20%]">
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center hover:text-white mt-4 mb-4 transition-colors hover:bg-transparent">
            <FontAwesomeIcon icon={faHouse} size="2x" className="mt-2 mb-3" />
          </div>
          <p className="text-white text-sm md:text-base text-center leading-tight">
            1 Pacific Ave, Suite 100
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#060606]">
        <div className="bg-transparent text-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold mb-2">
                Your Name (required)
              </label>
              <input
                type="text"
                name="name"
                className={`w-full p-3 text-black border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Your Email (required)
              </label>
              <input
                type="email"
                name="email"
                className={`w-full p-3 text-black border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full p-3 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                className="w-full p-3 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D19330] text-black py-3 rounded hover:text-white transition-colors duration-300"
            >
              Send
            </button>
          </form>
          {status && <p className="text-white mt-4">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
