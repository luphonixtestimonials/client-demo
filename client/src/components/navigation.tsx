import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/10 border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent" data-testid="logo">
                  TechForward
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wider">SOLUTIONS</span>
              </div>
            </div>
          </div>
          
          {/* Professional Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('home')} 
              className="relative px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 group"
              data-testid="nav-home"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="relative px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 group"
              data-testid="nav-services"
            >
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="relative px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 group"
              data-testid="nav-about"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="relative px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 group"
              data-testid="nav-contact"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            
            {/* CTA Button */}
            <div className="ml-6 pl-6 border-l border-slate-200">
              <button 
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
                data-testid="nav-cta"
              >
                Get Started
              </button>
            </div>
          </div>
          
          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-200" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? 
                <X className="w-5 h-5 text-slate-700" /> : 
                <Menu className="w-5 h-5 text-slate-700" />
              }
            </button>
          </div>
        </div>
        
        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-lg">
            <div className="px-4 py-6 space-y-2">
              {['home', 'services', 'about', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200"
                  data-testid={`mobile-nav-${section}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <button 
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                  data-testid="mobile-nav-cta"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
