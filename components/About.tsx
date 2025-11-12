'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const About = () => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger inside useEffect to avoid SSR issues
    gsap.registerPlugin(ScrollTrigger)
    
    const el = textRef.current
    if (!el) return

    const originalText = el.innerText
    const words = originalText.split(' ')

    // Replace content with spans for each word
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="word inline-block mr-1" style="opacity: 0.3; filter: blur(4px); color: #666666;">${word}</span>`
      )
      .join(' ')

    const wordElements = el.querySelectorAll('.word')

    // Create the animation with scrub: true to tie it to scroll position
    gsap.to(wordElements, {
      opacity: 1,
      filter: "blur(0px)",
      color: "#121212", // Set this to your text-black-100 color
      stagger: 0.05,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom", 
        end: "bottom 50%",
        scrub: true,
      }
    })

    return () => {
      // Clean up all scroll triggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id='about' className="py-16 md:py-28 px-6  md:h-[85vh] bg-[#FDFAF6] w-full">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black-100 text-center">
          About Me
        </h2>
        
        <div
  ref={textRef}
  className="text-2xl md:text-3xl font-medium leading-relaxed max-w-5xl mx-auto"
>
  {`I'm Elgoss Mouhcine, a future Engineering student in Computer Science and Artificial Intelligence at EMSI. I am passionate about developing and deploying intelligent systems at scale, with practical experience in deep learning and deep learning, RAG, and full-stack development. I have created AI applications (like an AI technical interview simulator) used by over 200 active users, and implemented automations that reduced manual work by 80%. Certified by IBM, Meta, and Microsoft, I am constantly seeking new challenges to build impactful digital solutions.`}
</div>

      </div>
    </section>
  )
}

export default About