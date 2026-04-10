import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-20 bg-zinc-950">
      <div className="flex flex-col gap-4">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-zinc-500 uppercase tracking-widest text-sm"
        >
          Available for freelance
        </motion.span>
        
        <motion.a 
          href="mailto:hello@yourstudio.com"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="group flex items-center gap-8 text-7xl md:text-9xl font-bold tracking-tighter"
        >
          GET IN TOUCH 
          <span className="inline-block group-hover:rotate-45 transition-transform duration-500">
            <ArrowUpRight size={80} strokeWidth={1} />
          </span>
        </motion.a>
      </div>

      <div className="mt-40 flex justify-between items-end border-t border-zinc-800 pt-10">
        <div className="flex gap-10 text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
        </div>
        <div className="text-zinc-600 text-sm">
          © 2026 DESIGNED BY YOURSTUDIO
        </div>
      </div>
    </div>
  );
};

export default Contact;