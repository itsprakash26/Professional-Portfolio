import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Testimonials from "../components/testimonial/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollTop from "../components/ui/ScrollTop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Home;