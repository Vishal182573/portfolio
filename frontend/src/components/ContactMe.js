import {  useState } from "react";
import axios from "axios"

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://portfolio-backend-dd6p.onrender.com/api/contact", { name, email, message });
      if (response.status === 201) {
        alert('Form submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-t-[1px] border-[#c4c4f5] mx-6 px-6 mb-6 py-4 lg:px-6" id="Contact-Me">
      <div className="project-container h-10 flex justify-start items-center text-2xl font-bold font-[Poppins] mt-4 border-b-2 border-[#c4c4f8]">
        <span className="bg-white border-2 w-4 h-4 rounded-full mx-2"></span>
        Contact Me
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 my-6 bg-gray-800 rounded-lg shadow-md flex flex-col justify-center"
      >
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-gray-700  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-gray-700  focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write message"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;