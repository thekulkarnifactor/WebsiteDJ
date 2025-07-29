import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    captcha: ''
  });
  
  const [captchaValue, setCaptchaValue] = useState('');
  const [status, setStatus] = useState('');

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaValue(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.captcha !== captchaValue) {
      setStatus('Captcha verification failed. Please try again.');
      generateCaptcha();
      setFormData({ ...formData, captcha: '' });
      return;
    }

    try {
      // Here you would make the API call to your backend
      // const response = await contactAPI.sendMessage(formData);
      setStatus('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', captcha: '' });
      generateCaptcha();
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-2">
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Get in touch with our experienced legal team for a consultation. We're here to help you navigate your legal challenges.
          </p>
        </div>

        <div className="contact-section">
          {/* Contact Form */}
          <div className="contact-form">
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="captcha">
                <span>Captcha: </span>
                <span className="captcha-text">{captchaValue}</span>
                <button 
                  type="button" 
                  onClick={generateCaptcha}
                  style={{ background: 'none', border: 'none', color: 'var(--medium-blue)', cursor: 'pointer' }}
                >
                  ↻
                </button>
              </div>

              <div className="form-group">
                <label htmlFor="captcha">Enter Captcha *</label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>

              {status && (
                <p style={{ 
                  marginTop: '1rem', 
                  color: status.includes('success') ? 'green' : 'red',
                  fontWeight: '500'
                }}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Map Section */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9847469934823!2d72.8148207!3d19.0354103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b4b5a7c7c7%3A0x4b5a7c7c7c7c7c7c!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Information */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Office Address</h4>
              <p>123 Legal Plaza<br />Mumbai, Maharashtra 400001<br />India</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Phone</h4>
              <p>+91 22 1234 5678<br />+91 98765 43210</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Email</h4>
              <p>info@datejoshi.com<br />contact@datejoshi.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
