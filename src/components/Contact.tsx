import { useState, type FormEvent } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Copy, Check, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailAddress = 'sachin07asp@gmail.com';
  const phoneNumber = '7339173344';
  const githubUrl = 'https://github.com/sachin07asp';
  const linkedinUrl = 'https://www.linkedin.com/in/sachin-k-b2a942445';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setFormSubmitted(true);
  };

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry from ' + (formData.name || 'Visitor')
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>Direct Channels</span>
            <span aria-hidden="true">·</span>
            <span>Reach Out</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Contact Information & Profiles
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl">
            Feel free to connect for internships, academic projects, coding discussions, or collaboration.
          </p>
        </div>

        {/* 4 Primary Contact Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* 1. Email */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-stone-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-stone-100 text-stone-700">
                  <Mail className="w-4 h-4" />
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <span className="text-xs font-medium text-stone-500">Email Address</span>
                <p className="font-semibold text-stone-900 text-sm truncate mt-0.5">
                  {emailAddress}
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <a
                href={`mailto:${emailAddress}`}
                className="text-xs font-semibold text-stone-900 hover:underline inline-flex items-center gap-1"
              >
                <span>Compose Mail</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
              {copiedEmail && (
                <span className="text-xs text-emerald-600 font-medium">Copied!</span>
              )}
            </div>
          </div>

          {/* 2. Phone */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-stone-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-stone-100 text-stone-700">
                  <Phone className="w-4 h-4" />
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <span className="text-xs font-medium text-stone-500">Mobile Phone</span>
                <p className="font-semibold text-stone-900 text-sm font-mono tabular-nums mt-0.5">
                  +91 {phoneNumber}
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <a
                href={`tel:${phoneNumber}`}
                className="text-xs font-semibold text-stone-900 hover:underline inline-flex items-center gap-1"
              >
                <span>Call Directly</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
              {copiedPhone && (
                <span className="text-xs text-emerald-600 font-medium">Copied!</span>
              )}
            </div>
          </div>

          {/* 3. GitHub Profile (Explicitly requested again) */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-stone-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-stone-100 text-stone-700">
                  <Github className="w-4 h-4" />
                </span>
              </div>
              <div>
                <span className="text-xs font-medium text-stone-500">GitHub Profile</span>
                <p className="font-semibold text-stone-900 text-sm truncate mt-0.5 font-mono">
                  sachin07asp
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-stone-900 hover:underline inline-flex items-center gap-1"
              >
                <span>View GitHub</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          {/* 4. LinkedIn Profile (Explicitly requested again) */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-blue-50 text-blue-700">
                  <Linkedin className="w-4 h-4" />
                </span>
              </div>
              <div>
                <span className="text-xs font-medium text-stone-500">LinkedIn Profile</span>
                <p className="font-semibold text-stone-900 text-sm truncate mt-0.5">
                  Sachin K
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-blue-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Message Form & Direct Connect Block */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-lg font-bold text-stone-900">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Need to discuss an opportunity, ask a question, or leave feedback? Write here and you can dispatch directly to Sachin's inbox.
              </p>
              
              <div className="pt-2 space-y-2 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  <span>Email: {emailAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  <span>Phone: +91 {phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  <span>Location: Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Academic Project / Query"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or project query here..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 resize-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>

                    <a
                      href={mailtoLink}
                      className="px-3.5 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-stone-500" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Thank you, {formData.name}!
                  </h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    Your message has been captured. You can also send this directly to Sachin's inbox with one click:
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Dispatch via Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-3.5 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
