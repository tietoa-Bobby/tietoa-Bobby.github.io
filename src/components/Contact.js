import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      title: 'LinkedIn',
      description: 'Professional networking and career opportunities',
      value: 'Bobby Richardson',
      href: 'https://www.linkedin.com/in/bobby-richardson-76a154253/'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      description: 'View my code, projects, and contributions',
      value: 'tietoa-Bobby',
      href: 'https://github.com/tietoa-Bobby'
    }
  ];

  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 relative inline-block">
        Get In Touch
        <span className="absolute bottom-0 left-0 w-2/5 h-1 bg-gradient-to-r from-text-primary to-transparent"></span>
      </h2>
      
      <div className="max-w-2xl">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-text-primary">Let's Connect</h3>
          <p className="text-text-secondary mb-6 leading-relaxed">
            I'm always interested in new opportunities, creative collaborations, 
            and exciting projects. Whether you're looking for a developer, photographer, 
            or just want to chat about technology and creativity, feel free to reach out through these platforms!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-dark-secondary rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-text-secondary group-hover:text-white transition-colors p-3 bg-white/5 rounded-lg group-hover:bg-white/10">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold text-text-primary group-hover:text-white transition-colors mb-1">
                    {method.title}
                  </div>
                  <div className="text-sm text-text-secondary mb-2">
                    {method.description}
                  </div>
                  <div className="text-text-primary group-hover:text-white transition-colors font-medium">
                    {method.value}
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-dark-secondary/50 rounded-xl border border-white/5">
          <p className="text-text-secondary text-sm text-center">
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Response times are typically within 24-48 hours on weekdays
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
