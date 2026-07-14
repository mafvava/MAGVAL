import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Laboratory from "@/sections/Laboratory";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";


export default function Home() {


  return (

    <>

      <Navbar />


      <main>

        <Hero />

        <About />

        <Laboratory />

        <Services />

        <Contact />

      </main>


      <Footer />

    </>

  );

}