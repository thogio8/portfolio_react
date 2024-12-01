import React from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, CloseIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Thomas Gioana
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <>
    {['Projets', 'Experience', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="hover:text-blue-600 transition-colors"
      >
        {item}
      </a>
    ))}
  </>
);

const SocialLinks = () => (
  <>
    <a href="https://github.com/thogio8" className="hover:text-blue-600 transition-colors">
      <GithubIcon />
    </a>
    <a href="https://www.linkedin.com/in/thomas-gioana-2536a9242/" className="hover:text-blue-600 transition-colors">
      <LinkedinIcon />
    </a>
    <a href="mailto:thomas.gioana@epitech.eu" className="hover:text-blue-600 transition-colors">
      <MailIcon />
    </a>
  </>
);