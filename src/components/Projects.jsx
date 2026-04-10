import { motion } from 'framer-motion';

const projects = [
  { title: "Quantum", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80" },
  { title: "Nebula", img: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80" },
];

const Projects = () => {
  return (
    <div className="w-full h-full flex items-center px-20 gap-20 bg-zinc-900">
      <div className="flex-shrink-0">
        <h2 className="text-6xl font-bold uppercase rotate-180 [writing-mode:vertical-lr]">Selected Works</h2>
      </div>
      
      {projects.map((project, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 0.95 }}
          className="relative w-[500px] h-[600px] bg-zinc-800 overflow-hidden group cursor-pointer"
        >
          <img 
            src={project.img} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-10">
            <h3 className="text-4xl font-bold">{project.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;