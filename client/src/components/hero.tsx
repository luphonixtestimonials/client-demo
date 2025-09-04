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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" ref={heroRef}>
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-[hsl(220,91%,15%)]">
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.3)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-50 animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-60 animation-delay-2000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Enhanced Content Section */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Enterprise-Grade Technology Solutions
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-white leading-[1.1] tracking-tight" data-testid="hero-title">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent animate-pulse"> Digital Future</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl font-inter" data-testid="hero-description">
              Partner with industry leaders in AI, cybersecurity, and cloud innovation. We deliver enterprise solutions that drive measurable growth and competitive advantage.
            </p>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 text-white/70">
                <div className="w-8 h-8 bg-[hsl(220,91%,15%)] rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">ISO 27001</div>
                  <div className="text-xs">Certified Security</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <div className="w-8 h-8 bg-[hsl(220,91%,15%)] rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Fortune 100</div>
                  <div className="text-xs">Trusted Partner</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <div className="w-8 h-8 bg-[hsl(220,91%,15%)] rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">24/7</div>
                  <div className="text-xs">Global Support</div>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                className="group relative px-8 py-4 bg-[hsl(220,91%,15%)] text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25" 
                onClick={handleGetStarted}
                data-testid="button-get-started"
              >
                <span className="relative z-10">Start Your Transformation</span>
                <div className="absolute inset-0 bg-[hsl(220,91%,20%)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <button 
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
                onClick={handleLearnMore}
                data-testid="button-learn-more"
              >
                View Case Studies
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
                          <div className="w-8 h-8 bg-[hsl(220,91%,15%)] rounded-lg flex items-center justify-center">
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