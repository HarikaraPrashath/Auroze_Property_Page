'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { getWhatsAppMessageUrl } from '@/lib/site-config';

const subjectLabels: Record<string, string> = {
  'property-inquiry': 'Property Inquiry',
  'rent-management': 'Rent Management Services',
  maintenance: 'Maintenance Services',
  'tenant-management': 'Tenant Management',
  'legal-support': 'Legal & Compliance',
  other: 'Other',
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setMessage('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    const whatsappMessage = `Hello, I want to contact you:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nSubject: ${subjectLabels[formData.subject] ?? formData.subject}\nMessage: ${formData.message}`;
    const whatsappUrl = getWhatsAppMessageUrl(whatsappMessage);
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (!opened) {
      setStatus('error');
      setMessage('Please allow pop-ups so we can open WhatsApp.');
      return;
    }

    setStatus('success');
    setMessage('Opening WhatsApp with your message.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    window.setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background rounded-xl border border-border p-8 space-y-6">
      {/* Status Messages */}
      {status === 'success' && (
        <Alert className="bg-green-500/10 border-green-500/30">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            {message}
          </AlertDescription>
        </Alert>
      )}

      {status === 'error' && (
        <Alert className="bg-red-500/10 border-red-500/30">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            {message}
          </AlertDescription>
        </Alert>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className="bg-background border-border"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className="bg-background border-border"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+94 XX XXX XXXX"
          value={formData.phone}
          onChange={handleChange}
          className="bg-background border-border"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Select a subject...</option>
          <option value="property-inquiry">Property Inquiry</option>
          <option value="rent-management">Rent Management Services</option>
          <option value="maintenance">Maintenance Services</option>
          <option value="tenant-management">Tenant Management</option>
          <option value="legal-support">Legal & Compliance</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your inquiry..."
          value={formData.message}
          onChange={handleChange}
          className="bg-background border-border min-h-32"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white"
        size="lg"
      >
        Send Message
      </Button>

      {/* Additional Info */}
      <p className="text-center text-sm text-muted-foreground">
        We typically respond within 24 hours. For urgent matters, please call us or use WhatsApp.
      </p>
    </form>
  );
}
