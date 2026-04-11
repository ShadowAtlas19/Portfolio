import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowUpRight, Backpack, BabyIcon, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Sub-Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-2xl font-black tracking-tighter"
    >
      Shahnawaz.
    </motion.div>
    <div className="flex gap-8 text-xs uppercase tracking-[0.3em] font-medium">
      <a href="#work" className="hover:text-zinc-400 transition-colors">Work</a>
      <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
      <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-zinc-950">
    <div
      className="absolute inset-0 z-0 bg-cover bg-center opacity-20 scale-110"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')" }}
    />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center"
    >
      <h1 className="text-[10vw] font-black tracking-tighter uppercase leading-[0.8] text-zinc-100">
        Shahnawaz <br /> <span className="text-zinc-600">Shaikh</span>
      </h1>
      <p className="mt-8 text-zinc-500 font-light tracking-[0.6em] uppercase text-sm">
        Learner - Creator - Explorer

      </p>
    </motion.div>
  </div>
);

const Projects = () => {
  const items = [
    { title: "Portfolio", cat: "Branding", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80" },
    { title: "E-com ", cat: "Web Design", img: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80" },
    { title: "VOID", cat: "Development", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80" }
  ];

  return (
    <div className="w-full h-full flex items-center px-[10vw] gap-[5vw] bg-zinc-900">
      <div className="flex-shrink-0 mr-20">
        <h2 className="text-[6vw] font-bold uppercase leading-none text-zinc-800">Projects</h2>
      </div>
      {items.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -20 }}
          className="relative w-[30vw] h-[60vh] flex-shrink-0 bg-zinc-800 overflow-hidden group border border-zinc-800"
        >
          <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">{item.cat}</p>
            <h3 className="text-3xl font-bold flex items-center justify-between">
              {item.title} <ExternalLink size={20} />
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Certifications = () => {
  const certificates = [
    {
      title: "Revisiting chemistry: Preparatory course for ACE-AS1201",
      issuer: "MIT VPU ",
      year: "2025",
      img: "src/assets/chemistry.png"
    },
    

  ];

  return (
    <div className="w-full h-full flex items-center px-[10vw] gap-[5vw] bg-zinc-950">
      <div className="flex-shrink-0 mr-20 max-w-xs">
        <h2 className="text-[4vw] font-bold uppercase leading-none text-zinc-800">Certifications</h2>
        {/* <p className="mt-6 text-sm text-zinc-500 tracking-[0.24em] uppercase">Verified credentials that amplify skills across cloud, front-end, and data.</p> */}
      </div>
      <div className="flex gap-[4vw] overflow-hidden">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -15 }}
            className="relative w-[40vw] h-[60vh] ml-30 flex-shrink-0 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20 group"
          >
            <img src={cert.img} alt={cert.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-8 flex flex-col justify-end opacity-100">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2">{cert.issuer}</p>
              <h3 className="text-3xl font-bold text-white leading-tight">{cert.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">Issued {cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-zinc-900 px-[10vw]">
    <div className="max-w-5xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-[4vw] font-medium leading-[1.1] tracking-tight"
      >
        I design interfaces that <span className="text-zinc-400">breathe</span> and develop code that <span className="text-zinc-400">sings</span>. My philosophy is rooted in minimalism and fluid motion.
      </motion.p>
      <div className="mt-20 grid grid-cols-3 gap-10 border-t border-zinc-300 pt-10">
        <div>
          <h4 className="font-bold uppercase text-xs tracking-widest mb-4">Core Stack</h4>
          <ul className="text-zinc-500 text-sm space-y-1">
            <li>Python / C</li>
            <li>Football / Leadership</li>
            <li>HTML / CSS / JS</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="text-zinc-600 text-xl">Creating bespoke digital products for global clients since 2025.</p>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="w-full h-full flex flex-col justify-center px-[10vw] bg-zinc-950 relative">
    <div className="flex flex-col">
      <motion.a
        href="mailto:shahnawazshaikh0919@gmail.com"
        whileHover={{ x: 30 }}
        className="group flex items-center gap-10 text-[8vw] font-black tracking-tighter transition-all"
      >
        SAY HELLO
        <ArrowUpRight size="5vw" className="text-zinc-700 group-hover:text-white group-hover:rotate-45 transition-all" />
      </motion.a>
    </div>

    <div className="absolute bottom-10 left-[10vw] right-[10vw] flex justify-between items-center py-10 border-t border-zinc-900">
      {/* <div className="flex gap-8">
        <Backpack size={20} className="text-zinc-600 hover:text-white cursor-pointer" />
        <BabyIcon size={20} className="text-zinc-600 hover:text-white cursor-pointer" />
      </div> */}
      <p className="text-zinc-800 font-mono text-[10px] tracking-widest">EST. 2026 / ALL RIGHTS RESERVED</p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.panel');

    let ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-zinc-950 text-zinc-100 selection:bg-white selection:text-black">
      <Navbar />

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="flex w-[500vw] h-screen overflow-hidden">
        <section className="panel w-screen h-screen flex-shrink-0">
          <Hero />
        </section>
        <section className="panel w-screen h-screen flex-shrink-0">
          <Projects />
        </section>
        <section className="panel w-screen h-screen flex-shrink-0">
          <Certifications />
        </section>
        <section className="panel w-screen h-screen flex-shrink-0">
          <About />
        </section>
        <section className="panel w-screen h-screen flex-shrink-0">
          <Contact />
        </section>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 h-[2px] bg-white z-50"
        style={{
          scaleX: 0,
          transformOrigin: "0%",
        }}
        animate={{ scaleX: 1 }}
        transition={{ ease: "linear" }}
      />
    </div>
  );
}