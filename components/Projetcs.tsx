import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/Card3d';
import Image from "next/image";
import Link from "next/link";

import image1 from '@/app/images/1.webp';
import image2 from '@/app/images/2.webp';
import image3 from '@/app/images/3.webp';

const projects = [
    {
        id: 1,
        title: "Business Landing Page",
        description: "Simple minimalistic landing page for a data business",
        image: image1,
        link: "https://data-pulse.netlify.app",
    },
    {
        id: 2,
        title: "Personal Finance Dashboard",
        description: "A modern Dashboard to help people track their income, expenses and investments",
        image: image3,
        link: "",
    },
    {
        id: 3,
        title: "Perfumery Landing Page",
        description: "A modern landing page for a business that sells perfumes",
        image: image2,
        link: "https://ethernal-scents.netlify.app",
    },
];

const Projects = () => {
  return (
    <div className='py-8 px-4' id='projects'>
        <h1 className='text-4xl font-semibold text-center'>My <span className='text-purple'>Projects</span> </h1>

        <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6'>
        {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple/[0.1] dark:bg-[#000319] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] md:w-[25rem] h-auto rounded-xl p-4 sm:p-6 border">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {project.title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={project.image}
                            height="1000"
                            width="1000"
                            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            priority={project.id === 1} // Make the first project image a priority for faster loading
                        />
                    </CardItem>
                    <div className="flex justify-end items-center mt-10">
                        <CardItem
                            translateZ={20}
                            target="_blank"
                            rel="noopener noreferrer"
                            as={Link}
                            href={project.link || "#"}
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Live Preview
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        ))}
        </div>
    </div>
  );
};

export default Projects;
