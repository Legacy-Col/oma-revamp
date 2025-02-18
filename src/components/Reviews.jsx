import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import ReviewSlide from "./ReviewSlide";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Updated Reviews Data
const reviews = [
  {
    name: "John Mario",
    review: "Amazing service! Highly recommend.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nwafor Mitch",
    review: "Professional and reliable. Great experience!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Maureen James",
    review: "Exceptional legal advice and support.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Chukwu Victor",
    review: "Highly skilled team. Very satisfied!",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "John Mario",
    review: "Amazing service! Highly recommend.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nwafor Mitch",
    review: "Professional and reliable. Great experience!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Maureen James",
    review: "Exceptional legal advice and support.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Chukwu Victor",
    review: "Highly skilled team. Very satisfied!",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

// Animation Variants
const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const ReviewSlider = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl mb-4 font-bold">Client Reviews</h2>
        <p className="text-gray-800 mb-12 text-xl">
          What some of our clients have to say
        </p>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ReviewSlide
                  name={review.name}
                  review={review.review}
                  image={review.image}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSlider;
