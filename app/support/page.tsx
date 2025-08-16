'use client';

import Link from "next/link";
import React from 'react';
import { FooterNavigation } from '@/components/SEO/SiteNavigation';

// Note: Metadata must be in a separate server component file
// For now, using client component for form functionality

export default function SupportPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: '' // Honeypot field
  });

  const [formStatus, setFormStatus] = React.useState<{
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Don't submit if honeypot is filled (spam protection)
    if (formData.botcheck) {
      return;
    }

    setFormStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '0f956355-ec37-4284-b31d-3b7c7800df64', // Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "LookAtMyProfile Contact Form",
          // Optional: Add custom subject line
          subject_line: `[Support] ${formData.subject} - from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ submitting: false, success: true, error: null });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          botcheck: ''
        });
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
      // Hide error message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help! Whether you're having trouble generating roasts or need assistance with the app,
            our support team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-300 mb-4">
              Get help from our friendly support team
            </p>
            <a href="mailto:support@lookatmyprofile.org" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              support@lookatmyprofile.org
            </a>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">FAQ</h3>
            <p className="text-gray-300 mb-4">
              Find answers to common questions
            </p>
            <Link href="/faq" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              Browse FAQ →
            </Link>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">App Issues</h3>
            <p className="text-gray-300 mb-4">
              Having trouble with the app?
            </p>
            <Link href="/download" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              Get Latest Version →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          
          {/* Success Message */}
          {formStatus.success && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300">
              <p className="font-semibold">✅ Message sent successfully!</p>
              <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
            </div>
          )}

          {/* Error Message */}
          {formStatus.error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300">
              <p className="font-semibold">❌ Error sending message</p>
              <p className="text-sm mt-1">{formStatus.error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={formStatus.submitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={formStatus.submitting}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
                disabled={formStatus.submitting}
              >
                <option value="">Select a topic</option>
                <option value="general">General Question</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing & Payments</option>
                <option value="feature">Feature Request</option>
                <option value="report">Report a Problem</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us how we can help..."
                required
                disabled={formStatus.submitting}
              ></textarea>
            </div>

            {/* Honeypot field for spam protection (hidden) */}
            <input
              type="text"
              name="botcheck"
              value={formData.botcheck}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={formStatus.submitting}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition ${
                formStatus.submitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
              }`}
            >
              {formStatus.submitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Privacy Notice */}
          <p className="text-sm text-gray-400 text-center mt-4">
            By submitting this form, you agree to our{' '}
            <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </Link>
            . We'll only use your information to respond to your inquiry.
          </p>
        </div>
      </section>

      {/* Response Time */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Response Times</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">&lt; 2 hrs</div>
              <p className="text-gray-300">Critical Issues</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">&lt; 24 hrs</div>
              <p className="text-gray-300">General Support</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">&lt; 48 hrs</div>
              <p className="text-gray-300">Feature Requests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Can't find a profile?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Make sure the profile is public</li>
              <li>• Enter username without @ symbol</li>
              <li>• Check for typos in the username</li>
              <li>• Try refreshing the page</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400">App not working?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Update to the latest version</li>
              <li>• Check your internet connection</li>
              <li>• Try closing and reopening the app</li>
              <li>• Reinstall if issues persist</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Payment issues?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Purchases are handled by App Store</li>
              <li>• Check your payment method</li>
              <li>• Restore purchases in app settings</li>
              <li>• Contact Apple Support if needed</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Roasts not generating?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Check if you have tokens available</li>
              <li>• Ensure profile is public</li>
              <li>• Try a different roast style</li>
              <li>• Clear browser cache and retry</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <FooterNavigation currentPath="/support" />
    </div>
  );
}