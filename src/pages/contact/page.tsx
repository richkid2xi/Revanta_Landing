import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    fetch('https://readdy.ai/api/form/d8s0ptsjgj4v45gj7ge0', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          form.reset();
        }, 4000);
      })
      .catch(() => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          form.reset();
        }, 4000);
      });
  };

  return (
    <div className="min-h-screen bg-background-50 flex flex-col relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-gradient-to-bl from-primary-100/40 to-transparent rounded-bl-full -z-10 blur-3xl" />
      
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-32">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary-600 mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary-600" />
              Get in Touch
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[80px] text-foreground-950 font-medium leading-[1.05] tracking-tight max-w-4xl">
              Let's craft <span className="italic font-light text-foreground-600">extraordinary</span> guest experiences together.
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Contact Information */}
            <div className="lg:col-span-4 flex flex-col gap-16">
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-foreground-950 to-transparent" />
                <h3 className="font-sans text-xs uppercase tracking-widest text-foreground-500 mb-6 font-semibold">
                  Global Headquarters
                </h3>
                <address className="not-italic text-foreground-950 font-heading text-2xl leading-relaxed">
                  <p>100 Hospitality Way</p>
                  <p>Suite 400</p>
                  <p>San Francisco, CA 94105</p>
                </address>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-foreground-950 to-transparent" />
                <h3 className="font-sans text-xs uppercase tracking-widest text-foreground-500 mb-6 font-semibold">
                  Direct Inquiries
                </h3>
                <div className="text-foreground-950 font-heading text-xl space-y-4">
                  <p>
                    <a href="mailto:partnerships@revanta.com" className="hover:text-primary-600 transition-colors border-b border-foreground-950/20 hover:border-primary-600 pb-1">
                      partnerships@revanta.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+18005550199" className="hover:text-primary-600 transition-colors border-b border-foreground-950/20 hover:border-primary-600 pb-1">
                      +1 (800) 555-0199
                    </a>
                  </p>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-foreground-950 to-transparent" />
                <h3 className="font-sans text-xs uppercase tracking-widest text-foreground-500 mb-6 font-semibold">
                  Support Hours
                </h3>
                <div className="text-foreground-950 font-heading text-lg space-y-2">
                  <p>Mon – Fri: 8:00 AM — 8:00 PM (EST)</p>
                  <p>Sat – Sun: 9:00 AM — 5:00 PM (EST)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8 bg-background-50/80 backdrop-blur-xl p-8 md:p-14 border border-background-200/50 shadow-2xl shadow-foreground-950/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
              
              <h2 className="font-heading text-3xl md:text-4xl text-foreground-950 mb-10 font-medium">
                Send an Inquiry
              </h2>
              
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full border border-primary-300 flex items-center justify-center mx-auto mb-6 bg-primary-50">
                    <i className="ri-check-line text-primary-600 text-2xl" />
                  </div>
                  <h3 className="font-heading text-3xl text-foreground-950 mb-4">Inquiry Received</h3>
                  <p className="text-foreground-600 font-sans text-lg max-w-md mx-auto">
                    Thank you for your interest in Revanta. A member of our partnerships team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  id="contact-form"
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="space-y-8 font-sans"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder=" "
                        className="peer w-full h-14 bg-transparent border-b-2 border-background-300 text-foreground-950 text-lg focus:outline-none focus:border-primary-500 transition-colors rounded-none placeholder-transparent"
                      />
                      <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm font-semibold tracking-wider text-foreground-500 uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary-600">
                        Full Name
                      </label>
                    </div>
                    <div className="space-y-3 relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder=" "
                        className="peer w-full h-14 bg-transparent border-b-2 border-background-300 text-foreground-950 text-lg focus:outline-none focus:border-primary-500 transition-colors rounded-none placeholder-transparent"
                      />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm font-semibold tracking-wider text-foreground-500 uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary-600">
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3 relative">
                    <input
                      id="hotel"
                      name="hotel"
                      type="text"
                      placeholder=" "
                      className="peer w-full h-14 bg-transparent border-b-2 border-background-300 text-foreground-950 text-lg focus:outline-none focus:border-primary-500 transition-colors rounded-none placeholder-transparent"
                    />
                    <label htmlFor="hotel" className="absolute left-0 -top-3.5 text-sm font-semibold tracking-wider text-foreground-500 uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary-600">
                      Property / Hotel Name
                    </label>
                  </div>

                  <div className="space-y-3 relative pt-4">
                    <label htmlFor="subject" className="block text-xs font-semibold tracking-wider text-foreground-500 uppercase mb-2">
                      Subject of Inquiry
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full h-14 bg-transparent border-b-2 border-background-300 text-foreground-950 text-lg focus:outline-none focus:border-primary-500 transition-colors rounded-none appearance-none cursor-pointer pl-0"
                      >
                        <option value="" disabled selected className="bg-background-50 text-foreground-950">Please select...</option>
                        <option value="demo" className="bg-background-50 text-foreground-950">Request a Demonstration</option>
                        <option value="pricing" className="bg-background-50 text-foreground-950">Pricing & Plans</option>
                        <option value="support" className="bg-background-50 text-foreground-950">Client Support</option>
                        <option value="partnership" className="bg-background-50 text-foreground-950">Strategic Partnership</option>
                        <option value="other" className="bg-background-50 text-foreground-950">Other</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-foreground-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3 relative pt-4">
                    <label htmlFor="message" className="block text-xs font-semibold tracking-wider text-foreground-500 uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-background-300 text-foreground-950 text-lg focus:outline-none focus:border-primary-500 transition-colors rounded-none resize-none"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center px-12 h-14 bg-foreground-950 hover:bg-primary-600 text-background-50 hover:text-white font-sans text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                      <span className="relative z-10 flex items-center gap-3 transition-transform group-hover:-translate-y-px">
                        Submit Inquiry
                        <i className="ri-arrow-right-line" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
