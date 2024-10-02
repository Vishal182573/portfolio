import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://portfolio-backend-dd6p.onrender.com/api/contact", { name, email, message });
      if (response.status === 201) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px #6366F1" },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 "
      id="Contact-Me"
    >
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 bg-gray-800 p-6 rounded-xl shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-md space-y-4">
            <motion.div variants={inputVariants} whileFocus="focus">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div variants={inputVariants} whileFocus="focus">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Email Address"
              />
            </motion.div>
            <motion.div variants={inputVariants} whileFocus="focus">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </motion.div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Send className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </motion.form>
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`text-center p-4 rounded-md flex items-center justify-center ${
                submitStatus === 'success' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'
              }`}
            >
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle className="mr-2" />
                  Message sent successfully!
                </>
              ) : (
                <>
                  <XCircle className="mr-2" />
                  Failed to send message. Please try again.
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ContactMe;