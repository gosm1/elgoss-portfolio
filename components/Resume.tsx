"use client"
import React, { useState } from 'react';
import { MdAccountCircle, MdOutlineWorkOutline, MdSchool, MdBuild } from "react-icons/md";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiDjango, SiFlask, SiTypescript, SiCplusplus } from "react-icons/si";
import { FaSass } from "react-icons/fa";

import { About, Experience, Education } from '@/data/index';
import { AnimatedTooltip } from './ui/AnimatedTotlip';

const Skills = {
    title: "Skills",
    description: "I have experience with the following technologies:",
    skillsList: [
        { id: 1, skillName: "React js", icon: <RiReactjsFill /> },
        { id: 2, skillName: "Next js", icon: <SiNextdotjs /> },
        { id: 3, skillName: "Tailwind CSS", icon: <RiTailwindCssFill /> },
        { id: 4, skillName: "Django", icon: <SiDjango /> },
        { id: 5, skillName: "Flask", icon: <SiFlask /> },
        { id: 6, skillName: "TypeScript", icon: <SiTypescript /> },
        { id: 7, skillName: "SCSS", icon: <FaSass /> },
        { id: 8, skillName: "C++", icon: <SiCplusplus /> },
    ],
};

const Resume = () => {
    const [activeTab, setActiveTab] = useState('About');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'About':
                return (
                    <div className="flex flex-col gap-10 text-center xl:text-left w-full" id="about" role="tabpanel">
                        <h1 className='text-2xl font-bold pt-7 text-center'>{About.title}</h1>
                        <ul className='flex flex-col gap-5 justify-center items-center'>
                            {About.infos.map((item, index) => (
                                <li key={index}>
                                    <span className='text-purple px-2'>{item.fieldName} : </span>
                                    <span className={`text-lg ${item.id === 2 ? 'text-sm': ''}`}>{item.FieldValue}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'Experience':
                return (
                    <div className="flex flex-col gap-10 text-center w-full" id="experience" role="tabpanel">
                        <h1 className='text-2xl font-bold pt-7 text-center'>{Experience.title}</h1>
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
                            {Experience.infos.map((item, index) => (
                                <li key={index} className='bg-[#000332] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1'>
                                    <span className="text-purple">{item.duration}</span>
                                    <h3 className="text-xl py-2 text-center">{item.jobTitle}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple"></span>
                                        <p className="text-center">{item.companyName}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'Education':
                return (
                    <div className="flex flex-col gap-10 text-center w-full" id="education" role="tabpanel">
                        <h1 className='text-2xl font-bold pt-7 text-center'>{Education.title}</h1>
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
                            {Education.infos.map((item, index) => (
                                <li key={index} className='bg-[#000332] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1'>
                                    <span className="text-purple">{item.duration}</span>
                                    <h3 className="text-sm font-bold py-2 text-center">{item.degree}</h3>
                                    <div className="flex items-center gap-2 xl:text-xl font-normal">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple"></span>
                                        <p className="text-center">{item.institue}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'Skills':
                return (
                    <div className="flex flex-col gap-10 text-center w-full" id="skills" role="tabpanel">
                        <div className='flex flex-col gap-4 text-center'>
                            <h1 className='text-2xl font-bold text-center'>{Skills.title}</h1>
                            <p className='mx-auto'>{Skills.description}</p>
                        </div>
                        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
                            {Skills.skillsList.map((skill, index) => (
                                <li key={index} className='flex flex-col items-center text-4xl hover:text-purple'>
                                    <AnimatedTooltip id={skill.id} name={skill.skillName} icon={skill.icon} />
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className='px-5 py-16' id='about'>
            <h1 className='text-center text-2xl font-semibold'>My <span className='text-purple'>Resume</span></h1>
            <div className='flex items-center justify-center py-12 xl:py-12'>
                <div className="w-2/3">
                    <div className="relative">
                        <ul className="relative flex flex-wrap p-1 list-none rounded-xl text-white gap-8" data-tabs="tabs" role="list">
                            {['About', 'Experience', 'Education', 'Skills'].map(tab => (
                                <li key={tab} className="z-30 flex-auto text-center bg-[#000332] rounded-xl">
                                    <button
                                        className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer bg-inherit
                                            ${activeTab === tab ? "text-purple" : ""}`}
                                        onClick={() => setActiveTab(tab)}
                                        role="tab"
                                        aria-selected={activeTab === tab}
                                    >
                                        {tab === 'About' && <MdAccountCircle className='text-2xl' />}
                                        {tab === 'Experience' && <MdOutlineWorkOutline className='text-2xl' />}
                                        {tab === 'Education' && <MdSchool className='text-2xl' />}
                                        {tab === 'Skills' && <MdBuild className='text-2xl' />}
                                        <span className="ml-1">{tab}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div data-tab-content="" className="py-10">
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Resume);
