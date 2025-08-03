import React from 'react';

const Photography = ({ onContactClick }) => {
  // Keep the category structure for future use
  const categories = ["All", "Architecture", "Nature", "Street", "Portrait", "Landscape", "Abstract"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const handleContactClick = (e) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      // Fallback for normal scroll behavior
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="photography" className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 relative inline-block">
        Photography
        <span className="absolute bottom-0 left-0 w-2/5 h-1 bg-gradient-to-r from-text-primary to-transparent"></span>
      </h2>
      
      {/* Category Filter - kept for future functionality */}
      <div className="flex flex-wrap gap-2 mb-8 opacity-50">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-not-allowed ${
              activeCategory === category
                ? 'bg-white/20 text-text-secondary'
                : 'bg-white/10 text-text-secondary'
            }`}
            disabled
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Under Construction Section */}
      <div className="min-h-[400px] flex flex-col items-center justify-center bg-dark-secondary rounded-xl border border-white/10 p-12 text-center">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-text-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-semibold text-text-primary mb-4">
          Photography Portfolio
        </h3>
        
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-yellow-400 font-medium">Under Construction</span>
        </div>
        
        <p className="text-text-secondary max-w-md leading-relaxed mb-6">
          I'm currently curating my best photography work to showcase here. This section will feature 
          a diverse portfolio spanning architecture, nature, street photography, and portraits.
        </p>
        
        <div className="text-sm text-text-secondary">
          <p className="mb-2">Coming soon:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.slice(1).map((category) => (
              <span key={category} className="px-3 py-1 bg-white/5 rounded-md border border-white/10">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-text-secondary mb-4">
          Interested in photography collaborations or have questions about my work?
        </p>
        <a 
          href="#contact"
          onClick={handleContactClick}
          className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-text-primary hover:text-white px-6 py-3 rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Get in Touch</span>
        </a>
      </div>
    </section>
  );
};

export default Photography;
