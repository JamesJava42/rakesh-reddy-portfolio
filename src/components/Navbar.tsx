import { useState, useEffect } from 'react';
import { navLinks } from '../data/profileData';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">Rakesh Reddy M.</a>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => <a key={link.name} href={link.href} className="text-gray-200 hover:text-primary transition-colors">{link.name}</a>)}
          <a href="#contact" className="px-5 py-2 rounded-md bg-primary text-white hover:bg-opacity-90 transition-all">Contact</a>
        </div>

        <button className="md:hidden text-gray-200 hover:text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dark-bg/90 backdrop-blur-md flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => <a key={link.name} href={link.href} className="text-gray-200 hover:text-primary transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>{link.name}</a>)}
          <a href="#contact" className="px-5 py-2 rounded-md bg-primary text-white hover:bg-opacity-90 transition-all text-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
