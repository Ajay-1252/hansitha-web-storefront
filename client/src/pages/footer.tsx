import React from 'react';
import logo from '../assets/logo.png'; // Make sure this path is correct
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import GoogleTranslate from '../components/GoogleTranslate';
const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-pink-100 text-gray-800 px-4 pt-6 pb-4 text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
            {/* World Of Hansitha */}
            <div>
              <h4 className="font-semibold mb-2 text-base">World Of Hansitha Creations</h4>
              <ul className="space-y-1">
                <li>About us</li>
                <li>Store</li>
                <li>Handlooms</li>
                <li>Manufacturing</li>
                <li>Fabric Care</li>
                <li>Special Collections</li>
              </ul>
            </div>

            {/* Fabrics */}
            <div>
              <h4 className="font-semibold mb-2 text-base">Fabrics</h4>
              <ul className="space-y-1">
                <li>Cotton</li>
                <li>Silk</li>
                <li>Crape</li>
                <li>Kota</li>
                <li>Georgette</li>
                <li>Banarasi</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-2 text-base">Support</h4>
              <ul className="space-y-1">
                <li>Store Locator</li>
                <li>Contact us</li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold mb-2 text-base">Customer Service</h4>
              <ul className="space-y-1">
                <li>FAQs, Delivery & Returns</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            {/* Logo + Social */}
            <div className="flex flex-col items-center lg:items-end mt-2 lg:mt-0 text-center lg:text-right">
              <img
                src={logo}
                alt="Hansitha Creations Logo"
                className="h-48 mb-2"
              />
              <div className="flex gap-2 justify-center lg:justify-end text-pink-600 text-xl">
                <FaYoutube className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
              </div>
            </div>
          </div>
          

          {/* Newsletter Form */}
          <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-start gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
            />
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md text-sm hover:bg-pink-600">
              Subscribe
            </button>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-pink-600 text-white text-center text-sm py-2">
        ©2025 Hansitha Creations. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
