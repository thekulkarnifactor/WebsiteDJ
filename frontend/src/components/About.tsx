import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About: React.FC = () => {
  const cofounders = [
    {
      name: 'Pratik Date',
      position: 'Co-Founder & Senior Partner',
      experience: '15+ years',
      specialization: 'Corporate Law, Mergers & Acquisitions',
      description: 'Pratik brings extensive experience in corporate legal matters and has successfully handled numerous high-profile cases.'
    },
    {
      name: 'Dhananjay Joshi',
      position: 'Co-Founder & Senior Partner', 
      experience: '12+ years',
      specialization: 'Litigation, Intellectual Property',
      description: 'Dhananjay specializes in complex litigation matters and intellectual property rights with a proven track record.'
    }
  ];

  const associates = [
    { name: 'Priya Sharma', position: 'Senior Associate' },
    { name: 'Rajesh Kumar', position: 'Associate' },
    { name: 'Anjali Patel', position: 'Associate' },
    { name: 'Vikram Singh', position: 'Junior Associate' },
    { name: 'Neha Gupta', position: 'Junior Associate' }
  ];

  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h1>About Date Joshi & Associates</h1>
          <p className="lead">
            Meet our experienced legal team dedicated to providing exceptional legal services
          </p>
        </div>

        {/* Co-founders */}
        <div className="mb-5">
          <h2 className="text-center mb-4">Our Co-Founders</h2>
          <Row>
            {cofounders.map((founder, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="team-card h-100">
                  <Card.Body className="text-center p-4">
                    <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                         style={{width: '80px', height: '80px'}}>
                      <span className="text-white fw-bold fs-3">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <Card.Title className="text-primary-blue">{founder.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">{founder.position}</Card.Subtitle>
                    <p><strong>Experience:</strong> {founder.experience}</p>
                    <p><strong>Specialization:</strong> {founder.specialization}</p>
                    <Card.Text>{founder.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Associates */}
        <div>
          <h2 className="text-center mb-4">Our Associates</h2>
          <Row>
            {associates.map((associate, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="team-card h-100">
                  <Card.Body className="text-center p-4">
                    <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                         style={{width: '60px', height: '60px'}}>
                      <span className="text-white fw-bold">
                        {associate.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <Card.Title className="text-primary-blue">{associate.name}</Card.Title>
                    <Card.Subtitle className="text-muted">{associate.position}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
