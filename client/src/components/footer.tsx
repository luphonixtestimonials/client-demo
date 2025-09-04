import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    // In a real application, these would link to actual social media profiles
    console.log(`Opening ${platform} profile`);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 md:grid-cols-6 gap-8 mb-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-4 md:col-span-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins" data-testid="footer-company-name">
                  TechForward
                </h3>
                <span className="text-sm text-slate-400 font-medium tracking-wider">SOLUTIONS</span>
              </div>
            </div>
            <p className="text-slate-300 font-inter mb-6 leading-relaxed max-w-md" data-testid="footer-company-description">
              Leading technology services provider empowering businesses with innovative solutions, exceptional support, and cutting-edge digital transformation strategies.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                data-testid="social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </button>
              <button
                onClick={() => handleSocialClick('Twitter')}
                className="w-12 h-12 bg-slate-800 hover:bg-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                data-testid="social-twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </button>
              <button
                onClick={() => handleSocialClick('GitHub')}
                className="w-12 h-12 bg-slate-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                data-testid="social-github"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:text-white" />
              </button>
            </div>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-2 md:col-span-2">
            <h4 className="text-lg font-bold font-poppins mb-6 text-white" data-testid="footer-services-title">
              Services
            </h4>
            <ul className="space-y-3 font-inter">
              <li>
                <button className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-left" data-testid="footer-link-ai">
                  AI & Analytics
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-left" data-testid="footer-link-cybersecurity">
                  Cybersecurity
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-left" data-testid="footer-link-cloud">
                  Cloud Services
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-left" data-testid="footer-link-digital">
                  Digital Modernization
                </button>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="lg:col-span-2 md:col-span-2">
            <h4 className="text-lg font-bold font-poppins mb-6 text-white">Company</h4>
            <ul className="space-y-3 font-inter">
              <li>
                <button className="text-slate-300 hover:text-teal-400 transition-colors duration-200 text-left">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-teal-400 transition-colors duration-200 text-left">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-teal-400 transition-colors duration-200 text-left">
                  Case Studies
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-teal-400 transition-colors duration-200 text-left">
                  News & Insights
                </button>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="lg:col-span-2 md:col-span-2">
            <h4 className="text-lg font-bold font-poppins mb-6 text-white" data-testid="footer-support-title">
              Support
            </h4>
            <ul className="space-y-3 font-inter">
              <li>
                <button className="text-slate-300 hover:text-green-400 transition-colors duration-200 text-left" data-testid="footer-link-contact-center">
                  Contact Center
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-green-400 transition-colors duration-200 text-left" data-testid="footer-link-helpdesk">
                  Helpdesk Services
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-green-400 transition-colors duration-200 text-left" data-testid="footer-link-case-management">
                  Documentation
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-green-400 transition-colors duration-200 text-left" data-testid="footer-link-24-7">
                  24/7 Support
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2 md:col-span-6">
            <h4 className="text-lg font-bold font-poppins mb-6 text-white">Contact</h4>
            <div className="space-y-4 font-inter">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-300">info@techforward.com</p>
                  <p className="text-slate-500 text-sm">Get in touch</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-300">New York, NY</p>
                  <p className="text-slate-500 text-sm">Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Copyright */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-slate-400 font-inter" data-testid="footer-copyright">
                &copy; 2024 TechForward Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <button className="text-slate-400 hover:text-white transition-colors duration-200">Privacy Policy</button>
                <button className="text-slate-400 hover:text-white transition-colors duration-200">Terms of Service</button>
                <button className="text-slate-400 hover:text-white transition-colors duration-200">Cookie Policy</button>
              </div>
            </div>
            <p className="text-slate-500 font-inter text-sm mt-4 md:mt-0" data-testid="footer-tagline">
              Empowering businesses through technology excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
