import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="0,0,0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={10}
        innerStyle={{ zIndex: 999 }}
        outerStyle={{ zIndex: 999 }}
        trailingSpeed={10}
      />
      <div className="container-fluid">
        <a className="navbar-brand" href="#top">
          Praduman Sharma
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={`nav-link ${activeLink === 'about' ? 'text-decoration-underline' : ''}`}
              href="#about"
              onClick={() => handleNavLinkClick('about')}
            >
              About
            </a>

            <a
              className={`nav-link ${activeLink === 'skills' ? 'text-decoration-underline' : ''}`}
              href="#skills"
              onClick={() => handleNavLinkClick('skills')}
            >
              Skills
            </a>
            
            <a
              className={`nav-link ${activeLink === 'projects' ? 'text-decoration-underline' : ''}`}
              href="#projects"
              onClick={() => handleNavLinkClick('projects')}
            >
              Work
            </a>
            
            <a
              className={`nav-link ${activeLink === 'certificates' ? 'text-decoration-underline' : ''}`}
              href="#certificates"
              onClick={() => handleNavLinkClick('certificates')}
            >
              Certificates
            </a>
            
            <a
              className={`nav-link ${activeLink === 'education' ? 'text-decoration-underline' : ''}`}
              href="#education"
              onClick={() => handleNavLinkClick('education')}
            >
              Education
            </a>
            
            <a
              className={`nav-link ${activeLink === 'blog' ? 'text-decoration-underline' : ''}`}
              href="#blog"
              onClick={() => handleNavLinkClick('blog')}
            >
              Blogs
            </a>
            
            <a
              className={`nav-link ${activeLink === 'contact' ? 'text-decoration-underline' : ''}`}
              href="#contact"
              onClick={() => handleNavLinkClick('contact')}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
