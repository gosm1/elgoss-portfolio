"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Spotlight } from './ui/Spotlight'
import MagicButton from './ui/MagicButton'
import TiltedCard from './ui/TiltedCard/TiltedCard'
import heroimage from '@/app/images/elgossmouhcine_image.webp'
import gsap from 'gsap'

const Hero = () => {
  const [viewport, setViewport] = useState({
    isMobile: false,
    isSmall: false,
    isMedium: false
  })

  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setViewport({
        isMobile: width < 480, // Extra small devices
        isSmall: width >= 480 && width < 640, // Small devices
        isMedium: width >= 640 && width < 768 // Medium devices
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      )
    }, heroRef)

    return () => {
      window.removeEventListener("resize", handleResize)
      ctx.revert()
    }
  }, [])

  // Determine image dimensions based on viewport
  const getImageSize = () => {
    const { isMobile, isSmall, isMedium } = viewport
    
    if (isMobile) {
      return {
        containerHeight: "220px",
        containerWidth: "220px",
        imageHeight: "220px",
        imageWidth: "220px"
      }
    } else if (isSmall) {
      return {
        containerHeight: "260px",
        containerWidth: "260px",
        imageHeight: "260px",
        imageWidth: "260px"
      }
    } else if (isMedium) {
      return {
        containerHeight: "300px",
        containerWidth: "300px",
        imageHeight: "300px",
        imageWidth: "300px"
      }
    } else {
      // For larger screens, use the original dimensions
      return {
        containerHeight: "480px",
        containerWidth: "450px",
        imageHeight: "480px",
        imageWidth: "450px"
      }
    }
  }

  const imageSize = getImageSize()

  return (
    <div ref={heroRef} className="relative pt-10">
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-screen w-4/5 top-10 left-full" fill="white" />
        <Spotlight className="left-80 top-28 h-4/5 w-1/2" fill="blue" />
      </div>

      {/* Grid background */}
      <div className="h-[90vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between md:gap-12">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end order-first md:order-last mb-6 sm:mb-8 md:mb-0 fade-in">
          <TiltedCard
            imageSrc={heroimage.src}
            altText="Elgoss Mouhcine"
            captionText="Elgoss Mouhcine"
            containerHeight={imageSize.containerHeight}
            containerWidth={imageSize.containerWidth}
            imageHeight={imageSize.imageHeight}
            imageWidth={imageSize.imageWidth}
            rotateAmplitude={viewport.isMobile ? 3 : 5}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left order-last md:order-first">
          <h1 className="fade-in text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight pt-2 md:pt-0">
            Hey! I'm Elgoss Mouhcine
          </h1>

          <h2 className="fade-in text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 dark:text-gray-300">
            I Design the Future!
          </h2>

          <p className="fade-in text-base xs:text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a passionate and dedicated Software Engineer & AI Enthusiast with a love for turning ideas into impactful solutions.
          </p>

          <div className="fade-in flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 mt-5 sm:mt-6 md:mt-8">
            <MagicButton
              title="Download resume"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                </svg>
              }
              downloadLink="./elgossmouhcine_cv.pdf"
            />
            <span className="text-sm sm:text-base md:text-base text-gray-500 dark:text-gray-400">• Available for Work</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero