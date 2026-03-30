import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Footer Component - Modern Corporate Minimalism
 * 
 * Design System:
 * - Navy background (#1a3a52) for professional appearance
 * - White text for high contrast and readability
 * - Green accent (#22c55e) for interactive elements
 * - Service links organized in columns
 * - Social media and contact information
 */

export default function Footer() {
  const services = [
    'Financial Reporting & Advisory',
    'Bookkeeping and Accounting Services',
    'Payroll Management',
    'Tax Services',
    'Internal Audit Services',
    'Consultation',
    'Special Engagements',
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-sm">T</span>
              </div>
              <span className="font-display font-bold text-lg">Triaxis Ledger</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              We believe what we do as a Firm is unique in every way. Our approach to customized services is unmatched by any Firm.
            </p>
          </div>

          {/* Services Column 1 */}
          <div>
            <h3 className="font-display font-bold text-base mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 opacity-0">Services</h3>
            <ul className="space-y-2">
              {services.slice(4).map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display font-bold text-base mb-4">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@triaxisledger.com"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
              >
                <Mail size={16} />
                info@triaxisledger.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
              >
                <Linkedin size={16} />
                Triaxis Ledger
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2026 Triaxis Ledger. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
