import project1 from '@/app/images/trackify.webp'
import project2 from '@/app/images/gigbooster.webp'
import project3 from '@/app/images/luxedrive.webp'
import project4 from '@/app/images/fragranceai.webp'
import project5 from '@/app/images/webaura.webp'
import project6 from '@/app/images/dentite.webp'
import project7 from '@/app/images/datapulse.webp'
import project8 from '@/app/images/ethernalscent.webp'




export const NavLinks = [
    { 
        name: "Home", link: "/#" 
    },
    { 
        name: "About", link: "/#about" 
    },
    { 
        name: "Projects", link: "/#projects" 
    },
    {
        name: "Skills", link: "/#skills"
    },
    { 
        name: "Contact", link: "/#contact" 
    },
]

export const Projects = [
    {
        id: 1,
        title: "MockCoder – AI-Powered Technical Interview Simulator",
        description: "Developed an interactive web platform using AI to simulate technical interviews and automatically generate personalized reports based on the candidate's responses.",
        image: "", // Correct image path
        technologies: ["Next.js", "Gemini", "Vapi API", "Firebase"],
        link: "https://mockcoder.com",
        category: "AI"
    },
    {
        id: 2,
        title: "Trackify – Personal Finance Management App",
        description: "Trackify is an intuitive web app for tracking income, expenses, goals, and balances in real-time with interactive visualizations and a personalized dashboard.",
        image: project1, // Correct image path
        technologies: ["Next.js", "Tailwind CSS", "Chart.js", "Firebase"],
        link: "https://trackify-grey.vercel.app/dashbord",
        category: "Finance"
    },
    {
        id: 3,
        title: "GigBooster – AI-Powered Fiverr Gig SEO Generator",
        description: "GigBooster is an AI-based platform that automatically generates SEO-optimized Fiverr service descriptions tailored to the user's expertise and freelance domain.",
        image: project2, // Correct image path
        technologies: ["Next.js", "Gemini", "Neon DB"],
        link: "https://gigboosterai.vercel.app",
        category: "AI"
    },
    {
        id: 4,
        title: "Luxedrive – Luxury Car Rental Platform",
        description: "Luxedrive is a premium web app for booking luxury cars with a modern interface, customized reservation system, dynamic car management, and responsive design for optimal user experience.",
        image: project3, // Correct image path
        technologies: ["Next.js", "Tailwind CSS", "GraphQL"],
        link: "https://luxedrivefr.netlify.app",
        category: "Web Development"
    },
    {
        id: 5,
        title: "FragranceAI – Personalized Fragrance Generator",
        description: "FragranceAI uses user inputs to generate personalized fragrance recommendations based on preferences, leveraging AI for unique results.",
        image: project4, // Correct image path
        technologies: ["Next.js", "Tailwind CSS", "Gemini API"],
        link: "https://fragranceai.netlify.app",
        category: "AI"
    },
    {
        id: 6,
        title: "WebAura – Graphic Design and Web Development Agency",
        description: "WebAura is a landing page for a digital agency specializing in graphic design and web development, showcasing services and expertise.",
        image: project5, // Correct image path
        technologies: ["Next.js", "Tailwind CSS", "Acternity UI"],
        link: "https://webaura4.netlify.app",
        category: "Web Development"
    },
    {
        id: 7,
        title: "Dentiste – Dentist Reservation Platform",
        description: "Dentiste simplifies online booking for dental appointments with an easy-to-use interface, improving convenience for both patients and dentists.",
        image: project6, // Correct image path
        technologies: ["Next.js", "Tailwind CSS", "Chandui"],
        link: "https://dentiste-website.netlify.app",
        category: "Web Development"
    },
    {
        id: 8,
        title: "Data Pulse – Data Business Landing Page",
        description: "Data Pulse is a landing page for a business specializing in data analytics, offering services and solutions in an engaging format.",
        image: project7, // Correct image path
        technologies: ["React", "Bootstrap"],
        link: "https://data-pulse.netlify.app",
        category: "Web Development"
    },
    {
        id: 9,
        title: "Ethernal Scents – Perfume Store Landing Page",
        description: "Ethernal Scents is a landing page for a perfume store, providing a stylish and user-friendly interface for product exploration and purchases.",
        image: project8, // Correct image path
        technologies: ["React.js", "Bootstrap"],
        link: "https://ethernal-scents.netlify.app",
        category: "E-commerce"
    }
]

export const About = {
    title : "About me",
    infos : [
        {
            id:1,
            fieldName : "Name",
            FieldValue : "ELGOSS Mouhcine",
        },
        {
            id:2,
            fieldName : "Phone Number",
            FieldValue : "(+212) 70708-2709",
        },
        {
            id:3,
            fieldName : "Nationality",
            FieldValue : "Morrocan",
        },
    ]
}



