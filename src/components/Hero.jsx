import { Box, Button } from '@mui/material';
import React from 'react'
import CourtImg from '../assets/Courthouse.jpg'


const Hero = () => {
  return (
    <div
      className="h-screen relative bg-cover bg-center "
      style={{ backgroundImage: `url (${CourtImg})` }}    >
      <section className="absolute inset-0 bg-black bg-opacity-65 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold my-24">
            Let us Protect your Legacy
          </h1>
          <p className="text-lg md:text-4xl mb-6">
            Your Future is safe and protected with our Experience Advocates
          </p>
          <Box
            sx={{
              my: 10,
              position: 'static'
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                color: "black",
                backgroundColor: "white",
                fontSize: 20,
                scale: 1,
                border: 0,
                ":hover": {
                  backgroundColor: "grey",
                  color: "white",
                  boxShadow: 8,
                  transition: "ease-out",
                },
              }}
            >
              Send Us a Mail
            </Button>
          </Box>
        </div>
      </section>
    </div>
  );
}

export default Hero