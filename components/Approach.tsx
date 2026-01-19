import React from 'react';
import { Reveal } from './Reveal';
import { Power, FileSearch, Mail, Users, CheckCircle } from 'lucide-react';
 
const steps = [
  {
    icon: rocket-launch,
    title: "Instant Launch",
    desc: "Start your search in minutes by sharing key job details.",
    color: "bg-blue-500"
  },
  {
    icon: filter-list,
    title: "Ranked Shortlist",
    desc: "View a list of candidates precision-matched and ranked for your specific vacancy.",
    color: "bg-cyan-500"
  },
  {
    icon: lock-open,
    title: "Unlock the High-Velocity Talent Pipeline ",
    desc: "Receive CVs from pre-screened candidates who have already confirmed their interest in the role.",
    color: "bg-purple-500"
  },
  {
    icon: Users,
    title: "Interview Candidates",
    desc: "Human teams handle high-touch vetting, negotiation, and structured interviews.",
    color: "bg-indigo-600"
  },
  {
    icon: CheckCircle,
    title: "Rapid Placement",
    desc: "Final placement achieved efficiently, targeting the 16-day mark.",
    color: "bg-optarix-coral"
  }
];
 
export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-white">
      <div className="container mx-auto px-6">
       
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-optarix-blue">Built for Speed</h2>
            <p className="text-xl text-optarix-purple font-medium mt-2">Your 18-Day Hiring Cycle</p>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              We combine the power of AI with specialized human oversight. The machine handles scale and pattern recognition; our experts ensure calibration and the ethical call.
            </p>
          </Reveal>
        </div>
 
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 rounded-full"></div>
 
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 150} width="100%">
                <div className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 
                  {/* Content Side */}
                  <div className="w-full md:w-5/12 mb-6 md:mb-0">
                    <div className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                      <h3 className="text-xl font-bold text-optarix-blue mb-2 flex items-center gap-2 justify-center md:justify-start">
                        <span className="md:hidden bg-gray-100 text-gray-800 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">{index + 1}</span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
 
                  {/* Icon/Center Marker */}
                  <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center z-10 mx-auto">
                     <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${step.color} flex items-center justify-center text-white`}>
                        <step.icon size={20} />
                     </div>
                     <div className="absolute top-0 -right-2 bg-optarix-blue text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                       {index + 1}
                     </div>
                  </div>
 
                  {/* Empty Side for spacing */}
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                 
                </div>
              </Reveal>
            ))}
          </div>
 
        </div>
 
      </div>
    </section>
  );
};
