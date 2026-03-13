import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - ProManage',
  description: 'Get in touch with ProManage. Reach us via phone, email, WhatsApp, or contact form.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Reach out through any of our contact channels
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a href="tel:+94XXXXXXXXX" className="text-primary hover:text-primary/80 transition-colors">
                +94 XXXXXXXXX
              </a>
              <p className="text-xs text-muted-foreground mt-2">Available during business hours</p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20 hover:border-secondary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:info@promanage.lk" className="text-secondary hover:text-secondary/80 transition-colors">
                info@promanage.lk
              </a>
              <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/94XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                +94 XXXXXXXXX
              </a>
              <p className="text-xs text-muted-foreground mt-2">Quick responses 24/7</p>
            </div>

            {/* Location */}
            <div className="p-6 rounded-xl bg-foreground/5 border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-foreground text-sm">Colombo 3, Sri Lanka</p>
              <p className="text-xs text-muted-foreground mt-2">Visit our office</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-foreground/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-2">
                <p className="text-foreground">
                  <span className="font-semibold">Monday - Friday:</span> 8:30 AM - 5:30 PM
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">Saturday:</span> 9:00 AM - 2:00 PM
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  Emergency services available 24/7 for tenants and property owners
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-secondary/5 border border-secondary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Response</h3>
              <ul className="space-y-2 text-foreground">
                <li>✓ Phone: Response within 30 minutes</li>
                <li>✓ Email: Response within 24 hours</li>
                <li>✓ WhatsApp: Immediate response</li>
                <li>✓ Emergencies: 24/7 support hotline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
