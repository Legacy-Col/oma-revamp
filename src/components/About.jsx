import React from 'react'
import lawImg from '../assets/Law3.jpg'

const About = () => {
  return (
    <section className="h-full max-w-[1200px] mx-auto py-10 px-4">
        <div className="bg-neutral-700 rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className='w-full md:w-1/2 relative'>          
                <h3 className="my-4 left-4 text-4xl md:text-5xl text-white absolote drop-shadow-lg text-center">About</h3>
                    <img
                        src={lawImg}
                        alt=""
                        className="w-60 object-cover m-auto py-4 rounded-t-lg md:rounded-l md:rounded-tr-none "
                    />
                </div>
            <div className="p-6 text-white text-center w-full md:w-1/2">
                <p className="text-2xl leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    quos repellat odio deleniti numquam dolorem asperiores vero
                    voluptatibus minus earum, id labore aut accusamus voluptatum
                    veniam et molestiae aspernatur excepturi! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Iste recusandae sint aperiam
                    quibusdam molestias blanditiis ut corporis nulla quisquam
                    doloribus deleniti consectetur eveniet modi possimus quo,
                    commodi id reiciendis cumque.
                </p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default About