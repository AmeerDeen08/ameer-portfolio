import React, { useState, useEffect, useCallback } from 'react';
import '../assets/styles/hp.css';
import logo from '../assets/images/generated-image.png'
function Navbar() {
  const [active, setActive] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
    { name: 'My Resume', id: 'resume', link: 'https://drive.google.com/uc?export=download&id=1CtnVcRHYQLoVKHL2pUZcbDwFOEtNQMX9' } // 👈 Resume with link
  ];

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
    
    if (scrollY < 100) {
      setActive('Home');
      return;
    }

    const sections = [];
    navItems.forEach(item => {
      if (item.link) return; // skip linked items like resume
      const element = document.getElementById(item.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        sections.push({
          id: item.id,
          name: item.name,
          top: offsetTop,
          bottom: offsetTop + rect.height
        });
      }
    });

    sections.sort((a, b) => a.top - b.top);

    let currentSection = 'Home';
    const viewportMiddle = scrollY + window.innerHeight / 3;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      
      if (viewportMiddle >= section.top && viewportMiddle < section.bottom) {
        currentSection = section.name;
        break;
      }
      
      if (i === sections.length - 1 && viewportMiddle >= section.top) {
        currentSection = section.name;
      }
    }

    if (currentSection !== active) {
      setActive(currentSection);
    }
  }, [active, navItems]);

  useEffect(() => {
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  const scrollToSection = (sectionId, itemName) => {
    setActive(itemName);
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY - 100;
          
          window.scrollTo({ 
            top: Math.max(0, offsetTop), 
            behavior: 'smooth' 
          });
        }
      }
    }, 10);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg shadow-2xl' 
        : 'bg-transparent'
    }`}
    style={{ 
      borderBottom: 'none', 
      border: 'none' 
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-7">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home', 'Home')}
              className="text-white text-xl font-bold hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-2 py-1"
            >
              <img src={logo} className='h-20' alt="" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => item.link 
                  ? window.open(item.link, '_blank') // 👈 Opens resume in new tab
                  : scrollToSection(item.id, item.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  active === item.name 
                    ? 'bg-blue-600/80 shadow-lg shadow-blue-500/25' 
                    : 'hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg shadow-2xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.link 
                    ? window.open(item.link, '_blank') // 👈 Resume works in mobile menu too
                    : scrollToSection(item.id, item.name)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    active === item.name 
                      ? 'bg-blue-600/80 text-white shadow-lg' 
                      : 'hover:bg-white/10 hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
