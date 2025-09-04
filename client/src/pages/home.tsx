import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleContactUs = () => {
    // In a real application, this would open a contact form or navigate to a contact page
    console.log('Contact us clicked');
  };

  const handleScheduleConsultation = () => {
    // In a real application, this would open a scheduling interface
    console.log('Schedule consultation clicked');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      
      {/* Enhanced Statistics Section */}
      <section id="about" className="py-24 bg-[hsl(220,91%,15%)] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Trusted by Industry Leaders
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6 leading-tight" data-testid="why-choose-title">
              Numbers That
              <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Define Excellence
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto font-inter leading-relaxed" data-testid="why-choose-description">
              Our commitment to delivering exceptional results is reflected in every project, partnership, and innovation we bring to life.
            </p>
          </div>
          
          {/* Professional Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Years of Experience */}
            <div className="text-center fade-in group" data-testid="stat-experience">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mb-2">Years</h3>
                <p className="text-white/70 font-inter">of industry expertise and innovation leadership</p>
                {/* Progress bar */}
                <div className="w-full bg-white/20 rounded-full h-1 mt-4">
                  <div className="bg-gradient-to-r from-blue-400 to-teal-400 h-1 rounded-full w-[95%] animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Projects Delivered */}
            <div className="text-center fade-in group" data-testid="stat-projects">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mb-2">Projects</h3>
                <p className="text-white/70 font-inter">successfully delivered across global markets</p>
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <span className="text-green-400 text-sm">↗ +34% YoY</span>
                </div>
              </div>
            </div>
            
            {/* Support Coverage */}
            <div className="text-center fade-in group" data-testid="stat-support">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mb-2">Support</h3>
                <p className="text-white/70 font-inter">global coverage with expert technical teams</p>
                <div className="flex justify-center mt-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Client Satisfaction */}
            <div className="text-center fade-in group" data-testid="stat-satisfaction">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mb-2">Satisfaction</h3>
                <p className="text-white/70 font-inter">client satisfaction with 5-star service ratings</p>
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">ISO 27001</div>
              <p className="text-white/70">Certified Security Standards</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Fortune 100</div>
              <p className="text-white/70">Enterprise Client Base</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <p className="text-white/70">System Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
            
            <div className="relative z-10 text-center fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white/90 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Ready to Get Started?
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight" data-testid="contact-title">
                Transform Your Business
                <span className="block text-blue-200">With Enterprise Technology</span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto font-inter leading-relaxed" data-testid="contact-description">
                Join industry leaders who trust TechForward Solutions to accelerate their digital transformation journey with cutting-edge technology and exceptional support.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 min-w-[200px]" 
                  onClick={handleContactUs}
                  data-testid="button-contact-us"
                >
                  <span className="flex items-center justify-center">
                    Start Your Journey
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <button 
                  className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 min-w-[200px]"
                  onClick={handleScheduleConsultation}
                  data-testid="button-schedule-consultation"
                >
                  <span className="flex items-center justify-center">
                    Schedule Consultation
                    <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-200">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Free Initial Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">No Long-term Commitments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Enterprise Security Standards</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
