import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { MapPin, Phone, Send, Loader2 } from "lucide-react";

// Helper function to encode data for Netlify
const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        setStatus("error");
        alert("Sorry, something went wrong. Please try again.");
        console.error(error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-optarix-blue">
                Get Started with Optarix Research
              </h2>
              <p className="text-gray-600 mt-4 text-lg">
                Ready to transform your recruitment process? Schedule a
                consultation to discuss how our AI-enhanced engine can build
                your team faster.
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
              {/* IMPORTANT: This form tag includes data-netlify="true" 
                  and the hidden input below is required for Netlify to detect it.
              */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                name="contact"
                data-netlify="true"
              >
                {/* Hidden input for Netlify bot detection */}
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="company"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-optarix-cyan focus:ring-1 focus:ring-optarix-cyan transition-colors"
                    placeholder="Tell us about your hiring needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-optarix-coral hover:bg-red-500 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      Sending...{" "}
                      <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Schedule Your Consultation{" "}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
                {status === "success" && (
                  <p>Thank You, your message submitted !</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
