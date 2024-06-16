import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projetcs from "@/components/Projetcs";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Experience, NavLinks } from "@/data";



export default function Home() {
  return (

    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={NavLinks} />
        <Hero />
        <Grid />
        
        <Skills />
        <Experiences />
        
        <Projetcs />
        <Footer />
      </div>
    </main>
  );
}
