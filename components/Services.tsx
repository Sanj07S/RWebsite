import React from 'react';
import { Search, Globe, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';


export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-optarix-light relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-optarix-blue mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-optarix-coral mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">
              Comprehensive solutions tailored for speed, scale, and precision.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <Reveal delay={200}>
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-optarix-cyan h-full flex flex-col">
              <div className="w-14 h-14 bg-optarix-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-optarix-blue transition-colors">
                <Search className="w-8 h-8 text-optarix-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-optarix-blue mb-4">
                In-Depth Research-Based Executive Search
              </h3>
              <p className="text-gray-600">
                We specialize in identifying and recruiting top-tier leadership
                talent and specialized roles that drive business growth. By
                leveraging advanced search methodologies and
                in-depth research, we ensure a faster turnaround time tailored
                to align with your company's vision and culture.
              </p>
            </div>
          </Reveal>

          {/* Service 2 */}
          <Reveal delay={400}>
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-optarix-purple h-full flex flex-col">
              <div className="w-14 h-14 bg-optarix-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-optarix-purple transition-colors">
                <Globe className="w-8 h-8 text-optarix-purple group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-optarix-blue mb-4">
                End-to-End Recruitment Solutions with Systematic Precision
              </h3>
              <p className="text-gray-600">
                From sourcing and screening to onboarding, we manage the entire
                hiring lifecycle. Our tech-enabled process
                tech-enabled process accesses huge, untapped passive talent
                pools—providing 10x candidate volume. We deliver customized
                talent solutions that ensure faster hiring and reduced costs.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
