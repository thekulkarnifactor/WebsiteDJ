import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState<'success' | 'danger'>('success');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaValue) {
      setAlertMessage('Please complete the CAPTCHA verification');
      setAlertVariant('danger');
      setShowAlert(true);
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setAlertMessage('Message sent successfully! We will get back to you soon.');
      setAlertVariant('success');
      setShowAlert(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setCaptchaValue(null);
    } catch (error) {
      setAlertMessage('Failed to send message. Please try again.');
      setAlertVariant('danger');
      setShowAlert(true);
    }
  };

  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h1>Contact Us</h1>
          <p className="lead">
            Get in touch with our legal experts for professional consultation
          </p>
        </div>

        <Row>
          <Col lg={6} className="mb-4">
            {showAlert && (
              <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                {alertMessage}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number *</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Subject *</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              
              <div className="mb-3">
                <ReCAPTCHA
                  sitekey="your-recaptcha-site-key" // Replace with actual key
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>
              
              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>
            </Form>
          </Col>
          
          <Col lg={6}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9927706132894!2d72.82772361490292!3d19.0176147870902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9b4b2e4b4b%3A0x3b3b3b3b3b3b3b3b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
            <div className="mt-4">
              <h4>Office Address</h4>
              <p>
                Date Joshi & Associates<br/>
                123 Legal Complex<br/>
                Business District<br/>
                Mumbai, Maharashtra 400001<br/>
                Phone: +91 22 1234 5678<br/>
                Email: contact@datejoshiassociates.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
