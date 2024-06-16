import { FaLocationArrow, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
    const socialMedia = [
        {
            id: 1,
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/el-goss-mouhcine-34b95a283/",
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
        <footer className="w-full pt-20 pb-10" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96"></div>

            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-center font-bold lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                
                    <MagicButton 
                    title="Let's get in touch" 
                    icon={<FaLocationArrow />} 
                    />
                
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Elgoss Mouhcine</p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer" aria-label={info.name}>
                            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
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
