"use client"
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image, { StaticImageData } from 'next/image'
import { Projects } from '@/data/index'
import Link from 'next/link'

// Type definitions
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link: string;
  image: string | StaticImageData;
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
      id='projects'
      ref={cardRef}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 mb-24 md:mb-40`}
    >
      {/* Project Image */}
      <div className="md:w-1/2 overflow-hidden">
        <div 
          ref={imageRef}
          className="aspect-video w-full h-full relative bg-gray-200 dark:bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-purple transition-colors duration-200"
          style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        >
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="rounded-xl object-cover"
            // ✅ No objectFit prop used
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
          target="_blank"
          rel="noopener noreferrer"
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

  const firstFourProjects = Projects.slice(0, 4)

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-black-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" ref={headingRef}>
            Featured Projects
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {firstFourProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="my-5">
              <Link href="/projects" passHref legacyBehavior>
                <a>
                  <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      View All Projects
                    </span>
                  </button>
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
