import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ADMIN_EMAIL = "admin@example.com";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "CONTACT_TEMPLATE_ID",
        { ...data, to_email: ADMIN_EMAIL },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("Contact Email Sent:", result.text);
        },
        (error) => {
          console.error("Error Sending Contact Email:", error);
        }
      );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full p-2 border rounded"
          placeholder="Your Name"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full p-2 border rounded"
          placeholder="Your Email"
        />
        <textarea
          {...register("message", { required: true })}
          className="w-full p-2 border rounded"
          placeholder="Your Message"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
