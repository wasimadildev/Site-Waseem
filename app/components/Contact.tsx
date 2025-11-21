import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  isDark: boolean;
}

export default function ContactPage({ isDark }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`w-full flex justify-center transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      }`}>
      <div className="w-full md:w-[80%] lg:w-[60%] max-w-3xl py-10 md:py-20 px-4 md:px-10">

        {/* Header */}
        <div className="mb-12">
          <h1 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
            }`}>
            Get in Touch
          </h1>
          <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="space-y-5">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-sm border transition-colors focus:outline-none focus:ring-1 ${isDark
                ? 'bg-gray-900 border-gray-800 text-white focus:border-gray-600 focus:ring-gray-700'
                : 'bg-white border-gray-300 text-gray-900 focus:border-gray-400 focus:ring-gray-400'
                }`}
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-sm border transition-colors focus:outline-none focus:ring-1 ${isDark
                ? 'bg-gray-900 border-gray-800 text-white focus:border-gray-600 focus:ring-gray-700'
                : 'bg-white border-gray-300 text-gray-900 focus:border-gray-400 focus:ring-gray-400'
                }`}
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject Input */}
          <div>
            <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-sm border transition-colors focus:outline-none focus:ring-1 ${isDark
                ? 'bg-gray-900 border-gray-800 text-white focus:border-gray-600 focus:ring-gray-700'
                : 'bg-white border-gray-300 text-gray-900 focus:border-gray-400 focus:ring-gray-400'
                }`}
              placeholder="How can I help?"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-2.5 rounded-sm border transition-colors focus:outline-none focus:ring-1 resize-none ${isDark
                ? 'bg-gray-900 border-gray-800 text-white focus:border-gray-600 focus:ring-gray-700'
                : 'bg-white border-gray-300 text-gray-900 focus:border-gray-400 focus:ring-gray-400'
                }`}
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`flex items-center gap-2 px-4 py-2.5 border rounded-sm transition-colors ${isDark
              ? 'bg-white text-black hover:bg-gray-200 disabled:bg-gray-700 disabled:text-gray-400 disabled:border-gray-800'
              : 'bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300'
              } disabled:cursor-not-allowed`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </button>

          {/* Success/Error Messages */}
          {status === 'success' && (
            <div className={`flex items-center gap-2 p-3 border rounded-sm ${isDark
              ? 'bg-green-900/20 border-green-700 text-green-400'
              : 'bg-green-50 border-green-300 text-green-700'
              }`}>
              <CheckCircle size={18} />
              <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {status === 'error' && (
            <div className={`flex items-center gap-2 p-3 border rounded-sm ${isDark
              ? 'bg-red-900/20 border-red-700 text-red-400'
              : 'bg-red-50 border-red-300 text-red-700'
              }`}>
              <AlertCircle size={18} />
              <span className="text-sm">Something went wrong. Please try again.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}