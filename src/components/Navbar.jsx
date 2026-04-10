import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-2xl font-bold tracking-tighter"
      >
        STUDIO.
      </motion.div>
      <div className="flex gap-8 text-sm uppercase tracking-widest">
        <a href="#" className="hover:text-zinc-400 transition-colors">Work</a>
        <a href="#" className="hover:text-zinc-400 transition-colors">About</a>
        <a href="#" className="hover:text-zinc-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;