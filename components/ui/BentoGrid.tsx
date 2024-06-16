"use client"
import { cn } from "@/utils/cn";
import MagicButton from "./MagicButton";
import { useState } from "react";
import Lottie from "react-lottie";

import "@/app/globals.css";

import animationData from '@/data/confetti.json'



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    id,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id:number;
}) => {
    const [copied,SEtCopied] = useState(false)

    const handleCopie = () => {
        navigator.clipboard.writeText('mohcineelgoss0@gmail.com')
        SEtCopied(true)
    }

    const gradientTextStyle = {
        color: "#636363",
        backgroundImage: "-webkit-linear-gradient(90deg, #636363 0%, #d6d6d6 50%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        textFillColor: "transparent",
        WebkitTextFillColor: "transparent",
      };

    const stat = [
        {
            id: "stats-1",
            title: "Project Made",
            value: "12+",
        },
        {
            id: "stats-2",
            title: "Thecnologies mastred",
            value: "14+",
        },
        
    ];

    return (
    <div
        className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
        )}
        style={{ 
        background : 'rgb(4,7,29)',
        backgroundColor: 'gradient...',
        
    }}
    >
        <div className={`${id === 1} && 'flex justify-center h-full' `}>

            

            <div className={cn(className,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                <div 
                    className={cn("font-bold text-xl mb-4 mt-3", 
                        { "text-2xl text-center text-purple": id === 3 }
                    )}
                    style={id !== 3 ? gradientTextStyle : undefined}
                >
                    {title}
                </div>
                <div className="font-sans font-light text-[#c1c2d3] text-md md:text-md lg:text-lg z-10 ">
                    {description}
                </div>

                
                {id === 3 && (
                <div className="relative">
                    <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                    
                        <Lottie options={{
                            loop : copied,
                            autoplay : copied,
                            animationData,
                            rendererSettings:{
                                preserveAspectRatio : 'xMidYMid slice',
                            }
                        }
                        } height={200} width={400} />
                    </div>

                        <MagicButton 
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                </svg>
                            }
                            title={copied ? "Email copied" : 'Copy my Email'} 
                            handleClick={handleCopie}
                            />
                </div>
                )}

                {id === 2 && (
                    <div>
                        {stat.map((s) => (
                        <div key={s.id} className={`flex-1 flex justify-start items-center flex-row m-3 z-10`} >
                        <h4 className="font-poppins font-semibold xs:text-[35px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                            {s.value}
                        </h4>
                        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-purple uppercase ml-3 ">
                            {s.title}
                        </p>
                        </div>
                        ))}
                    </div>
                )}

                </div>
        </div>

        
        
    </div>
);
};
