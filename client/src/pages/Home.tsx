import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Home Page - Modern Corporate Minimalism
 * 
 * Design System:
 * - Hero section with background image and overlay
 * - Navy primary color (#1a3a52) for headings and text
 * - Green accent (#22c55e) for CTAs and highlights
 * - Geometric accent lines as visual dividers
 * - Staggered service card layout
 * - Generous whitespace between sections
 */

export default function Home() {
  const services = [
    {
      title: 'Financial Reporting & Advisory',
      description: 'Preparation of general purpose and special purpose financial statements under AASB/IFRS standards.',
      icon: '📊',
    },
    {
      title: 'Bookkeeping and Accounting Services',
      description: 'We manage your day-to-day financial records using industry-leading platforms with accuracy and on schedule.',
      icon: '📋',
    },
    {
      title: 'Payroll Management',
      description: 'Complete payroll management including Single Touch Payroll (STP) Phase 2 reporting to the ATO.',
      icon: '💼',
    },
    {
      title: 'Tax Services',
      description: 'We handle BAS/IAS preparation, GST reporting, and income tax return lodgment with compliance assurance.',
      icon: '📈',
    },
    {
      title: 'Internal Audit Services',
      description: 'We design and execute internal audit plans and evaluate internal controls for operational risks.',
      icon: '🔍',
    },
    {
      title: 'Special Engagements',
      description: 'Tailored financial assignments including financial advisory and bespoke accounting tasks.',
      icon: '⭐',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663494536869/mWVuMzjzkJ472AUKnW9jSz/hero-accounting-professional-hnL2BdSGrsgB6cFfXtYeKA.webp)',
          }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              Keep your books <span className="text-accent">flawless</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 font-medium">
              & Grow with confidence
            </p>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-display font-bold hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
              Get Free Consultation
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <div className="h-1 w-16 bg-accent mb-8"></div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              We believe what we do as a Firm is unique in every way. Our approach to customized services is unmatched by any Firm. Most of all, it's the way we personally care about our clients. Because we believe that when your business succeeds, so will ours and that marks the making of an exceptional long-term relationship.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              TriaxisLedger is a remote accounting practice delivering professional, compliance-driven financial services with a primary focus on Australian businesses and a growing capability to serve clients across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl mb-2">CA</div>
              <p className="text-white/80 font-medium">Chartered Accountant</p>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl mb-2">Global</div>
              <p className="text-white/80 font-medium">Client Reach</p>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl mb-2">7+</div>
              <p className="text-white/80 font-medium">Services Areas</p>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl mb-2">100%</div>
              <p className="text-white/80 font-medium">Remote Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="mb-16">
            <div className="h-1 w-16 bg-accent mb-8"></div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              We deliver a comprehensive suite of professional services, ranging from routine ledger management to sophisticated accounting treatments.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
              Not sure what you need?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              We offer a free 30-minute consultation to understand your accounting challenges and recommend the right solution for your business.
            </p>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-display font-bold hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
              Contact Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
