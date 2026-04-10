import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')" }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h1 className="text-8xl font-black tracking-tighter uppercase md:text-[12rem]">
          Creative <br /> <span className="text-zinc-500">Developer</span>
        </h1>
        <p className="mt-4 text-zinc-400 font-light tracking-[0.5em] uppercase">Scroll to explore</p>
      </motion.div>
    </div>
  );
};

export default Hero;