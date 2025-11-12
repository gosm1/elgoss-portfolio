import projectai1 from '@/app/images/mockcoder.webp'
import projectai2 from '@/app/images/heartdesease.webp'
import projectai3 from '@/app/images/melodify.webp'
import projectai4 from '@/app/images/RAG-chatbot.webp'


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
    description:
      "Developed an interactive web platform using AI to simulate technical interviews and automatically generate personalized reports based on the candidate's responses. Fully deployed on Vercel with secure authentication, serving over 200 active users.",
    image: projectai1,
    technologies: ["Next.js", "Gemini", "Vapi API", "Firebase"],
    link: "https://mockcoder.vercel.app",
    category: "AI"
  },
  {
    id: 2,
    title: "Heart Disease Prediction System",
    description:
      "Designed a complete ML pipeline including exploratory data analysis, preprocessing, feature engineering (normalization, encoding, PCA), and model evaluation. Achieved over 90% accuracy after hyperparameter tuning and dimensionality reduction.",
    image: projectai2,
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "NumPy"],
    link: "https://heart-disease-prediction-model-app.streamlit.app/",
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "Melodify – AI Music Generation System",
    description:
      "Developed a multimodal system combining Qwen2-7B, ACE-Step, and SDXL-Turbo to generate music and visuals from text prompts. Deployed on Modal (GPU NVIDIA L40S) and AWS S3 for real-time text-to-music generation.",
    image: projectai3,
    technologies: ["Python", "Qwen2-7B", "ACE-Step", "SDXL-Turbo", "Modal", "AWS S3"],
    link: "#",
    category: "AI"
  },
  {
    id: 4,
    title: "RAG Chatbot – Local Knowledge Assistant",
    description:
      "Built a Retrieval-Augmented Generation (RAG) chatbot using LangChain, Ollama, and ChromaDB. Provides offline document search and precise contextual answers.",
    image: projectai4,
    technologies: ["LangChain", "Ollama", "ChromaDB", "Python"],
    link: "#",
    category: "AI"
  },
  {
    id: 5,
    title: "Trackify – Personal Finance Management App",
    description:
      "Trackify is an intuitive web app for tracking income, expenses, goals, and balances in real-time with interactive visualizations and a personalized dashboard.",
    image: project1,
    technologies: ["Next.js", "Tailwind CSS", "Chart.js", "Firebase"],
    link: "https://trackify-grey.vercel.app/dashbord",
    category: "Finance"
  },
  {
    id: 6,
    title: "GigBooster – AI-Powered Fiverr Gig SEO Generator",
    description:
      "GigBooster is an AI-based platform that automatically generates SEO-optimized Fiverr service descriptions tailored to the user's expertise and freelance domain.",
    image: project2,
    technologies: ["Next.js", "Gemini", "Neon DB"],
    link: "https://gigboosterai.vercel.app",
    category: "AI"
  },
  {
    id: 7,
    title: "Luxedrive – Luxury Car Rental Platform",
    description:
      "Luxedrive is a premium web app for booking luxury cars with a modern interface, customized reservation system, dynamic car management, and responsive design for optimal user experience.",
    image: project3,
    technologies: ["Next.js", "Tailwind CSS", "GraphQL"],
    link: "https://luxedrivefr.netlify.app",
    category: "Web Development"
  },
  {
    id: 8,
    title: "FragranceAI – Personalized Fragrance Generator",
    description:
      "FragranceAI uses user inputs to generate personalized fragrance recommendations based on preferences, leveraging AI for unique results.",
    image: project4,
    technologies: ["Next.js", "Tailwind CSS", "Gemini API"],
    link: "https://fragranceai.netlify.app",
    category: "AI"
  },
  {
    id: 9,
    title: "WebAura – Graphic Design and Web Development Agency",
    description:
      "WebAura is a landing page for a digital agency specializing in graphic design and web development, showcasing services and expertise.",
    image: project5,
    technologies: ["Next.js", "Tailwind CSS", "Acternity UI"],
    link: "https://webaura4.netlify.app",
    category: "Web Development"
  },
  {
    id: 10,
    title: "Dentiste – Dentist Reservation Platform",
    description:
      "Dentiste simplifies online booking for dental appointments with an easy-to-use interface, improving convenience for both patients and dentists.",
    image: project6,
    technologies: ["Next.js", "Tailwind CSS", "Chandui"],
    link: "https://dentiste-website.netlify.app",
    category: "Web Development"
  },
  {
    id: 11,
    title: "Data Pulse – Data Business Landing Page",
    description:
      "Data Pulse is a landing page for a business specializing in data analytics, offering services and solutions in an engaging format.",
    image: project7,
    technologies: ["React", "Bootstrap"],
    link: "https://data-pulse.netlify.app",
    category: "Web Development"
  },
  {
    id: 12,
    title: "Ethernal Scents – Perfume Store Landing Page",
    description:
      "Ethernal Scents is a landing page for a perfume store, providing a stylish and user-friendly interface for product exploration and purchases.",
    image: project8,
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



