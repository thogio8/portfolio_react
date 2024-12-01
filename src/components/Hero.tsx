import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, DatabaseIcon, GlobeIcon } from './icons';
import { fadeInUp, staggerContainer, skillCardVariants } from '../utils/animations';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl font-bold"
            >
              Développeur Web Full Stack
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-blue-600"
              >
                .
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              Étudiant en informatique en MSc à EPITECH passionné par le développement web et les technologies modernes.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex space-x-4"
            >
              <motion.a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-moi
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mes projets
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 gap-6"
          >
            <SkillCard
              icon={<CodeIcon className="w-8 h-8 text-blue-600" />}
              title="Frontend"
              skills={['React', 'TypeScript', 'Tailwind CSS']}
            />
            <SkillCard
              icon={<DatabaseIcon className="w-8 h-8 text-blue-600" />}
              title="Backend"
              skills={['Symfony', 'Python', 'MySQL']}
            />
            <SkillCard
              icon={<GlobeIcon className="w-8 h-8 text-blue-600" />}
              title="DevOps"
              skills={['Docker', 'AWS']}
            />
            <SkillCard
              icon={<CodeIcon className="w-8 h-8 text-blue-600" />}
              title="Tools"
              skills={['Git', 'Jetbrains IDE', 'Postman']}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => (
  <motion.div
    variants={skillCardVariants}
    whileHover="hover"
    className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300"
  >
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="mb-4"
    >
      {icon}
    </motion.div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <ul className="text-gray-600 text-sm">
      {skills.map((skill) => (
        <motion.li
          key={skill}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);