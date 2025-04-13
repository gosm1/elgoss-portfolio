"use client"
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image, { StaticImageData } from 'next/image'
import { NavLinks, Projects } from '@/data/index'
import { FloatingNav } from '@/components/ui/FloatingNav'

// Define TypeScript interfaces
interface Project {
    id: number;  // Changed from string to number
    title: string;
    category: string;
    description: string;
    technologies: string[];
    link: string;
    image: string | StaticImageData; // Added StaticImageData type for Next.js images
  }
  
  interface ProjectCardProps {
    project: Project;
    index: number;
  }

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [cardRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && imageRef.current && contentRef.current) {
      gsap.to(imageRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power3.inOut'
      })

      gsap.to(contentRef.current.children, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3
      })
    }
  }, [inView])

  const isEven = index % 2 === 0

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 mb-24 md:mb-40`}
    >
      {/* Project Image */}
      <div className="md:w-1/2 overflow-hidden">
        <div
          ref={imageRef}
          className="aspect-video w-full h-full relative bg-gray-200 dark:bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-purple transition-colors duration-200"
          style={{
            clipPath: 'inset(100% 0% 0% 0%)',
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Project Info */}
      <div
        ref={contentRef}
        className={`md:w-1/2 flex flex-col ${isEven ? 'md:pl-6' : 'md:pr-6'} justify-center`}
      >
        <span
          className="inline-block text-sm font-medium text-purple mb-2 opacity-0"
          style={{ transform: 'translateY(20px)' }}
        >
          {project.category}
        </span>
        <h3
          className="text-2xl md:text-3xl font-bold mb-3 opacity-0"
          style={{ transform: 'translateY(20px)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-gray-700 dark:text-gray-300 mb-4 opacity-0"
          style={{ transform: 'translateY(20px)' }}
        >
          {project.description}
        </p>
        <div
          className="flex flex-wrap gap-2 mb-6 opacity-0"
          style={{ transform: 'translateY(20px)' }}
        >
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center opacity-0 group"
          style={{ transform: 'translateY(20px)' }}
        >
          <span className="text-purple font-medium">View Project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current

    if (section && heading) {
      gsap.from(heading.children, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true))
    }
  }, [])

  const allProjects = Projects

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-black-100 relative overflow-hidden">
      <FloatingNav navItems={NavLinks} />
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" ref={headingRef}>
            All Projects
          </h2>
        </div>

        {/* Projects list */}
        <div className="max-w-6xl mx-auto">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection