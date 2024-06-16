import React from 'react';
import { FaSass } from 'react-icons/fa';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiBootstrap, SiCplusplus, SiCsharp, SiCss3, SiDjango, SiFirebase, SiFlask, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiShopify, SiTypescript } from 'react-icons/si';

const Skills = () => {
    const skillsList = [
        { id: 9, skillName: "HTML", icon: <SiHtml5 />, tooltip: "HyperText Markup Language" },
        { id: 10, skillName: "CSS", icon: <SiCss3 />, tooltip: "Cascading Style Sheets" },
        { id: 11, skillName: "JavaScript", icon: <SiJavascript />, tooltip: "JavaScript" },
        { id: 7, skillName: "SCSS", icon: <FaSass />, tooltip: "Sass" },
        { id: 12, skillName: "Bootstrap", icon: <SiBootstrap />, tooltip: "Bootstrap" },
        { id: 1, skillName: "React js", icon: <RiReactjsFill />, tooltip: "React.js" },
        { id: 2, skillName: "Next js", icon: <SiNextdotjs />, tooltip: "Next.js" },
        { id: 6, skillName: "TypeScript", icon: <SiTypescript />, tooltip: "TypeScript" },
        { id: 3, skillName: "Tailwind CSS", icon: <RiTailwindCssFill />, tooltip: "Tailwind CSS" },
        { id: 4, skillName: "Django", icon: <SiDjango />, tooltip: "Django" },
        { id: 5, skillName: "Flask", icon: <SiFlask />, tooltip: "Flask" },
        { id: 8, skillName: "C++", icon: <SiCplusplus />, tooltip: "C++" },
        { id: 13, skillName: "C#", icon: <SiCsharp />, tooltip: "C#" },
        { id: 14, skillName: "Git", icon: <SiGit />, tooltip: "Git" },
        { id: 15, skillName: "Firebase", icon: <SiFirebase />, tooltip: "Firebase" },
        { id: 16, skillName: "Shopify", icon: <SiShopify />, tooltip: "Shopify" },
    ];

    return (
        <section className='py-20 text-center'> 
            <h1 className='text-3xl font-bold text-center'>My <span className='text-purple'>Skills</span></h1>
            <p className='mt-4 text-white-200'>I have experience with the following technologies:</p>
            
            <ul className='flex flex-wrap items-center justify-center mt-8'>
                {skillsList.map((skill) => (
                    <li className="relative" key={skill.id}>
                        <div className="group">
                            <div className="flex items-center justify-center text-center mx-6 my-6 text-4xl rounded-md h-20 w-20 border-2 bg-black-100 z-50 shadow-xl hover:text-purple">
                                {skill.icon}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
