import React, { useState, useEffect } from 'react';

const Header = ({ onViewChange, expandedView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If we're in an expanded view, first close it
    if (expandedView) {
      onViewChange(null);
      // Wait for the transition then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (section) => {
    if (section === 'projects') {
      setIsMobileMenuOpen(false);
      onViewChange('projects');
    } else if (section === 'photography') {
      setIsMobileMenuOpen(false);
      onViewChange('photography');
    } else if (section === 'about') {
      setIsMobileMenuOpen(false);
      onViewChange('about');
    } else if (section === 'contact') {
      setIsMobileMenuOpen(false);
      onViewChange('contact');
    } else {
      // For other sections, scroll to section and close expanded view
      scrollToSection(section);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-header/95 backdrop-blur-custom shadow-lg' : 'bg-dark-header/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onViewChange(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold tracking-tight hover:text-white transition-colors duration-200"
          >
            Bobby Richardson
          </button>
          
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => handleNavClick('about')}
                className={`transition-colors duration-200 relative group ${
                  expandedView === 'about' ? 'text-white' : 'text-text-primary hover:text-white'
                }`}
              >
                About
                <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  expandedView === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              <button 
                onClick={() => handleNavClick('projects')}
                className={`transition-colors duration-200 relative group ${
                  expandedView === 'projects' ? 'text-white' : 'text-text-primary hover:text-white'
                }`}
              >
                Projects
                <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  expandedView === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              <button 
                onClick={() => handleNavClick('photography')}
                className={`transition-colors duration-200 relative group ${
                  expandedView === 'photography' ? 'text-white' : 'text-text-primary hover:text-white'
                }`}
              >
                Photography
                <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  expandedView === 'photography' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`transition-colors duration-200 relative group ${
                  expandedView === 'contact' ? 'text-white' : 'text-text-primary hover:text-white'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  expandedView === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-primary hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <a 
              href="https://github.com/tietoa-Bobby" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-dark-header/95 backdrop-blur-custom animate-slide-up">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  expandedView === 'about' ? 'text-white bg-white/10' : 'text-text-primary hover:text-white hover:bg-white/5'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('projects')}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  expandedView === 'projects' ? 'text-white bg-white/10' : 'text-text-primary hover:text-white hover:bg-white/5'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick('photography')}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  expandedView === 'photography' ? 'text-white bg-white/10' : 'text-text-primary hover:text-white hover:bg-white/5'
                }`}
              >
                Photography
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  expandedView === 'contact' ? 'text-white bg-white/10' : 'text-text-primary hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
