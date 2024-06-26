import React from 'react';
import { Experience as ExperienceData } from '@/data/index';

const Experience = () => {
    return (
        <main className="relative  flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-44">
            <h1 className='text-3xl font-bold text-center mb-14'>My <span className='text-purple'>Experiences</span></h1>
                <div className="w-full max-w-3xl mx-auto">
                    
                    {/* Vertical Timeline */}
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {/* Experience Items */}
                        {ExperienceData.infos.map((info, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                {/* Icon */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-purple   shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                        <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                    </svg>
                                </div>
                                {/* Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-slate-900">{info.companyName}</div>
                                        <time className="font-caveat font-medium text-indigo-500">{info.duration}</time>
                                    </div>
                                    <div className="text-slate-500">{info.jobTitle}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Experience;
