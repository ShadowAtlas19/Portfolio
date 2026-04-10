import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-zinc-900">
      <div className="max-w-4xl px-10">
        <motion.h2 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-medium leading-tight"
        >
          We bridge the gap between <span className="text-zinc-400 italic">vision</span> and <span className="text-zinc-400 italic">reality</span> through high-performance digital experiences.
        </motion.h2>
        
        <div className="mt-12 grid grid-cols-2 gap-10">
          <p className="text-zinc-500 text-lg">
            Based in a digital-first world, we specialize in React, GSAP, and Framer Motion to build websites that don't just work—they feel alive.
          </p>
          <div className="flex flex-col gap-2 uppercase tracking-tighter font-bold">
            <span>Strategy</span>
            <span>Development</span>
            <span>Motion Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;