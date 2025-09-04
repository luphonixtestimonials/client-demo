import { useEffect } from "react";
import { 
  Lightbulb, 
  Shield, 
  Cloud, 
  Zap, 
  Database, 
  Users, 
  Phone, 
  LifeBuoy, 
  BarChart3, 
  Clipboard, 
  Settings, 
  UserCheck 
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "AI and Analytics Services",
    description: "Harness the power of artificial intelligence and data analytics to unlock insights and automate processes.",
    icon: Lightbulb,
    features: [
      "Machine Learning Implementation",
      "Predictive Analytics",
      "Business Intelligence Dashboards"
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with comprehensive security solutions and threat management.",
    icon: Shield,
    features: [
      "Security Audits & Assessments",
      "Incident Response Planning",
      "Compliance Management"
    ]
  },
  {
    id: 3,
    title: "Infrastructure and Cloud Services",
    description: "Scale your operations with robust cloud infrastructure and modern deployment strategies.",
    icon: Cloud,
    features: [
      "Cloud Migration & Strategy",
      "DevOps Implementation",
      "Infrastructure Monitoring"
    ]
  },
  {
    id: 4,
    title: "Digital Modernization",
    description: "Transform legacy systems into modern, efficient digital platforms that drive business growth.",
    icon: Zap,
    features: [
      "Legacy System Migration",
      "API Development & Integration",
      "User Experience Optimization"
    ]
  },
  {
    id: 5,
    title: "Data Management Services",
    description: "Organize, secure, and leverage your data assets for strategic business advantages.",
    icon: Database,
    features: [
      "Data Architecture Design",
      "Database Optimization",
      "Data Governance & Privacy"
    ]
  },
  {
    id: 6,
    title: "Customer Experience",
    description: "Enhance customer satisfaction with personalized experiences and seamless digital touchpoints.",
    icon: Users,
    features: [
      "CX Strategy Development",
      "Omnichannel Implementation",
      "Customer Journey Mapping"
    ]
  },
  {
    id: 7,
    title: "Contact Center Solutions",
    description: "Modern contact center technologies that improve agent productivity and customer satisfaction.",
    icon: Phone,
    features: [
      "Cloud Contact Centers",
      "AI-Powered Routing",
      "Performance Analytics"
    ]
  },
  {
    id: 8,
    title: "Managed Helpdesk Services",
    description: "24/7 technical support and IT helpdesk services to keep your business running smoothly.",
    icon: LifeBuoy,
    features: [
      "Multi-tier Support Structure",
      "Ticket Management Systems",
      "SLA-driven Response Times"
    ]
  },
  {
    id: 9,
    title: "Consulting and Advisory Services",
    description: "Strategic technology consulting to align your IT initiatives with business objectives.",
    icon: BarChart3,
    features: [
      "Technology Strategy Planning",
      "Digital Transformation Roadmaps",
      "Vendor Selection & Management"
    ]
  },
  {
    id: 10,
    title: "Case Management",
    description: "Streamline workflows with intelligent case management systems that improve efficiency.",
    icon: Clipboard,
    features: [
      "Workflow Automation",
      "Case Tracking & Analytics",
      "Integration Capabilities"
    ]
  },
  {
    id: 11,
    title: "Program Management",
    description: "Expert program management services to ensure successful delivery of complex technology initiatives.",
    icon: Settings,
    features: [
      "Agile & Waterfall Methodologies",
      "Resource Allocation & Planning",
      "Risk Management & Mitigation"
    ]
  },
  {
    id: 12,
    title: "Organizational Change Management",
    description: "Navigate technology transitions smoothly with comprehensive change management strategies.",
    icon: UserCheck,
    features: [
      "Change Strategy Development",
      "Training & Communication Plans",
      "Adoption Measurement & Support"
    ]
  }
];

export default function Services() {
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

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Enterprise Solutions Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 mb-6 leading-tight" data-testid="services-title">
            Technology Services That
            <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Drive Innovation
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-inter leading-relaxed" data-testid="services-description">
            From AI-powered analytics to enterprise security, we deliver cutting-edge solutions that transform businesses and accelerate growth in the digital economy.
          </p>
        </div>
        
        {/* Professional Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`service-card-${service.id}`}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0.5 bg-white rounded-2xl"></div>
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon with professional styling */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-[hsl(220,91%,15%)] rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 font-mono">0{service.id}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-poppins text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300" data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 font-inter mb-6 leading-relaxed" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                  
                  {/* Feature list with checkmarks */}
                  <ul className="space-y-3" data-testid={`service-features-${service.id}`}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-600 font-inter text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn more link */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      Learn more
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA section */}
        <div className="mt-20 text-center fade-in">
          <div className="bg-[hsl(220,91%,15%)] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold font-poppins mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can accelerate your digital transformation journey.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
