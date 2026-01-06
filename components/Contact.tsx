import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { MapPin, Phone, Send } from 'lucide-react';


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you ${formData.name}. We will contact you shortly.`);
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-optarix-blue">Get Started with Optarix Research</h2>
              <p className="text-gray-600 mt-4 text-lg">
                Ready to transform your recruitment process? Schedule a consultation to discuss how our AI-enhanced engine can build your team faster.
              </p>
            </Reveal>


            <Reveal delay={200}>
              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-optarix-light p-3 rounded-full text-optarix-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+91 9818962797</p>
                  </div>
                </div>


                <div className="flex items-start space-x-4">
                  <div className="bg-optarix-light p-3 rounded-full text-optarix-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Location</h4>
                    <p className="text-gray-600">Delhi, India</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>


          {/* Form */}
          <Reveal delay={300}>
            <div className="bg-optarix-light p-8 rounded-3xl shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name *</label>
                  <input 
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address *</label>
                  <input 
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                    placeholder="john@company.com"
                  />
                </div>


                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">Company *</label>
                    <input 
                      type="text" id="company" name="company" required
                      value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                    <input 
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                      placeholder="Optional"
                    />
                  </div>
                </div>


                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message *</label>
                  <textarea 
                    id="message" name="message" required rows={4}
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                    placeholder="Tell us about your hiring needs..."
                  ></textarea>
                </div>


                <button 
                  type="submit"
                  className="w-full bg-optarix-coral hover:bg-red-500 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-md flex items-center justify-center"
                >
                  Schedule Your Consultation <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </Reveal>


        </div>
      </div>
    </section>
  );
};