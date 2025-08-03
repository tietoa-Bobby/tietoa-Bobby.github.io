import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React and Tailwind CSS featuring smooth animations and dark theme.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/tietoa-Bobby/portfolio",
      liveUrl: "#",
      status: "In Progress",
      detailedDescription: "A comprehensive portfolio website showcasing modern web development practices with React and Tailwind CSS. Features include responsive design, smooth animations, dark theme, and optimised performance.",
      features: [
        "Responsive design for all screen sizes",
        "Smooth scrolling and animations",
        "Modern dark theme with custom colours",
        "Component-based React architecture",
        "Optimised build for production"
      ],
      folderStructure: [
        { name: "public/", type: "folder", children: [
          { name: "index.html", type: "file" }
        ]},
        { name: "src/", type: "folder", children: [
          { name: "components/", type: "folder", children: [
            { name: "About.js", type: "file" },
            { name: "Contact.js", type: "file" },
            { name: "Footer.js", type: "file" },
            { name: "Header.js", type: "file" },
            { name: "Hero.js", type: "file" },
            { name: "Photography.js", type: "file" },
            { name: "Projects.js", type: "file" }
          ]},
          { name: "App.js", type: "file" },
          { name: "index.css", type: "file" },
          { name: "index.js", type: "file" }
        ]},
        { name: ".gitignore", type: "file" },
        { name: "LICENSE", type: "file" },
        { name: "package-lock.json", type: "file" },
        { name: "package.json", type: "file" },
        { name: "postcss.config.js", type: "file" },
        { name: "README.md", type: "file" },
        { name: "tailwind.config.js", type: "file" }
      ],
      languages: ["JavaScript", "CSS", "HTML"],
      stats: {
        stars: 0,
        language: "JavaScript",
        size: "2.1 MB"
      }
    },
    {
      id: 2,
      title: "Typing Speed Test",
      description: "A modern, responsive typing speed test web application inspired by MonkeyType.",
      technologies: ["JavaScript", "HTML/CSS", "Responsive Design"],
      githubUrl: "https://github.com/tietoa-Bobby/typing_test",
      liveUrl: "#",
      status: "Completed",
      detailedDescription: "An interactive typing speed test application that provides real-time feedback on typing performance. Built with vanilla JavaScript for optimal performance and smooth user experience.",
      features: [
        "Real-time WPM (Words Per Minute) calculation",
        "Accuracy percentage tracking",
        "Multiple text samples for variety",
        "Responsive design for all devices",
        "Clean, distraction-free interface"
      ],
      folderStructure: [
        { name: "index.html", type: "file" },
        { name: "style.css", type: "file" },
        { name: "script.js", type: "file" },
        { name: "words.js", type: "file" },
        { name: "README.md", type: "file" },
        { name: ".gitignore", type: "file" },
        { name: "LICENSE", type: "file" }
      ],
      languages: ["JavaScript", "CSS", "HTML"],
      stats: {
        stars: 0,
        language: "JavaScript",
        size: "45.2 KB"
      }
    },
    {
      id: 3,
      title: "Pathfinding Visualiser",
      description: "A Python application built with Pygame to visualise various pathfinding algorithms.",
      technologies: ["Python", "Pygame", "Algorithms", "Data Structures"],
      githubUrl: "https://github.com/tietoa-Bobby/pathfinding_visualiser",
      liveUrl: "#",
      status: "Completed",
      detailedDescription: "An educational tool that visualises how different pathfinding algorithms work. Users can create obstacles, set start and end points, and watch algorithms find the optimal path in real-time.",
      features: [
        "Multiple algorithms: A*, Dijkstra, BFS, DFS",
        "Interactive grid for creating mazes",
        "Real-time visualisation of algorithm progress",
        "Step-by-step execution controls",
        "Performance metrics and comparisons"
      ],
      folderStructure: [
        { name: "pathfinder.py", type: "file" },
        { name: "algorithms/", type: "folder", children: [
          { name: "__init__.py", type: "file" },
          { name: "a_star.py", type: "file" },
          { name: "dijkstra.py", type: "file" },
          { name: "bfs.py", type: "file" },
          { name: "dfs.py", type: "file" },
          { name: "maze_generator.py", type: "file" },
          { name: "utils.py", type: "file" }
        ]},
        { name: "constants.py", type: "file" },
        { name: "requirements.txt", type: "file" },
        { name: "README.md", type: "file" },
        { name: ".gitignore", type: "file" },
        { name: "LICENSE", type: "file" }
      ],
      languages: ["Python"],
      stats: {
        stars: 0,
        language: "Python",
        size: "15.7 KB"
      }
    },
    {
      id: 4,
      title: "Daily Tech News Digester",
      description: "A Python tool that aggregates top daily tech news from Reddit, Hacker News, and tech RSS feeds, summarises them, and delivers a daily digest via command line and Markdown file.",
      technologies: ["Python", "Web Scraping", "RSS Feeds", "API Integration"],
      githubUrl: "https://github.com/tietoa-Bobby/daily_feed_digester",
      liveUrl: "#",
      status: "Completed",
      detailedDescription: "An automated news aggregation tool that collects, processes, and summarises tech news from multiple sources. Perfect for staying updated with the latest in technology without information overload.",
      features: [
        "Multi-source news aggregation",
        "Intelligent content summarisation",
        "Duplicate article detection",
        "Customizable news sources",
        "Markdown and CLI output formats"
      ],
      folderStructure: [
        { name: "daily_feed_digester.py", type: "file" },
        { name: "modules/", type: "folder", children: [
          { name: "__init__.py", type: "file" },
          { name: "aggregator.py", type: "file" },
          { name: "hackernews.py", type: "file" },
          { name: "notifier.py", type: "file" },
          { name: "reddit.py", type: "file" },
          { name: "rss.py", type: "file" },
          { name: "summarizer.py", type: "file" }
        ]},
        { name: "config.example.yaml", type: "file" },
        { name: "requirements.txt", type: "file" },
        { name: "README.md", type: "file" },
        { name: ".gitignore", type: "file" },
        { name: "LICENSE", type: "file" }
      ],
      languages: ["Python"],
      stats: {
        stars: 0,
        language: "Python",
        size: "23.4 KB"
      }
    },
    {
      id: 5,
      title: "Circle Bot",
      description: "A Discord bot that analyses circle drawings and maintains daily leaderboards.",
      technologies: ["Python", "Discord.py", "Image Processing", "Computer Vision"],
      githubUrl: "https://github.com/tietoa-Bobby/circle_bot",
      liveUrl: "#",
      status: "Completed",
      detailedDescription: "A fun Discord bot that challenges users to draw perfect circles and rates their accuracy. Uses computer vision to analyse uploaded images and maintains competitive leaderboards.",
      features: [
        "Image upload and processing",
        "Circle accuracy scoring algorithm",
        "Daily and all-time leaderboards",
        "User statistics tracking",
        "Community challenges and events"
      ],
      folderStructure: [
        { name: "bot.py", type: "file" },
        { name: "requirements.txt", type: "file" },
        { name: "README.md", type: "file" },
        { name: ".gitignore", type: "file" },
        { name: "LICENSE", type: "file" }
      ],
      languages: ["Python"],
      stats: {
        stars: 0,
        language: "Python",
        size: "18.9 KB"
      }
    },
    {
      id: 6,
      title: "Password Manager",
      description: "A secure, local, command-line password manager written in Python.",
      technologies: ["Python", "Cryptography", "Security", "CLI"],
      githubUrl: "https://github.com/tietoa-Bobby/password-manager",
      liveUrl: "#",
      status: "Completed",
      detailedDescription: "A security-focused password manager that stores encrypted passwords locally. Features strong encryption, secure password generation, and an intuitive command-line interface for managing credentials.",
      features: [
        "AES-256 encryption for password storage",
        "Secure password generation",
        "Master password protection",
        "Local storage (no cloud dependency)",
        "Import/export functionality"
      ],
      folderStructure: [
        { name: "cli.py", type: "file" },
        { name: "vault.py", type: "file" },
        { name: "crypto_utils.py", type: "file" },
        { name: "requirements.txt", type: "file" },
        { name: "README.md", type: "file" },
        { name: ".gitignore", type: "file" },
        { name: "LICENSE", type: "file" }
      ],
      languages: ["Python"],
      stats: {
        stars: 0,
        language: "Python",
        size: "12.3 KB"
      }
    },
    {
      id: 7,
      title: "Environment Scanner",
      description: "A Python CLI tool that scans .env files for sensitive information and security misconfigurations.",
      technologies: ["Python", "Security", "CLI", "File Analysis"],
      githubUrl: "https://github.com/tietoa-Bobby/envscan",
      liveUrl: "#",
      status: "Completed",
      detailedDescription: "A security auditing tool that scans environment files for potential security risks, exposed secrets, and configuration issues. Essential for maintaining secure development practices.",
      features: [
        "Comprehensive .env file scanning",
        "Pattern matching for sensitive data",
        "Security best practices validation",
        "Detailed vulnerability reports",
        "Integration with CI/CD pipelines"
      ],
      folderStructure: [
        { name: "envscan/", type: "folder", children: [
          { name: "__init__.py", type: "file" },
          { name: "cli.py", type: "file" },
          { name: "patterns.py", type: "file" },
          { name: "scanner.py", type: "file" }
        ]},
        { name: ".gitignore", type: "file" },
        { name: "LICENSE", type: "file" },
        { name: "README.md", type: "file" },
        { name: "setup.py", type: "file" }
      ],
      languages: ["Python"],
      stats: {
        stars: 0,
        language: "Python",
        size: "28.1 KB"
      }
    },
    {
      id: 8,
      title: "Projectile Motion Sandbox",
      description: "A 2D physics simulator for projectile motion, featuring real-time visualisation using Pygame and flexible CLI input.",
      technologies: ["Python", "Pygame", "Physics Simulation", "CLI"],
      githubUrl: "https://github.com/tietoa-Bobby/projectile-motion-sandbox",
      liveUrl: "#",
      status: "Completed",
      detailedDescription: "An educational physics simulation that demonstrates projectile motion principles with interactive visualisation. Perfect for students and educators exploring classical mechanics concepts.",
      features: [
        "Real-time physics calculations",
        "Interactive trajectory visualisation",
        "Variable initial conditions",
        "Multiple projectile support",
        "Educational mode with annotations"
      ],
      folderStructure: [
        { name: "LICENSE", type: "file" },
        { name: "README.md", type: "file" },
        { name: "main.py", type: "file" },
        { name: "requirements.txt", type: "file" },
        { name: "simulation.py", type: "file" },
        { name: "visualiser.py", type: "file" }
      ],
      languages: ["Python"],
      stats: {
        stars: 0,
        language: "Python",
        size: "34.6 KB"
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Planning':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const renderFolderStructure = (items, depth = 0) => {
    return items.map((item, index) => (
      <div key={index} className={`${depth > 0 ? 'ml-4' : ''}`}>
        <div className="flex items-center space-x-2 py-1">
          <div className="flex items-center space-x-1">
            {depth > 0 && (
              <div className="w-4 flex justify-center">
                <div className="w-px h-4 bg-white/20"></div>
              </div>
            )}
            {item.type === 'folder' ? (
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )}
          </div>
          <span 
            className={`text-sm ${
              item.type === 'folder' 
                ? 'text-blue-400 font-medium' 
                : 'text-text-secondary'
            }`}
          >
            {item.name}
          </span>
        </div>
        {item.children && renderFolderStructure(item.children, depth + 1)}
      </div>
    ));
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={handleBackdropClick}
      >
        <div className="bg-dark-secondary border border-white/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden my-8 animate-expand-in">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 text-text-secondary text-sm rounded-md border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-text-secondary hover:text-white transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-text-secondary leading-relaxed">
                    {project.detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View Code</span>
                  </a>
                  {project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg transition-all duration-200 border border-blue-500/30 hover:border-blue-500/50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column - Folder Structure */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Project Structure</h4>
                <div className="bg-dark-bg border border-white/10 rounded-lg p-4 font-mono text-sm">
                  {renderFolderStructure(project.folderStructure)}
                </div>
                
                {/* Enhanced GitHub Integration */}
                <div className="mt-4 p-4 bg-dark-bg border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm font-semibold text-white">Repository Info</h5>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                  
                  {project.languages && (
                    <div>
                      <div className="text-xs text-text-secondary mb-2">Languages:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.languages.map((lang, index) => (
                          <span key={index} className="px-2 py-1 bg-white/5 text-xs rounded border border-white/10">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="projects" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 relative inline-block">
          Projects
          <span className="absolute bottom-0 left-0 w-2/5 h-1 bg-gradient-to-r from-text-primary to-transparent"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-dark-secondary p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-white/5 text-text-secondary text-sm rounded-md border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 items-center">
                <a 
                  href={project.githubUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center space-x-2 text-text-secondary hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm">Code</span>
                </a>
                {project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center space-x-2 text-text-secondary hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
                <div className="flex-1"></div>
                <div className="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
                  Click to explore →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Projects;
