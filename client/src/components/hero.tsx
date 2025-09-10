import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleGetStarted = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offsetTop = servicesSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{backgroundColor: '#e6eff2'}} ref={heroRef}>
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_25%,rgba(52,211,153,0.1)_0%,transparent_50%),radial-gradient(circle_at_50%_75%,rgba(139,92,246,0.08)_0%,transparent_50%)] animate-pulse"></div>

        {/* Floating animated elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-teal-500 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce opacity-55" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,120,140,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,120,140,.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Enhanced Content Section */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-md rounded-full border border-blue-600/30 text-blue-800 text-sm font-medium shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Enterprise-Grade Technology Solutions
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-slate-800 leading-[1.1] tracking-tight" data-testid="hero-title">
              TechForward: We
              <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent"> Shape the Future</span>
              <span className="block text-slate-600 text-4xl sm:text-5xl lg:text-6xl mt-2">for our clients</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl font-inter mt-6" data-testid="hero-description">
              What is your biggest challenge? Accelerate digital transformation, Advance automation with smarter software, Advance careers....
            </p>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">ISO 27001</div>
                  <div className="text-xs">Certified Security</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Fortune 100</div>
                  <div className="text-xs">Trusted Partner</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">24/7</div>
                  <div className="text-xs">Global Support</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <button 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:from-blue-500 hover:to-teal-500" 
                onClick={handleGetStarted}
                data-testid="button-get-started"
              >
                <span className="relative z-10 flex items-center">
                  Explore now
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                className="px-8 py-4 border-2 border-slate-400 text-slate-700 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-slate-200 hover:border-slate-500 transition-all duration-300 hover:scale-105"
                onClick={handleLearnMore}
                data-testid="button-learn-more"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Company Hero Image */}
          <div className="hidden lg:block fade-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-2 relative overflow-hidden" data-testid="hero-illustration">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl"></div>

                {/* Hero Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Modern office environment with technology professionals collaborating"
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Overlay with company branding */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">TechForward Solutions</div>
                            <div className="text-xs text-slate-500">Enterprise Technology Partner</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-blue-600">500+</div>
                            <div className="text-xs text-slate-600">Projects</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-teal-600">99.9%</div>
                            <div className="text-xs text-slate-600">Uptime</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-600">24/7</div>
                            <div className="text-xs text-slate-600">Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Animation Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full animate-pulse"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl transform rotate-3">
                <div className="text-xs text-slate-600">Trusted by</div>
                <div className="text-lg font-bold text-slate-800">Fortune 100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}