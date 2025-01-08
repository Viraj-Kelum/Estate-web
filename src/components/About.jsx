import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
    initial={{opacity:0 , x:200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1 , x:0}}
      viewport={{once:true}}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1  under font-light">Our Brand</span></h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">Passionate About Properties, Dedicated to your Vision</p>
      <div className="flex flex-col  md:flex-row items-center md:items-start  md:gap-20">
        <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center justify-center md:items-start mt-10 pr-10 text-gray-600"
        >
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                <div className="">
                    <p className="text-4xl font-medium text-gray-800">10+</p>
                    <p>Years of Excellence</p>
                </div>
                <div className="">
                    <p className="text-4xl font-medium text-gray-800">12+</p>
                    <p>Projects Completes</p>
                </div>
                <div className="">
                    <p className="text-4xl font-medium text-gray-800">20+</p>
                    <p>Mn. Sq Ft.</p>
                </div>
                <div className="">
                    <p className="text-4xl font-medium text-gray-800">25+</p>
                    <p>Ongoing Projects</p>
                </div>
            </div>
            <p className="my-10 max-w-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod veritatis itaque non rem dolor unde impedit quas sint. Eos totam unde, vitae consequatur officiis maiores quidem at quaerat similique Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis deserunt recusandae doloribus enim dolore nulla autem ut sequi omnis ipsa, sit culpa, possimus neque voluptatum aperiam aspernatur reiciendis. Nulla!</p>
            <button className="bg-blue-600 text-white px-8 py-2 rounded">Learn More</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
