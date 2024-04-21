'use client'
import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.section
      id="project"
      className="min-h-screen flex flex-col items-center justify-center text-center gap-16 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="text-center">
        <h3 className="text-5xl font-bold">Project</h3>
      </div>
      <div className="w-full  md:w-full lg:w-1/2 block my-4 font-sans text-xl antialiased leading-relaxed text-gray-500 dark:text-white">
        {`Exciting things are brewing! Keep an eye out for our upcoming projects, where we'll be showcasing innovation and creativity. Stay tuned for updates, and get ready to be inspired. The countdown begins now!`}
      </div>
    </motion.section>
  );
};

export default Project;
