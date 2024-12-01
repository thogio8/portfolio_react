import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubIcon, ExternalLinkIcon } from './icons';
import { projects } from '../data/projects';
import { staggerContainer, projectCardVariants } from '../utils/animations';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Mes projets
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project}: { project: any; index: number }) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={projectCardVariants}
      whileHover="hover"
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="relative h-48 overflow-hidden"
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <GithubIcon className="w-5 h-5 mr-1" />
              Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <ExternalLinkIcon className="w-5 h-5 mr-1" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};