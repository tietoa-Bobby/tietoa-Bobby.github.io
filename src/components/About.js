import React from 'react';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 animate-slide-up">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 relative inline-block">
        About Me
        <span className="absolute bottom-0 left-0 w-2/5 h-1 bg-gradient-to-r from-text-primary to-transparent"></span>
      </h2>
      
      <div className="space-y-8">
        {/* Introduction */}
        <div className="text-text-secondary leading-relaxed space-y-4">
          <p>
            I am a BSc Computer Science student with a strong foundation in programming, 
            problem-solving, and creative development. With over 10 years of coding experience, 
            I specialise in Python and have additional skills in Java, JavaScript, HTML/CSS, and R.
          </p>
          <p>
            I enjoy collaborating on both creative and technical projects, working solo or alongside 
            other developers, combining fun and experimentation with practical functionality.
          </p>
          <p>
            Alongside my coding, I have been a photographer for over three years, exploring a broad 
            range of styles and subjects, and I am currently expanding my skills into videography. 
            I am open to freelance opportunities and creative collaborations in both technology 
            and visual media.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Tech Stack
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Languages */}
            <div>
              <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'C', 'R', 'SQL', 'Shell', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white/5 text-text-secondary text-sm rounded-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Dev Tools */}
            <div>
              <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Dev Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'AWS', 'Azure', 'Docker', 'Cloudflare Workers'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white/5 text-text-secondary text-sm rounded-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Libraries & Frameworks */}
            <div>
              <h4 className="text-lg font-medium text-white mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Libraries & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Django', 'PostgreSQL', 'SQLite'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white/5 text-text-secondary text-sm rounded-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience/Education Section */}
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Education & Background
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-white">BSc Computer Science</h4>
                <span className="text-sm text-text-secondary bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500/30">
                  Current
                </span>
              </div>
              <p className="text-text-secondary text-sm">
                Building a strong foundation in computer science principles, algorithms, and software development practices.
              </p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-white">10+ Years Coding Experience</h4>
                <span className="text-sm text-text-secondary bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">
                  Experienced
                </span>
              </div>
              <p className="text-text-secondary text-sm">
                Self-taught programmer with extensive experience in Python and expanding expertise in full-stack development.
              </p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-white">Photography & Videography</h4>
                <span className="text-sm text-text-secondary bg-purple-500/20 text-purple-400 px-2 py-1 rounded border border-purple-500/30">
                  3+ Years
                </span>
              </div>
              <p className="text-text-secondary text-sm">
                Creative visual storyteller exploring various photography styles and expanding into videography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
