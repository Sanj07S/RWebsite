import React from 'react';
import { ChevronRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Reveal } from './Reveal';
 
export const Hero: React.FC = () => {
  // Smooth scroll handler function
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-optarix-blue overflow-hidden pt-20">
     
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-optarix-dark to-transparent opacity-50 z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-optarix-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-24 right-24 w-72 h-72 bg-optarix-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
 
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
       
        {/* Content */}
        <div className="text-white space-y-8">
         
          <Reveal delay={200}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-optarix-cyan to-optarix-purple">Precision</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mt-2 text-gray-200">
              AI-Enhanced Executive Search And Recruitment
            </h2>
          </Reveal>
 
          <Reveal delay={400}>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Optarix Research is led by a skilled professional with over fifteen years of experience in executive search and recruitment.
              We shift the conversation from "effort and luck" to predictable, scalable outcomes,
              guaranteeing faster hiring and exceptional quality by leveraging AI as your central strategic partner.
            </p>
          </Reveal>
 
          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="bg-optarix-coral hover:bg-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center group"
              >
                Schedule a Consultation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
 
          <Reveal delay={800}>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex flex-col items-start">
                 <ShieldCheck className="w-6 h-6 text-optarix-cyan mb-2" />
                 <span className="text-sm font-bold">15+ Years</span>
                 <span className="text-xs text-gray-400">Experience</span>
              </div>
              <div className="flex flex-col items-start">
                 <TrendingUp className="w-6 h-6 text-optarix-cyan mb-2" />
                 <span className="text-sm font-bold">Fortune 500</span>
                 <span className="text-xs text-gray-400">Proven Track Record</span>
              </div>
              <div className="flex flex-col items-start">
                 <Users className="w-6 h-6 text-optarix-cyan mb-2" />
                 <span className="text-sm font-bold">AI-Powered</span>
                 <span className="text-xs text-gray-400">Precision Matching</span>
              </div>
            </div>
          </Reveal>
        </div>
 
        {/* Visual/Image Area - Fully Responsive */}
        <div className="relative mt-12 md:mt-0 flex justify-center items-center">
          <Reveal delay={500}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-optarix-cyan/20 group w-full">
              <picture>
                {/* Mobile: 600px width */}
                <source
                  media="(max-width: 640px)"
                  srcSet="https://i.ibb.co/r2X9JLfK/5.jpg"
                />
                {/* Tablet: 900px width */}
                <source
                  media="(max-width: 1024px)"
                  srcSet="https://i.ibb.co/r2X9JLfK/5.jpg"
                />
                {/* Desktop: Full resolution */}
                <img
                  src="https://i.ibb.co/r2X9JLfK/5.jpg"
                  alt="AI Recruitment Brain Network Visualization"
                  className="rounded-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="1200"
                  height="1200"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-tr from-optarix-blue/20 to-transparent pointer-events-none mix-blend-overlay"></div>
            </div>
          </Reveal>
        </div>
 
      </div>
    </section>
  );
};
