import React from "react";
import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-bold text-lg">DM Solution Hub</p>
          <p>© 2024 My Website. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
          <Link href="/privacy" className="text-white hover:text-gray-400">
            Privacy&Policy
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">Contact Us</p>
            <p>
              324, Sagar Plaza, Plot No-16, Sant Nagar, Rani Bagh, New
              Delhi-110034
            </p>
            <p>Phone: +91 88981-35037</p>
            <p>Email: info@acme.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
