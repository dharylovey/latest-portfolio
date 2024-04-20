import React from "react";
import { GrAchievement } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";

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

export const skills = [
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'React',
    'TypeScript',
    'Express',
    'MongoDB',
    'NextJS'
]

