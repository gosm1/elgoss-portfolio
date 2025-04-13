import Projetcs from "@/components/Projetcs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { NavLinks } from "@/data";
import About from "@/components/About";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col  mx-auto ">
        <FloatingNav navItems={NavLinks} />
        <div className="max-w-7xl w-full mb-8 fad">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projetcs />
        <div className="max-w-7xl w-full mb-8">
          <Footer />
        </div>
    </main>
  );
}
