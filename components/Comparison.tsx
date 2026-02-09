import React from 'react';
import { Reveal } from './Reveal';
import { X, Check } from 'lucide-react';


export const Comparison: React.FC = () => {
  return (
    <section id="difference" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-optarix-blue">
              Stop Managing Bottlenecks
            </h2>
            <p className="text-xl text-gray-600 mt-3">
              Start Leading Talent Strategy
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Way */}
          <Reveal delay={100}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-400 h-full opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Traditional Recruitment
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">
                    Manual sourcing is slow and inconsistent
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">
                    Limited to shallow, active talent pools
                  </span>
                </li>
                {/* <li className="flex items-start space-x-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">High variable placement fees</span>
                </li> */}
                <li className="flex items-start space-x-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">
                    Vulnerable to subjective screening bias
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">
                    31+ days average time to hire
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Optarix Way */}
          <Reveal delay={300}>
            <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-optarix-cyan transform md:-translate-y-4 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 bg-optarix-cyan text-optarix-blue text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold text-optarix-blue mb-6 text-center">
                The Optarix Research Model
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check
                    className="text-optarix-cyan flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    <strong>Tech-enabled</strong>, deep-market sourcing
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    className="text-optarix-cyan flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Access to 10X volume in passive pools
                  </span>
                </li>
                {/* <li className="flex items-start space-x-3">
                  <Check
                    className="text-optarix-cyan flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Predictable monthly subscription model
                  </span>
                </li>*/}
                <li className="flex items-start space-x-3">
                  <Check
                    className="text-optarix-cyan flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Structured screening reduces bias
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    className="text-optarix-cyan flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    20 days average time to hire
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
