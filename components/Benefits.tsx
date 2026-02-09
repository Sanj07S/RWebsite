import React from "react";
import { Reveal } from "./Reveal";
import { Clock, Users, Target, DollarSign, Award, Repeat } from "lucide-react";
import { StatItem } from "../types";

const stats: (StatItem & { icon: any })[] = [
  {
    value: "71.4%",
    label: "Faster Hiring",
    description: "16 days average vs 31 days",
    icon: Clock,
  },
  {
    value: "10X",
    label: "More passive talent candidate volume",
    description: "Access to passive talent",
    icon: Users,
  },
  {
    value: "12X",
    label: "Better Quality",
    description: "High-precision candidates",
    icon: Award,
  },
  {
    value: "97.5%",
    label: "Start Leading Talent Strategy",
    description: "Talent mapping accuracy",
    icon: Target,
  },
  {
    value: "60%",
    label: "Highly cost effective",
    description: "Reduced cost per hire",
    icon: DollarSign,
  },
  {
    value: "91%",
    label: "Stop Managing Bottlenecks",
    description: "First-year retention",
    icon: Repeat,
  },
];

export const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="py-24 bg-optarix-blue text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-optarix-cyan rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-optarix-purple rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              {" "}
              Unlock More <span className="text-optarix-cyan">Quality </span>
              Talent
            </h2>
            <p className="text-gray-300 text-lg">
              Optarix Research provides measurable outcomes that fundamentally
              improve your recruitment ROI. Efficiency gains without sacrificing
              the quality necessary for long-term success.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 flex items-start space-x-4">
                <div className="bg-optarix-coral/20 p-3 rounded-lg text-optarix-coral">
                  <stat.icon size={28} />
                </div>
                <div>
                  <div className="text-4xl font-bold font-heading text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-optarix-cyan font-semibold text-sm uppercase tracking-wider mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Reveal delay={600}>
            <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Long-Term Value
              </h3>
              <p className="text-gray-300 text-center">
                Clients report an average retention for permanent hires standing
                at{" "}
                <span className="text-white font-bold text-xl">4.3 years</span>.
                This success is rooted in our AI-human collaboration
                partnership.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
