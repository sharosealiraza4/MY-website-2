import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Services Page - Modern Corporate Minimalism
 * 
 * Design System:
 * - Detailed service descriptions with supporting imagery
 * - Navy primary color for headings and structure
 * - Green accent for CTAs and highlights
 * - Two-column layout alternating image and text
 * - Generous whitespace and clear hierarchy
 */

export default function Services() {
  const serviceDetails = [
    {
      title: 'Financial Reporting',
      description: 'Preparation of general purpose and special purpose financial statements under AASB/IFRS standards. Includes management accounts, trial balance, profit & loss, balance sheet, and cash flow statements.',
      features: [
        'AASB/IFRS compliant statements',
        'Management accounts preparation',
        'Trial balance and reconciliations',
        'Profit & loss analysis',
        'Balance sheet preparation',
        'Cash flow statements',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663494536869/mWVuMzjzkJ472AUKnW9jSz/service-financial-reporting-fCVsf4FEzMJFfoAyBWworM.webp',
    },
    {
      title: 'Bookkeeping',
      description: 'We manage your day-to-day financial records using industry-leading platforms. Reconciliations, ledger maintenance, accounts payable/receivable, and monthly reporting — all handled accurately and on schedule.',
      features: [
        'Daily ledger management',
        'Bank reconciliations',
        'Accounts payable/receivable',
        'Monthly financial reporting',
        'Industry-leading platforms',
        'Accurate and timely delivery',
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663494536869/mWVuMzjzkJ472AUKnW9jSz/service-bookkeeping-GvFzRQW9kXcektZ2rnu6tw.webp',
    },
    {
      title: 'Payroll Services',
      description: 'Complete payroll management including Single Touch Payroll (STP) Phase 2 reporting to the ATO, superannuation guarantee (SG) calculations, PAYG withholding, and employee payslip preparation.',
      features: [
        'Single Touch Payroll (STP) Phase 2',
        'ATO reporting and compliance',
        'Superannuation guarantee calculations',
        'PAYG withholding management',
        'Employee payslip preparation',
        'Payroll compliance assurance',
      ],
      image: null,
    },
    {
      title: 'Internal Audit Services',
      description: 'We design and execute internal audit plans, evaluate internal controls, identify operational risks, and provide management with actionable recommendations for process improvement.',
      features: [
        'Internal audit planning',
        'Control evaluation',
        'Risk identification',
        'Process improvement recommendations',
        'Management reporting',
        'Compliance assessment',
      ],
      image: null,
    },
    {
      title: 'Tax Services',
      description: 'We handle BAS/IAS preparation, GST reporting, income tax return lodgment for individuals and companies, and ongoing ATO correspondence. We ensure you never miss a deadline or lodgment obligation.',
      features: [
        'BAS/IAS preparation',
        'GST reporting',
        'Income tax returns',
        'ATO correspondence',
        'Deadline management',
        'Compliance assurance',
      ],
      image: null,
    },
    {
      title: 'Special Engagements',
      description: 'Tailored financial assignments, including financial advisory, Accounting workings, Reconciliations and any bespoke accounting tasks your business requires.',
      features: [
        'Financial advisory',
        'Accounting workings',
        'Reconciliations',
        'Custom engagements',
        'Specialized projects',
        'Flexible solutions',
      ],
      image: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663494536869/mWVuMzjzkJ472AUKnW9jSz/background-abstract-finance-WX7v5LRURvVmZcbfSkz9yM.webp)',
          }}
        ></div>
        <div className="relative container h-full flex items-center">
          <div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Comprehensive accounting solutions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We deliver a comprehensive suite of professional services, ranging from routine ledger management to sophisticated accounting treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 md:py-28">
        <div className="container space-y-24">
          {serviceDetails.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              {service.image && (
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Content */}
              <div className={index % 2 === 1 && service.image ? 'md:order-1' : ''}>
                <div className="h-1 w-12 bg-accent mb-6"></div>
                <h2 className="font-display font-bold text-3xl text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent-foreground text-xs font-bold">✓</span>
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-display font-bold hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation with our team to discuss your accounting needs.
          </p>
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-display font-bold hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
            Book a Free Call
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
