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
  UserCheck,
  Brain, 
  CheckCircle,
  ArrowRight 
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
            Best practices to secure
            <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              your service desk and
            </span>
            <span className="block text-slate-900">contact center</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-inter leading-relaxed" data-testid="services-description">
            TechForward powers the possible for business and industry engines. We revolutionize processes and reduce costs.
          </p>
        </div>

        {/* Zigzag Services Layout */}
        <div className="space-y-16">
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
                data-testid={`service-card-${service.id}`}
              >
                {/* Card Content */}
                <div className="flex-1 lg:max-w-lg">
                  <div 
                    className="group relative rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                    style={{backgroundColor: '#e6eff2'}}
                  >
                    {/* Enhanced hover effect with custom color */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100"
                      style={{backgroundColor: '#164070'}}
                    ></div>
                    <div className="absolute inset-1 rounded-3xl group-hover:bg-white/95" style={{backgroundColor: '#e6eff2'}}></div>

                    {/* Card content */}
                    <div className="relative z-10">
                      {/* Icon with professional styling */}
                      <div className="flex items-center justify-between mb-6">
                        <div 
                          className="flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300"
                          style={{backgroundColor: '#164070'}}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-400 font-mono">0{service.id}</div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4 transition-colors duration-300" data-testid={`service-title-${service.id}`} style={{color: '#164070'}}>
                        {service.title}
                      </h3>

                      <p className="text-slate-600 font-inter mb-6 leading-relaxed transition-colors duration-300" data-testid={`service-description-${service.id}`} style={{color: '#164070'}}>
                        {service.description}
                      </p>

                      {/* Feature list with checkmarks */}
                      <ul className="space-y-3 mb-6" data-testid={`service-features-${service.id}`}>
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-green-300">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-slate-600 font-inter text-sm transition-colors duration-300" style={{color: '#164070'}}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service Image */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{backgroundColor: '#d1d5db'}}>
                    <div className="w-full h-80 flex items-center justify-center relative transition-transform duration-500 hover:scale-105">
                      {/* Professional illustration with proper icons */}
                      <div className="text-center p-8">
                        <div className="mb-6">
                          {service.id === 1 && (
                            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center">
                              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                          )}
                          {service.id === 2 && (
                            <div className="w-24 h-24 mx-auto bg-green-100 rounded-2xl flex items-center justify-center">
                              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                          )}
                          {service.id === 3 && (
                            <div className="w-24 h-24 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center">
                              <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                              </svg>
                            </div>
                          )}
                          {service.id === 4 && (
                            <div className="w-24 h-24 mx-auto bg-yellow-100 rounded-2xl flex items-center justify-center">
                              <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                          )}
                          {service.id === 5 && (
                            <div className="w-24 h-24 mx-auto bg-indigo-100 rounded-2xl flex items-center justify-center">
                              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                              </svg>
                            </div>
                          )}
                          {service.id === 6 && (
                            <div className="w-24 h-24 mx-auto bg-pink-100 rounded-2xl flex items-center justify-center">
                              <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="text-slate-600 font-medium text-lg">
                          {service.title} illustration
                        </div>
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                      <div className="text-sm font-bold" style={{color: '#164070'}}>
                        Service #{service.id.toString().padStart(2, '0')}
                      </div>
                    </div>
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