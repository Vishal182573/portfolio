import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function Footer() {
  return (
    <div className='border-t-2 border-white px-8 mb-6 py-4 lg:px-12 flex flex-col items-center'>
      <div className="text-center font-bold lg:text-2xl font-[Poppins] mb-6">
        Thanks for visiting! Let's create something awesome
      </div>
      <div className="footer-icons flex space-x-6 text-4xl">
        <a href="https://github.com/Vishal182573" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/vishal-sharma-368513258/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://leetcode.com/u/vishal3838sharma/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="cursor-pointer" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/vishal3838sharma/" target="_blank" rel="noopener noreferrer">
          <SiGeeksforgeeks className="cursor-pointer" />
        </a>
      </div>
      <div className='flex justify-between items-center w-full text-xs lg:text-lg'>
      <div className="mt-5 text-white ">
        <p>Contact: Vishal sharma</p>
        <p>Email: sharmavs9205@gmail.com</p>
        <p>Phone: +91 7303876390</p>
      </div>
      <div className="mt-3">
        <p>© 2024 Vishal-Sharma_Portfolio</p>
      </div>
      </div>
    </div>
  );
}
