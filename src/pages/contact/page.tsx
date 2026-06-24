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
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-3 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-6 h-px bg-foreground-400" />
              Get in touch
            </span>
            <h1 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05] mb-4">
              Let us help you listen to your guests
            </h1>
            <p className="text-foreground-700 text-[15px] md:text-base leading-relaxed max-w-xl">
              Whether you want a demo, have questions about pricing, or need help getting started — we would love to hear from you.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-background-200 bg-background-100/60 p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-5">
                <i className="ri-check-line text-primary-600 text-2xl" />
              </div>
              <h2 className="font-heading text-2xl text-foreground-950 font-semibold mb-2">Message sent</h2>
              <p className="text-foreground-600 text-[15px] leading-relaxed">
                Thanks for reaching out. We typically respond within a few hours during business days.
              </p>
            </div>
          ) : (
            <form
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-background-200 bg-background-100/60 p-6 md:p-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[13px] font-medium text-foreground-800">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="h-11 px-4 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[13px] font-medium text-foreground-800">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-11 px-4 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
                    placeholder="you@hotel.com"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-1.5">
                <label htmlFor="hotel" className="text-[13px] font-medium text-foreground-800">Hotel name</label>
                <input
                  id="hotel"
                  name="hotel"
                  type="text"
                  className="h-11 px-4 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
                  placeholder="Your hotel or property name"
                />
              </div>
              <div className="mt-5 flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-[13px] font-medium text-foreground-800">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="h-11 px-4 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors cursor-pointer"
                >
                  <option value="">Select a topic</option>
                  <option value="demo">Request a demo</option>
                  <option value="pricing">Pricing inquiry</option>
                  <option value="support">Technical support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mt-5 flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[13px] font-medium text-foreground-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={500}
                  rows={5}
                  className="px-4 py-3 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your hotel and what you are looking for..."
                />
                <span className="text-[11px] text-foreground-500 text-right">Max 500 characters</span>
              </div>
              <button
                type="submit"
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Send message
                <i className="ri-send-plane-line text-[14px]" />
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
