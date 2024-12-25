import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-text)]">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-text)]">Phone</p>
                  <p className="text-[var(--color-text-secondary)]">+94 755786246 / +94 710171111</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-text)]">Email</p>
                  <p className="text-[var(--color-text-secondary)]">avidu@pm.me</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-text)]">Location</p>
                  <p className="text-[var(--color-text-secondary)]">Jaffna, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[var(--color-background)] border border-[var(--color-text-secondary)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-[var(--color-text)]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[var(--color-background)] border border-[var(--color-text-secondary)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-[var(--color-text)]"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[var(--color-background)] border border-[var(--color-text-secondary)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-[var(--color-text)]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-[var(--color-background)] border border-[var(--color-text-secondary)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-[var(--color-text)]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;