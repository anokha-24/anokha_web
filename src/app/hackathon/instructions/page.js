// pages/index.js
"use client";
import React from 'react';
import { SimpleCard } from '../_components/InstructCard';
import Resources from '../_components/Resources';


const Home = () => {
  return (
    <div>
<div className="w-full h-screen bg-[rgb(10,17,58)] relative flex flex-col justify-center items-center">
    <div className="font-poppins text-white mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">INSTRUCTIONS</h1>
        <p className="text-lg mb-8">Follow these steps to get started</p>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[50%] sm:w-[80%] p-8 rounded-[50%] h-[60%] left-[25%] top-[120px] absolute blur-3xl levitate"></div>

                <SimpleCard  />


       
    </div>

    </div>
    <Resources />
    </div>
    
    
  );
};

export default Home;
