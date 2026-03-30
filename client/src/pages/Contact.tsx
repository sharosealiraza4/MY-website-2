import { useState } from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Contact Page - Modern Corporate Minimalism
 * 
 * Design System:
 * - Hero section with compelling headline
 * - Contact form with validation
 * - Direct contact information
 * - Social media links
 * - Navy primary color for structure
 * - Green accent for CTAs
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50"></div>
        </div>

        <div className="relative container h-full flex items-center">
          <div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Let's talk about your accounting needs.
            </h1>
            <p className="text-xl text-white/90">
              Fill in the form or reach out directly. We'll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="h-1 w-12 bg-accent mb-8"></div>
              <h2 className="font-display font-bold text-2xl text-primary mb-8">
                Get in touch
              </h2>

              {/* Email */}
              <div className="mb-8">
                <h3 className="font-display font-bold text-primary mb-3">Email</h3>
                <a
                  href="mailto:info@triaxisledger.com"
                  className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail size={20} className="text-accent" />
                  <span>info@triaxisledger.com</span>
                </a>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="font-display font-bold text-primary mb-3">Phone</h3>
                <a
                  href="tel:+61234567890"
                  className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone size={20} className="text-accent" />
                  <span>+61 (2) 3456 7890</span>
                </a>
              </div>

              {/* Social */}
              <div className="mb-8">
                <h3 className="font-display font-bold text-primary mb-3">Follow us</h3>
                <a
                  href="#"
                  className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                >
                  <Linkedin size={20} className="text-accent" />
                  <span>Triaxis Ledger</span>
                </a>
              </div>

              {/* Hours */}
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-display font-bold text-primary mb-3">Business Hours</h3>
                <p className="text-foreground/70 text-sm mb-2">Monday - Friday</p>
                <p className="text-foreground/70 text-sm">9:00 AM - 5:00 PM AEST</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white resize-none"
                    placeholder="Tell us about your accounting needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-display font-bold hover:bg-accent/90 transition-colors"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="p-4 bg-accent/10 border border-accent rounded-lg">
                    <p className="text-accent font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="mb-12">
            <div className="h-1 w-12 bg-accent mb-8"></div>
            <h2 className="font-display font-bold text-3xl text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'How quickly will you respond to my inquiry?',
                a: 'We aim to respond to all inquiries within one business day during our business hours (Monday-Friday, 9 AM - 5 PM AEST).',
              },
              {
                q: 'Do you offer a free consultation?',
                a: 'Yes! We offer a free 30-minute consultation to understand your accounting challenges and recommend the right solution.',
              },
              {
                q: 'Are your services available internationally?',
                a: 'Yes, we serve clients across Australia and have a growing capability to serve clients globally.',
              },
              {
                q: 'What is your pricing model?',
                a: 'We offer customized pricing based on your specific accounting needs. Contact us for a personalized quote.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="font-display font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
