import React from 'react'
import { motion } from 'framer-motion'

const ReviewSlide = ({name, review, image}) => {
  return (
      <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className='bg-white shadow-lg rrounded-lg p-6 flex flex-col items-center text-center'
      >
        <img 
            src={image}
            alt={name}
            className='w-24 h-24 rounded-full object-cover mb-4'
        />
          <h3 className=''>{name}</h3>
          <p className=''>{review}</p>
    </motion.div>
  )
}

export default ReviewSlide