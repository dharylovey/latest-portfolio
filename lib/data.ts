import React from "react";
import { GrAchievement } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

export const navLinks = [
    { href: '/#about', label: 'About' },
    // { href: '/#experience', label: 'Experience' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#project', label: 'Project' },
    { href: '/#contact', label: 'Contact' },
]

export const hero = [
    {
        title: "I'm a",
        greet: `Hello, I'm `,
        name: 'DharyL',
        description: `, As a junior full stack developer, I'm passionate about crafting seamless web applications, proficient in both front-end and back-end technologies. Eager to collaborate on innovative projects and contribute to the dynamic world of web development.`
    }
]

export const techStacks = [
    { src: '/image/html.svg', alt: 'html' },
    { src: '/image/css.svg', alt: 'css' },
    { src: '/image/javascript.svg', alt: 'javascript' },
    { src: '/image/tailwindcss.svg', alt: 'tailwindcss' },
    { src: '/image/react.svg', alt: 'react' },
    { src: '/image/typescript.svg', alt: 'typescript' },
    // { src: '/image/next-js.svg', alt: 'next-js' },
    { src: '/image/mongodb.svg', alt: 'mongodb' },
]

export const aboutMe = [
    {
        src: React.createElement(GrAchievement),
        header: 'Experience',
        desc: '8 months'
        ,
        footer: 'Full Stack Web Developer'
    },
    {
        src: React.createElement(IoSchoolOutline),
        header: 'Education',
        desc: [
            {
                course:
                    'Bachelor of Science in Computer Science',
                school: 'Caraga State University',
                link: 'https://www.carsu.edu.ph/'
            },
            {
                course:
                    'Full Stack Web Developer',
                school: 'Kodego Bootcamp ( 6 months )',
                link: 'https://kodego.ph/'
            },

        ],
    },
]

export const techSkill = [
    { label: 'HTML, ' },
    { label: 'CSS, ' },
    { label: 'Tailwind, ' },
    { label: 'JavaScript, ' },
    { label: 'React JS, ' },
    { label: 'TypeScript, ' },
    { label: 'Express JS, ' },
    { label: 'MongoDB, ' },
    { label: 'Next JS ' },
]

// export const skills = [
//     'HTML',
//     'CSS',
//     'Tailwind',
//     'JavaScript',
//     'React',
//     'TypeScript',
//     'Express',
//     'MongoDB',
//     'MySQL',
//     'NodeJS',
//     'NextJS',
//     'Git',
//     'Shadcn ui',
// ]

export const skills = [
    {name: 'HTML', icon: React.createElement(AiOutlineHtml5)},
    {name: 'CSS', icon: React.createElement(DiCss3)},
    {name: 'Tailwind', icon: React.createElement(BiLogoTailwindCss)},
    {name: 'JavaScript', icon: React.createElement(RiJavascriptLine)},
    {name: 'TypeScript', icon: React.createElement(TbBrandTypescript)},
    {name: 'Express', icon: React.createElement(SiExpress)},
    {name: 'MongoDB', icon: React.createElement(SiMongodb)},
    {name: 'MySQL', icon: React.createElement(SiMysql)},
    {name: 'NodeJS', icon: React.createElement(FaNodeJs)},
    {name: 'NextJS', icon: React.createElement(TbBrandNextjs)},
    {name: 'React', icon: React.createElement(FaReact)},
    {name: 'Git', icon: React.createElement(FaGithub)},
    {name: 'Shadcn UI', icon: React.createElement(SiShadcnui)},
]

