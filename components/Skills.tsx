
import React from 'react';
import { FaSass, FaGithub, FaAws, FaMicrosoft } from 'react-icons/fa';
import {
  RiReactjsFill,
  RiTailwindCssFill
} from 'react-icons/ri';
import {
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiFirebase,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiShopify,
  SiTypescript,
  SiPython,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiPostman,
  SiMysql,
  SiSqlite,
  SiSymfony,
  SiDotnet,
  SiSpring,
  SiTrello,
  SiJira,
  SiAdobephotoshop
} from 'react-icons/si';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';


// Custom NeonDB SVG (replace with official SVG if available)


const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <SiHtml5 />, tooltip: 'HTML5' },
      { name: 'CSS', icon: <SiCss3 />, tooltip: 'CSS3' },
      { name: 'SCSS', icon: <FaSass />, tooltip: 'Sass' },
      { name: 'JavaScript', icon: <SiJavascript />, tooltip: 'JavaScript' },
      { name: 'TypeScript', icon: <SiTypescript />, tooltip: 'TypeScript' },
      { name: 'React', icon: <RiReactjsFill />, tooltip: 'React.js' },
      { name: 'Next.js', icon: <SiNextdotjs />, tooltip: 'Next.js' },
      { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, tooltip: 'Tailwind CSS' },
      { name: 'Bootstrap', icon: <SiBootstrap />, tooltip: 'Bootstrap' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: <SiPython />, tooltip: 'Python' },
      { name: 'Flask', icon: <SiFlask />, tooltip: 'Flask' },
      { name: 'Django', icon: <SiDjango />, tooltip: 'Django' },
      { name: 'PHP', icon: <SiPhp />, tooltip: 'PHP' },
      { name: 'Java', icon: <SiCplusplus />, tooltip: 'Java' },
      { name: 'C++', icon: <SiCplusplus />, tooltip: 'C++' },
      { name: 'Symfony', icon: <SiSymfony />, tooltip: 'Symfony' },
      { name: 'ASP.NET', icon: <SiDotnet />, tooltip: 'ASP.NET' },
      { name: 'Spring Boot', icon: <SiSpring />, tooltip: 'Spring Boot' },
      { name: 'REST APIs', icon: <ArrowPathIcon className="w-5 h-5" />, tooltip: 'REST APIs' },
      { name: 'GraphQL', icon: <SiGraphql />, tooltip: 'GraphQL' },
      { name: 'JWT', icon: <ShieldCheckIcon className="w-5 h-5" />, tooltip: 'JWT' },
      { name: 'OAuth2', icon: <LockClosedIcon className="w-5 h-5" />, tooltip: 'OAuth2' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, tooltip: 'MongoDB' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, tooltip: 'PostgreSQL' },
      { name: 'MySQL', icon: <SiMysql />, tooltip: 'MySQL' },
      { name: 'SQLite', icon: <SiSqlite />, tooltip: 'SQLite' },
      { name: 'Firebase', icon: <SiFirebase />, tooltip: 'Firebase' },
      { name: 'NeonDB', icon: "", tooltip: 'NeonDB' },
      { name: 'SQL Server', icon: "", tooltip: 'SQL Server' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: <SiDocker />, tooltip: 'Docker' },
      { name: 'Kubernetes', icon: <SiKubernetes />, tooltip: 'Kubernetes' },
      { name: 'GitLab CI', icon: <SiGitlab />, tooltip: 'GitLab CI' },
      { name: 'Vercel', icon: <SiVercel />, tooltip: 'Vercel' },
      { name: 'Netlify', icon: <SiNetlify />, tooltip: 'Netlify' },
      { name: 'GitHub', icon: <FaGithub />, tooltip: 'GitHub' },
      { name: 'AWS', icon: <FaAws />, tooltip: 'AWS' },
      { name: 'Azure', icon: <FaMicrosoft />, tooltip: 'Azure' }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <SiGit />, tooltip: 'Git & GitHub' },
      { name: 'Figma', icon: <SiFigma />, tooltip: 'Figma' },
      { name: 'Postman', icon: <SiPostman />, tooltip: 'Postman' },
      { name: 'Trello', icon: <SiTrello />, tooltip: 'Trello' },
      { name: 'Jira', icon: <SiJira />, tooltip: 'Jira' },
      { name: 'Adobe Photoshop', icon: <SiAdobephotoshop />, tooltip: 'Adobe Photoshop' }
    ]
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    title={skill.tooltip}
                    className="flex items-center gap-2 px-4 py-3 border border-gray-700 rounded-lg  hover:border-purple transition-colors duration-200"
                  >
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
