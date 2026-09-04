import { useState } from 'react';
import './Contact.css';

const emptyForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let's talk</h2>

      <div className="contact-layout">
        <div className="contact-info">
          <p>
            Happy to walk through any project in more depth, or talk through
            the React fundamentals behind this site.
          </p>
          <div className="contact-details">
            <a href="mailto:mohankrishnasolasa2004@gmail.com">mohankrishnasolasa2004@gmail.com</a>
            <a href="tel:+919390868567">+91 93908 68567</a>
            <span>Sattenapalli, Andhra Pradesh, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} required></textarea>
          </label>
          <button type="submit" className="btn btn-primary">
            {submitted ? 'Message received' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
