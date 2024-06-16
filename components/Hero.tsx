"use client"
import React, { useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'

import { jsPDF } from "jspdf";
import { truncate } from 'fs';

const Hero = () => {
    
    
    return (
        <div className='pb-20 pt-36'>
            {/* Spotlight */}
            <div>
                <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
                />
                <Spotlight
                    className="h-[100vh] w-[80vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/* Grid bg */}
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                    
                </div>
            </div>

            <div className='flex justify-center relative w-full min-h-[70px] my-20 z-10'>
                <div className='max-w-[98vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <TextGenerateEffect 
                    className='text-center text-[40px] md:text-4xl lg:text-5xl'
                    words='HEY, JE SUIS ELGOSS Mouhcine'
                    />

                    <p className=' text-center text-sm md:tracking-wider mb-4 md:text-lg lg:text-2xl'>
                    Je suis développeur web front-end , back-end & designer graphique 
                    </p>

                    <MagicButton
                        
                        title="Download CV"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                            </svg>
                        }
                        downloadLink="./CV.pdf"
                        
                        />
                </div>
            </div>

        </div>
    )
}

export default Hero
