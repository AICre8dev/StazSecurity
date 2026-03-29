import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Star, Facebook, Instagram, Twitter } from 'lucide-react';

interface ContactFormProps {
  isDark: boolean;
}

export default function ContactForm({ isDark }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const hostname = window.location.hostname;
    const projectSlug = hostname.split('.')[0].replace('preview--', '');

    try {
      const response = await fetch('https://aicre8.dev/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: projectSlug,
          userId: '00000000-0000-0000-0000-000000000000',
          formName: 'security-quote',
          formType: 'lead',
          formData: { name, email, phone, service, message },
          pageUrl: window.location.href,
          source_hostname: hostname,
          source_url: window.location.href,
          referrer: document.referrer,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setService('');
        setMessage('');
      } else {
        setError(result.error || 'Failed to submit. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full rounded-lg px-4 py-3.5 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${
    isDark
      ? 'bg-dark-600 border border-white/10 text-white placeholder-gray-500'
      : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400'
  }`;

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${
      isDark ? 'bg-dark-800' : 'bg-white'
    }`}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold font-body uppercase tracking-[0.2em] text-sm">
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading mt-4 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Request a <span className="text-primary">Free Quote</span>
          </h2>
          <p className={`text-lg font-body mt-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Tell us about your security needs and our team will get back to you with a tailored solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className={`rounded-2xl p-8 space-y-6 border ${
              isDark ? 'bg-dark-700/50 border-white/5' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <h3 className={`text-2xl font-bold font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Starz Security
                </h3>
              </div>
              <p className={`font-body leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Reach out to our security experts for a free consultation and bespoke security plan tailored to your needs.
              </p>

              <div className="space-y-5">
                <a href="mailto:mail@example.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className={`text-sm font-body ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email Us</div>
                    <div className={`font-bold font-body ${isDark ? 'text-white' : 'text-gray-900'}`}>mail@example.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className={`text-sm font-body ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Location</div>
                    <div className={`font-bold font-body ${isDark ? 'text-white' : 'text-gray-900'}`}>United Kingdom</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={`pt-4 border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
                <p className={`text-sm font-body mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
              <h4 className={`font-bold font-heading text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why Choose Starz Security?
              </h4>
              <ul className="space-y-3">
                {[
                  'SIA Licensed & Fully Insured',
                  'Tailored Security Solutions',
                  'Highly Trained & Experienced Staff',
                  'UK-Wide Coverage',
                  'Professional & Trustworthy',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold font-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className={`rounded-2xl p-8 sm:p-10 border ${
              isDark ? 'bg-dark-700/50 border-white/5' : 'bg-gray-50 border-gray-200'
            }`}>
              {success ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className={`text-2xl font-bold font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Thank You!
                  </h3>
                  <p className={`font-body max-w-md mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your request has been submitted successfully. Our security team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-primary font-bold font-body hover:underline mt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className={`text-2xl font-bold font-heading mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Tell Us About Your Security Needs
                  </h3>
                  <p className={`font-body mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Fill in the form below and we'll get back to you with a tailored security plan.
                  </p>

                  {error && (
                    <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-red-400 text-sm font-body">{error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block font-semibold font-body text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="John Smith"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={`block font-semibold font-body text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="john@example.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block font-semibold font-body text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7XXX XXXXXX"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={`block font-semibold font-body text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Service Required
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select a service</option>
                        <option value="bodyguarding">Bodyguarding Service</option>
                        <option value="security-guarding">Security Guarding</option>
                        <option value="event-security">Event Security</option>
                        <option value="retail-security">Retail Security</option>
                        <option value="residential-security">Residential Security</option>
                        <option value="manned-guarding">Manned Guarding</option>
                        <option value="international-security">International Security</option>
                        <option value="chauffeur-service">Chauffeur Service</option>
                        <option value="reception-security">Reception Security</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block font-semibold font-body text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Tell us about your security requirements..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold font-body py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 text-lg uppercase tracking-wider"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
