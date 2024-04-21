'use client'

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center text-center dark:bg-slate-900 px-4 md:px-8"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h3 className="text-5xl font-bold">My Skills</h3>
        </div>
        <ul className="flex max-w-[50rem] gap-4 py-16 justify-center flex-wrap text-lg text-gray-500 dark:text-white ">
          {skills.map((skill, idx) => (
            <motion.li
              key={idx}
              className="text-center bg-white border-black/[0.1] rounded-lg px-5 py-1 shadow-lg cursor-pointer antialiased dark:bg-slate-950"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={idx}
            >
              <span className="flex justify-center items-center ">
                {skill.icon}
                <span style={{ marginLeft: "8px" }}>{skill.name}</span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
