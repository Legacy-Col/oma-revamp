
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// const lawyers = [
//   { id: 1, name: "John Mario" },
//   { id: 2, name: "Nwafor Mitch" },
//   { id: 3, name: "Maureen James" },
//   { id: 4, name: "Chukwu Victor" },
// ];

// // Form Animation Variants

// const formVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const BookingForm = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Booking Data:", data);
//     setIsConfirmed(true);

//       // Reset confirmation after animation
      
//     setTimeout(() => setIsConfirmed(false), 3000);
//   };

//   return (
//     <motion.section
//       initial="hidden"
//       animate="visible"
//       variants={formVariants}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="py-16 bg-gray-100"
//     >
//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           Book an Appointment
//         </h2>

//         {isConfirmed ? (
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="text-center text-green-600 text-2xl font-semibold"
//           >
//             Appointment Confirmed! 🎉
//           </motion.div>
//         ) : (
//                       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                          
//                           {/* Lawyer Selection */}
                          
//             <div>
//               <label className="block mb-1 font-semibold">Select Lawyer</label>
//               <select
//                 {...register("lawyer", { required: true })}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Choose a Lawyer</option>
//                 {lawyers.map((lawyer) => (
//                   <option key={lawyer.id} value={lawyer.name}>
//                     {lawyer.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.lawyer && (
//                 <span className="text-red-500 text-sm">
//                   Please select a lawyer.
//                 </span>
//               )}
//             </div>

//                           {/* Date Selection */}
                          
//             <div>
//               <label className="block mb-1 font-semibold">Select Date</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 className="w-full p-2 border rounded"
//                 placeholderText="Select Date"
//                 minDate={new Date()}
//                 required
//               />
//             </div>

//                           {/* User Details */}
                          
//             <div>
//               <label className="block mb-1 font-semibold">Name</label>
//               <input
//                 type="text"
//                 {...register("name", { required: true })}
//                 className="w-full p-2 border rounded"
//                 placeholder="Your Name"
//               />
//               {errors.name && (
//                 <span className="text-red-500 text-sm">Name is required.</span>
//               )}
//             </div>

//             <div>
//               <label className="block mb-1 font-semibold">Email</label>
//               <input
//                 type="email"
//                 {...register("email", { required: true })}
//                 className="w-full p-2 border rounded"
//                 placeholder="Your Email"
//               />
//               {errors.email && (
//                 <span className="text-red-500 text-sm">Email is required.</span>
//               )}
//             </div>

//             <div>
//               <label className="block mb-1 font-semibold">Phone</label>
//               <input
//                 type="tel"
//                 {...register("phone", { required: true })}
//                 className="w-full p-2 border rounded"
//                 placeholder="Your Phone Number"
//               />
//               {errors.phone && (
//                 <span className="text-red-500 text-sm">
//                   Phone number is required.
//                 </span>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
//             >
//               Book Appointment
//             </button>
//           </form>
//         )}
//       </div>
//     </motion.section>
//   );
// };

// export default BookingForm;




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";

// Dummy Data for Lawyers
const lawyers = [
  { id: 1, name: "John Mario", email: "john@example.com" },
  { id: 2, name: "Nwafor Mitch", email: "nwafor@example.com" },
  { id: 3, name: "Maureen James", email: "maureen@example.com" },
  { id: 4, name: "Chukwu Victor", email: "victor@example.com" },
];

// Company Email
const COMPANY_EMAIL = "company@example.com";

// Form Animation Variants
const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Bookings = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle Booking Form Submission
  const onBookingSubmit = (data) => {
    const selectedLawyer = lawyers.find(
      (lawyer) => lawyer.name === data.lawyer
    );

    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      lawyer: data.lawyer,
      date: selectedDate.toDateString(),
    };

    // Send Email to Company
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "COMPANY_TEMPLATE_ID",
        { ...templateParams, to_email: COMPANY_EMAIL },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("Email to Company Sent:", result.text);
        },
        (error) => {
          console.error("Error Sending to Company:", error);
        }
      );

    // Send Email to Selected Lawyer
    emailjs
      .send(
        "service_17hnvom",
        "template_vjmyscp",
        { ...templateParams, to_email: selectedLawyer.email },
        "q9PHXYEh8Bsfv3chi"
      )
      .then(
        (result) => {
          console.log("Email to Lawyer Sent:", result.text);
        },
        (error) => {
          console.error("Error Sending to Lawyer:", error);
        }
      );

    setIsConfirmed(true);

    // Reset confirmation after animation
    setTimeout(() => setIsConfirmed(false), 3000);
  };

  // Handle Contact Form Submission
  const onContactSubmit = (data) => {
    emailjs
      .send("service_4m7bfe7", "template_1y15lsn", data, "q9PHXYEh8Bsfv3chi")
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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={formVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-16 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
                  
                  {/* Booking Form */}
                  
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">
              Book an Appointment
            </h2>
            {isConfirmed ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center text-green-600 text-2xl font-semibold"
              >
                Appointment Confirmed! 🎉
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onBookingSubmit)}
                className="space-y-4"
              >
                <div>
                  <label className="block mb-1 font-semibold">
                    Select Lawyer
                  </label>
                  <select
                    {...register("lawyer", { required: true })}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Choose a Lawyer</option>
                    {lawyers.map((lawyer) => (
                      <option key={lawyer.id} value={lawyer.name}>
                        {lawyer.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-semibold">
                    Select Date
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="w-full p-2 border rounded"
                    placeholderText="Select Date"
                    minDate={new Date()}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold">Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full p-2 border rounded"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full p-2 border rounded"
                    placeholder="Your Email"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
              </form>
            )}
          </div>
          </div>
        </div>
    </motion.section>
  );
};

export default Bookings;



//service_4m7bfe7













