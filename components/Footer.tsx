import { FaLocationArrow, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
    const socialMedia = [
        {
            id: 1,
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/elgossmouhcine4",
            name: "LinkedIn",
        },
        {
            id: 2,
            icon: <FaGithub />,
            link: "https://github.com/gosm1",
            name: "GitHub",
        },
        {
            id: 3,
            icon: <FaInstagram />,
            link: "https://www.instagram.com/mohcine24k/",
            name: "Instagram",
        },
    ];

    return (
        <footer className="w-full pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative" id="contact">
            {/* Background grid (optional div, kept for visual effect) */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-3xl sm:text-4xl font-bold max-w-2xl sm:max-w-3xl lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>

                {/* CTA Button */}
                <div className="my-6 sm:my-8">
                    <a href="mailto:mohcineelgoss0@gmail.com" target="_blank">
                        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Let&apos;s get in touch
                                <FaLocationArrow />
                            </span>
                        </button>
                    </a>
                </div>
            </div>

            {/* Bottom section */}
            <div className="max-w-7xl mx-auto mt-16 flex flex-col-reverse md:flex-row justify-between items-center gap-6 px-4 sm:px-6">
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center md:text-left">
                    © 2024 Elgoss Mouhcine. All rights reserved.
                </p>

                <div className="flex items-center gap-4 sm:gap-6">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer" aria-label={info.name}>
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg text-white hover:scale-105 transition">
                                {info.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
