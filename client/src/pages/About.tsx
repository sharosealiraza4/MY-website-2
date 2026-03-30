import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * About Page - Modern Corporate Minimalism
 * 
 * Design System:
 * - Hero section with compelling headline
 * - Mission statement with supporting statistics
 * - Company values and core competencies
 * - Navy primary color for authority and trust
 * - Green accents for highlights and emphasis
 */

export default function About() {
  const competencies = [
    {
      title: 'Financial Statements Preparation',
      description: 'Technical Mastery. Expert preparation of full-scope Financial Statements and complex disclosures. We ensure every note is technically precise and compliant with IFRS and GAAP for international reporting and consolidation.',
    },
    {
      title: 'Audit Support & Readiness',
      description: 'Precision in Preparation. We bridge the gap between raw data and a clean audit. Our team specializes in preparing audit-ready workpapers and lead sheets that align with ISAs.',
    },
    {
      title: 'Managed Financial Services',
      description: 'Your Outsourced Finance Hub. From complex reconciliations to BAS/GST filings and payroll management, we provide a complete, scalable finance function.',
    },
  ];

  const values = [
    { label: 'Precision', icon: '🎯' },
    { label: 'Compliance', icon: '✓' },
    { label: 'Accuracy', icon: '📊' },
    { label: 'Strategy', icon: '📈' },
  ];

  const standards = [
    { label: 'IFRS', icon: '📋' },
    { label: 'GAAP', icon: '📊' },
    { label: 'ISAs', icon: '✓' },
    { label: 'AASB', icon: '📈' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50"></div>
        </div>

        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              Cross-border expertise.
            </h1>
            <p className="text-2xl text-white/90 font-medium">
              Committed to your financial success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="h-1 w-12 bg-accent mb-8"></div>
              <h2 className="font-display font-bold text-3xl text-primary mb-6">
                Our mission
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To provide businesses across Australia and the world with the financial clarity and compliance confidence they deserve — through accurate, timely, and professionally delivered accounting services.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="font-display font-bold text-3xl text-primary mb-2">CA</div>
                <p className="text-foreground/70 font-medium">Chartered Accountant</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="font-display font-bold text-3xl text-primary mb-2">Global</div>
                <p className="text-foreground/70 font-medium">Client Reach</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="font-display font-bold text-3xl text-primary mb-2">7+</div>
                <p className="text-foreground/70 font-medium">Services Areas</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="font-display font-bold text-3xl text-primary mb-2">100%</div>
                <p className="text-foreground/70 font-medium">Remote Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-3xl mb-6 border-b-2 border-accent pb-4">
                Who we are
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                TriaxisLedger is a remote accounting practice delivering professional, compliance-driven financial services — with a primary focus on Australian businesses and a growing capability to serve clients across the globe.
              </p>
              <p className="text-white/80 leading-relaxed">
                Our model is straightforward: bring the rigour and expertise of a qualified Chartered Accountant to your business at a price that makes sense — delivered entirely remotely, securely, and on your schedule.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl mb-6 border-b-2 border-accent pb-4">
                Our global practice
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                TriaxisLedger is a premier international accounting consultancy engineered to deliver high-calibre Audit, Tax, and Strategic Accounting solutions to an evolving global market.
              </p>
              <p className="text-white/80 leading-relaxed">
                We serve as a vital bridge between complex regulatory frameworks and the operational success of our clients — delivering the financial governance and strategic foresight typically reserved for the world's largest accounting networks.
              </p>
            </div>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20">
            {standards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{standard.icon}</div>
                <p className="font-medium">{standard.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="mb-16">
            <div className="h-1 w-12 bg-accent mb-8"></div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Precision | Compliance & Strategy
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Our core values serve as the foundational framework for every engagement. Triaxis Ledger is committed to the highest standards of integrity, transparency, and technical precision.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-xl text-primary">{value.label}</h3>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-16">
            <h2 className="font-display font-bold text-3xl text-primary mb-12">
              Our Core Competencies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {competencies.map((comp, index) => (
                <div key={index} className="bg-secondary p-8 rounded-lg">
                  <h3 className="font-display font-bold text-xl text-primary mb-4">
                    {comp.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Experience the difference
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you achieve financial clarity and compliance confidence with our comprehensive accounting services.
          </p>
          <button className="px-8 py-3 bg-accent-foreground text-accent rounded-lg font-display font-bold hover:opacity-90 transition-opacity">
            Get Service Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
