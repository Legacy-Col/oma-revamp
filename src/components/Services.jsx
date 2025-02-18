import React from 'react'
import ServiceCard from './ServiceCard'


const serviceData = [
  {
    image: "",
    title: "Family Law",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero error voluptatem, impedit neque quibusdam nesciunt odio. Sint nulla debitis excepturi tempore mollitia, dolores eos doloribus harum quae assumenda a?",
  },
  {
    image: "",
    title: "Coporate Law",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero error voluptatem, impedit neque quibusdam nesciunt odio. Sint nulla debitis excepturi tempore mollitia, dolores eos doloribus harum quae assumenda a?",
  },
  {
    image: "",
    title: "Criminal Law",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero error voluptatem, impedit neque quibusdam nesciunt odio. Sint nulla debitis excepturi tempore mollitia, dolores eos doloribus harum quae assumenda a?",
  },
  {
    image: "",
    title: "Legal Representation",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero error voluptatem, impedit neque quibusdam nesciunt odio. Sint nulla debitis excepturi tempore mollitia, dolores eos doloribus harum quae assumenda a?",
  },
  {
    image: "",
    title: "Dispute Resolution",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero error voluptatem, impedit neque quibusdam nesciunt odio. Sint nulla debitis excepturi tempore mollitia, dolores eos doloribus harum quae assumenda a?",
  },
  {
    image: "",
    title: "Fair Representation",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero error voluptatem, impedit neque quibusdam nesciunt odio. Sint nulla debitis excepturi tempore mollitia, dolores eos doloribus harum quae assumenda a?",
  },
]; 



const Services = () => {
  return (
    <section className='py-16 bg-neutral-600'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
            <h2 className='text-4xl mb-4 text-gray-100 font-bold'>Services</h2>
              <p className='text-gray-100 mb-12 text-2xl'>We Offer a large Range of Legal Services</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {serviceData.map((service, index) => ( 
                      <div className='relative group overflow-hidden rounded-lg shadow-lg'>
                        <ServiceCard
                              key={index}
                              image={service.image}
                              description={service.description}
                        />
                      </div>
                  ))}
              </div>
      </div>
    </section>
  );
}

export default Services