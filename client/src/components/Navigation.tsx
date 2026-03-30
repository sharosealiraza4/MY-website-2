import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Navigation Component - Modern Corporate Minimalism
 * 
 * Design System:
 * - Navy primary color (#1a3a52) for brand identity
 * - Green accent (#22c55e) for interactive elements
 * - Clean, minimal layout with generous whitespace
 * - Responsive design: mobile hamburger menu, desktop horizontal nav
 */

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Services', href: '/services' },
    { label: 'About us', href: '/about' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-display font-bold text-primary text-lg hidden sm:inline">
            Triaxis Ledger
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Search size={20} className="text-foreground" />
          </button>

          {/* CTA Button - Desktop */}
          <button className="hidden sm:block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors">
            Get Free Consultation
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors mt-2">
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
