import React, { useState } from 'react';
import axios from 'axios';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="border-t-[1px]  border-[#c4c4f5] mx-8 px-8 mb-6 py-4 lg:px-12" id='Contact-Me'>
    <div className="Contact-me-head py-2 flex justify-start items-center text-2xl font-bold font-[Poppins] mt-4 mb-14 border-b-2 border-[#c4c4f8]">
        <span className="bg-white border-2 w-4 h-4 rounded-full mx-2"></span>Contact Me</div>
    <div className="max-w-sm mx-auto p-6 bg-[#9b59b6] rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder='XYZ'
            className="w-full p-2 border-2 rounded-lg border-black text-sm font-bold text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2 " htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder='XYZ@gmail.com'
            className="w-full p-2 border-2 rounded-lg border-black text-sm font-bold text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            placeholder='lorem ipsum'
            rows="4"
            className="w-full p-2 border-2 rounded-lg border-black text-sm font-bold text-black max-h-[8rem] min-h-[3rem]"
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default ContactMe;
