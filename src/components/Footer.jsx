import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div
      className="pt-10 px-4 ms:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="mt-4 text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            quidem non vel quasi animi vero sit sapiente nam labore nihil
            aliquid obcaecati eum totam, reprehenderit, aspernatur eius enim
            harum aperiam.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#Header" className="hover:text-white">
              Privacy Policies
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our NewsLetter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news , articles , and resources , sent to your inbox
            weekly
          </p>
          <div className="flex gap-2">
            <input type="email" placeholder="your email"  className="p-2 focus:outline-none w-full md:w-auto rounded bg-gray-800 text-gray-400 border border-gray-700"/>
            <button className="py-2 px-4 rounded bg-blue-500">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 @ VirajKelum. All Right Reserved
      </div>
    </div>
  );
};
