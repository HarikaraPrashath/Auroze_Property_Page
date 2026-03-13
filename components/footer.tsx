'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                PM
              </div>
              <span className="font-bold text-lg text-foreground">ProManage</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional property management and rental services in Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#rent-payment" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Rent & Payment
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#tenant" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tenant Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+94XXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +94 XXXXXXXXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@promanage.lk" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@promanage.lk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://wa.me/94XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.265c-1.524.756-2.925 1.785-4.056 3.025C1.07 10.768.427 12.534.427 14.405c0 1.87.542 3.636 1.571 5.157L.973 23.5l5.289-1.379c1.452.792 3.1 1.206 4.719 1.206h.004c5.442 0 9.867-4.414 9.868-9.832.001-2.63-.997-5.101-2.808-6.967A9.885 9.885 0 0011.551 6.98z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ProManage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
