import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

interface DisclaimerProps {
  onAccept: () => void;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ onAccept }) => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg">
              <Card.Header className="bg-primary text-white text-center">
                <h3>Disclaimer & Confirmation</h3>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="mb-3">
                  <strong>Date Joshi and Associates</strong> is in compliance with rule 36 of the Bar Council of India 
                  that prohibits law firms from soliciting work or advertising its services in any manner.
                </p>
                <p className="mb-3">By continuing to browse this website, you are agreeing to:</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    • There has been no advertisement, personal communication, solicitation, invitation or 
                    inducement of any sort whatsoever from us or any of our members to solicit any work through this website
                  </li>
                  <li className="mb-2">
                    • The user wishes to gain more information about us for his/her own information and use
                  </li>
                  <li className="mb-2">
                    • The information about us is provided to the user only on his/her specific request and any 
                    information obtained or materials downloaded from this website is completely at the user's volition 
                    and any transmission, receipt or use of this site would not create any lawyer-client relationship
                  </li>
                  <li className="mb-2">
                    • Please read and accept our website's Terms of Use and Privacy Policy
                  </li>
                </ul>
                <div className="text-center">
                  <Button variant="primary" size="lg" onClick={onAccept}>
                    I Accept and Continue
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Disclaimer;
