import React, { useState } from 'react';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', message: '' };

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string|null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.contactSection}>
      <h1>Contact Dr. Smith</h1>
      <p className={styles.subtitle}>Ready for your best smile? Send us a message and we'll get back to you soon.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          disabled={submitting}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          disabled={submitting}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          disabled={submitting}
        />
        <button type="submit" disabled={submitting} className={styles.submitBtn}>
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitted && <div className={styles.success}>Thank you! We'll be in touch soon.</div>}
        {error && <div className={styles.error}>{error}</div>}
      </form>
      <div className={styles.details}>
        <p><strong>Email:</strong> drsmith@dentalclinic.com</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Smile Street, Happyville</p>
      </div>
    </main>
  );
};

export default Contact;
