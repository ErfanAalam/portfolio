import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HowIWork from '@/components/howiwork';

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Skills />
      <HowIWork />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
