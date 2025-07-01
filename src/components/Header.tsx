import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-amber-700" />
            <span className="text-xl font-serif font-semibold text-slate-800">
              Wisdom & Eloquence
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-amber-700 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('authors')}
              className="text-slate-700 hover:text-amber-700 transition-colors font-medium"
            >
              Authors
            </button>
            <a 
              href="https://classicalacademicpress.com/products/wisdom-and-eloquence-for-parents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Get the Book
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-700 hover:text-amber-700 transition-colors font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('authors')}
                className="text-left text-slate-700 hover:text-amber-700 transition-colors font-medium py-2"
              >
                Authors
              </button>
              <a 
                href="https://classicalacademicpress.com/products/wisdom-and-eloquence-for-parents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 mt-2"
              >
                Get the Book
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}