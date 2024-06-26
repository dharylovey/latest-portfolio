"use client";
import Image from "next/image";
import { aboutMe } from "@/lib/data";
import Link from "next/link";
import { Tech } from "@/components/Tech";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 px-4 md:px-8"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
    >
      <div className="text-center mb-10">
        <p className="my-4 text-xl text-gray-700 dark:text-gray-400">
          Know me more
        </p>
        <h3 className="text-5xl font-bold">About Me</h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="lg:flex">
          <div className="py-10 flex justify-center items-center mx-20 lg:w-3/4 lg:basis-1/4">
            <Image
              src="/image/about-image.png"
              alt="about image"
              className="justify-center object-cover aspect-auto rounded-xl shadow-2xl lg:w-[1020px] lg:h-[750px]"
              priority={true}
              width={1020}
              height={750}
            />
          </div>

          <div className="flex-col gap-4 lg:basis-3/4">
            <ul className="flex flex-col gap-4 py-10">
              {aboutMe.map((skill) => (
                <li
                  key={skill.header}
                  className="flex flex-col border rounded-md justify-center items-center py-4 px-2 md:mx-[100px] dark:bg-slate-900 shadow-md dark:shadow-slate-400"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  data-aos-easing="ease-in-out"
                  data-aos-offset="200"
                >
                  <p className="text-4xl">{skill.src}</p>

                  <h3 className="py-2 text-xl font-semibold text-gray-800 dark:text-white">
                    {skill.header}
                  </h3>
                  {Array.isArray(skill.desc) ? (
                    <>
                      {skill.desc.map((item, index) => (
                        <div key={index}>
                          <p className="py-1 text-base text-center text-gray-500 md:text-lg dark:text-white">
                            {item.course}
                          </p>
                          <Link
                            href={item.link}
                            className="text-xs text-center text-indigo-500 hover:text-red-500 hover:underline "
                            target="_blank"
                          >
                            <p>{item.school}</p>
                          </Link>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p className="py-2 text-base text-center text-gray-600 md:text-lg dark:text-gray-300">
                      {skill.desc}
                    </p>
                  )}
                  <p className="text-xs text-gray-600 md:text-xl dark:text-gray-300">
                    {skill.footer}
                  </p>
                </li>
              ))}
            </ul>

            <div className="text-start md:text-start py-4">
              <p className="mx-auto text-gray-500 md:text-xl dark:text-white">
                {`
                As a junior full stack developer, I'm enthusiastic about delivering into the dynamic realm of software development. Equipped with a solid grasp of both front-end and back-end technologies, I'm keen to make meaningful contributions to innovative projects and collaborate closely with seasoned colleagues. My dedication to coding fuels my quest for continuous learning and adaptation to emerging technologies, ensuring that I remain abreast of the latest industry standards. I eagerly anticipate applying my skills in `}
                <Tech />

                {`to craft intuitive user interfaces and robust backend systems. Embarking on this journey, my commitment lies in delivering top-notch code while embracing challenges as invaluable opportunities for personal and professional growth.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
