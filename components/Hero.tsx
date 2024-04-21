"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { techStacks } from "@/lib/data";
import { hero } from "@/lib/data";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import profile from "@/public/image/my_photo.png";
import { motion } from "framer-motion";

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
const Hero = () => {
  return (
    <motion.section
      id="home"
      className="top-20  flex flex-wrap justify-around w-full min-h-screen gap-1 mx-auto xl:flex-row-col px-4 md:px-8 lg:px-14"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
    >
      <div
        className=" flex flex-col justify-center w-full md:items-center lg:items-center xl:w-2/5 max-xl:padding-x pt-28 ring-red-600"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <Image
          src={profile}
          width={400}
          height={400}
          alt="dharyl"
          className="object-cover lg:h-[500px] lg:w-[500px]"
          priority={true}
        />
      </div>
      <div
        className=" flex flex-col items-center justify-center w-full xl:w-2/5 max-xl:padding-x pt-28"
        data-aos="fade-left"
      >
        {hero.map((header, idx) => (
          <div key={idx}>
            <h2 className="my-4 text-xl antialiased font-bold md:text-5xl">
              &lt;
              <span className="antialiased text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-2xl md:text-5xl">
                <Typewriter
                  words={[
                    "Full Stack Developer ",
                    "React Developer ",
                    "Next JS Developer ",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              /&gt;
            </h2>
            <h3 className="block my-4 font-sans text-xl antialiased leading-relaxed text-gray-500 dark:text-white">
              {header.greet}
              <span className="antialiased font-bold text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text">
                {header.name}
              </span>
              {header.description}
            </h3>
          </div>
        ))}

        <div className="flex sm:flex items-center justify-center gap-4 my-4">
          <Button
            size={"lg"}
            className="text-xs text-white transition duration-500 ease-in-out border-none md:text-base bg-primary hover:bg-white hover:text-black hover:-traslate-y-3 rounded-xl shadow-xl"
          >
            <Link href="/file/CV.pdf" download={true} target="_blank">
              Download CV
            </Link>
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="text-xs text-black transition duration-500 ease-in-out border-black/[0.1] bg-white hover:bg-primary hover:text-white hover:-traslate-y-3 md:text-base rounded-xl shadow-xl"
          >
            <Link href="/#contact">Contact Info</Link>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 my-4 font-semibold lg:justify-start text-md">
          <h4 className="hidden antialiased md:block lg:block">Tech Stack:</h4>
          {techStacks.map((tech, idx) => (
            <ul key={idx}>
              <motion.li
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={idx}
                className="list-none"
              >
                <Image
                  src={tech.src}
                  width={40}
                  height={40}
                  alt={tech.alt}
                  className="object-contain w-10 h-10 transition duration-700 ease-in-out rounded cursor-pointer hover:-translate-y-3"
                />
              </motion.li>
            </ul>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
