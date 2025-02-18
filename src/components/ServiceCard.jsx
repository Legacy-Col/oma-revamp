import React from 'react'
import { hover, motion } from 'framer-motion'


const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opaccity: 1, y: 0 },
    hover: {
        scale: 1.05,
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3'
    }
};

const ServiceCard = ({image, title, description}) => {
  return (
      <motion.div
          variants={cardVariants}
          whileInView='visible'
          whileHover='hover'
          viewport={{ once: true, amount: 0.2 }}
          transition={{duration: 0.4, ease: 'easeOut'}}
          className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer my-4'>
          <img
            src={image}
            alt={title}
              className='w-full h-60 object-fit transform transition-transform duration-500 group-hover:scale-110' />
          <div className='absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>    
          <div className='text-white p-4'>
              <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
              <p className='text-slate-100 mb-2'>{description}</p>
              <button className='bg-sky-600 text-black px-4 py-2 rounded hover:bg-sky-700 transition-colors duration-300'>Learn More</button>
          </div>
          </div>
    </motion.div>
  )
}

export default ServiceCard