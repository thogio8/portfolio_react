import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/experience';
import { staggerContainer, experienceCardVariants } from '../utils/animations';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Experiences professionnelles
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience}: { experience: any; index: number }) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={experienceCardVariants}
      whileHover="hover"
      className="mb-8 bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <motion.h3
            whileHover={{ x: 5 }}
            className="text-xl font-bold"
          >
            {experience.position}
          </motion.h3>
          <motion.p
            whileHover={{ x: 5 }}
            className="text-blue-600"
          >
            {experience.company}
          </motion.p>
        </div>
        <p className="text-gray-600">{experience.period}</p>
      </div>
      <p className="text-gray-600 mb-4">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech: string) => (
          <motion.span
            key={tech}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};