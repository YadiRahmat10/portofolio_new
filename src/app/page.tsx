import TopNavBar from "@/components/TopNavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ShaderBackground from "@/components/ShaderBackground";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <TopNavBar />
      
      <main className="flex-grow pt-[72px]">
        <Hero />
        <About />
        <Skills />
        
        <div className="px-gutter md:px-lg max-w-container-max mx-auto space-y-xl">
          <Experience />
          <Projects />
        </div>
      </main>
      
      <Footer />
    </>
  );
}
