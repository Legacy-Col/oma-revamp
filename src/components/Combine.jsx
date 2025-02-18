// src/components/BookingAndContact.js
import React from "react";
import Bookings from "./Bookings";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Combine = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center mb-12 text-gray-600">
          Book an appointment or send us a message.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Bookings />
          <Contact />
        </motion.div>
      </div>
    </section>
  );
};

export default Combine;
