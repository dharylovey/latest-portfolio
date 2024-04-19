'use client'

import { techSkill } from "@/lib/data"
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

export const Tech = () => {
    return (
        <span>
            {techSkill.map((item, idx) => {
                if (idx === techSkill.length - 1) {
                    return (
                        <motion.span 
                            key={item.label}
                            className="antialiased text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: false,
                            }}
                            custom={idx}
                        >
                            and {item.label}
                        </motion.span>
                    );
                } else {
                    return (
                        <motion.span 
                            key={item.label}
                            className="antialiased text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: false,
                            }}
                            custom={idx}
                        >
                            {item.label}
                        </motion.span>
                    );
                }
            })}

        </span>
    )
}


