// src/components/Footer.js
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Lawyers</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +123 456 7890</li>
              <li>Email: contact@example.com</li>
              <li>Location: 123 Legal St, Law City</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Oma's Legal. All Rights Reserved.
          </p>
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
