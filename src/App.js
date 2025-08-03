import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [expandedView, setExpandedView] = useState(null); // 'projects', 'photography', 'contact', 'about', or null

  // Ensure page starts at top on initial load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add ESC key support for closing expanded views
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && expandedView) {
        setExpandedView(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [expandedView]);

  const handleViewChange = (view) => {
    setExpandedView(view);
  };

  const handleContactNavigation = () => {
    // Set expanded view to contact instead of scrolling
    setExpandedView('contact');
  };

  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <Header onViewChange={handleViewChange} expandedView={expandedView} />
      
      {/* Full-page expanded views */}
      {expandedView === 'about' && (
        <div className="fixed inset-0 z-40 bg-dark-bg animate-expand-in">
          <div className="pt-20 h-full overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-8 animate-slide-in-right">
                <h1 className="text-4xl font-bold text-white">About Me</h1>
                <button
                  onClick={() => setExpandedView(null)}
                  className="text-text-secondary hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="animate-slide-up">
                <About />
              </div>
            </div>
          </div>
        </div>
      )}

      {expandedView === 'projects' && (
        <div className="fixed inset-0 z-40 bg-dark-bg animate-expand-in">
          <div className="pt-20 h-full overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-8 animate-slide-in-right">
                <h1 className="text-4xl font-bold text-white">My Projects</h1>
                <button
                  onClick={() => setExpandedView(null)}
                  className="text-text-secondary hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="animate-slide-up">
                <Projects />
              </div>
            </div>
          </div>
        </div>
      )}

      {expandedView === 'photography' && (
        <div className="fixed inset-0 z-40 bg-dark-bg animate-expand-in">
          <div className="pt-20 h-full overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-8 animate-slide-in-right">
                <h1 className="text-4xl font-bold text-white">My Photography</h1>
                <button
                  onClick={() => setExpandedView(null)}
                  className="text-text-secondary hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="animate-slide-up">
                <Photography onContactClick={handleContactNavigation} />
              </div>
            </div>
          </div>
        </div>
      )}

      {expandedView === 'contact' && (
        <div className="fixed inset-0 z-40 bg-dark-bg animate-expand-in">
          <div className="pt-20 h-full overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-8 animate-slide-in-right">
                <h1 className="text-4xl font-bold text-white">Get In Touch</h1>
                <button
                  onClick={() => setExpandedView(null)}
                  className="text-text-secondary hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="animate-slide-up">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content - only show when not expanded */}
      <main className={`transition-all duration-500 ${expandedView ? 'opacity-0 pointer-events-none' : 'opacity-100'} pt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-8">
            <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start">
              <Hero />
              
              {/* About Preview Card */}
              <div 
                onClick={() => setExpandedView('about')}
                className="mt-8 p-6 bg-dark-secondary rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer animate-slide-up"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-white transition-colors">
                    About Me
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  BSc Computer Science student with 10+ years of coding experience. 
                  Passionate about creating innovative solutions and visual storytelling.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'JavaScript', 'React', 'Photography'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/5 text-text-secondary text-sm rounded-md border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
                  Click to learn more →
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 space-y-16">
              <Projects />
              <Photography onContactClick={handleContactNavigation} />
              <div 
                onClick={() => setExpandedView('contact')}
                className="cursor-pointer"
              >
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer - hide in expanded views */}
      {!expandedView && <Footer />}
    </div>
  );
}

export default App;
