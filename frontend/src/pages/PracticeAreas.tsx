import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const PracticeAreas: React.FC = () => {
  const [openArea, setOpenArea] = useState<number | null>(null);

  const practiceAreas = [
    {
      title: 'Corporate Law',
      description: 'Comprehensive corporate legal services including company formation, governance, compliance, mergers and acquisitions, joint ventures, and corporate restructuring. Our team provides strategic legal advice to help businesses navigate complex corporate matters and achieve their objectives while ensuring regulatory compliance.'
    },
    {
      title: 'Intellectual Property Rights',
      description: 'Protection and enforcement of intellectual property assets including patents, trademarks, copyrights, and trade secrets. We assist clients in IP registration, licensing agreements, infringement disputes, and developing comprehensive IP strategies to safeguard their innovations and creative works.'
    },
    {
      title: 'Employment Law',
      description: 'Complete employment law solutions covering employment contracts, workplace policies, labor disputes, employee rights, termination procedures, and compliance with labor regulations. We represent both employers and employees in various employment-related matters and disputes.'
    },
    {
      title: 'Civil Litigation',
      description: 'Skilled representation in civil litigation matters including contract disputes, property disputes, personal injury claims, commercial litigation, and appellate proceedings. Our litigation team combines extensive courtroom experience with strategic thinking to achieve favorable outcomes for our clients.'
    },
    {
      title: 'Real Estate Law',
      description: 'Comprehensive real estate legal services including property transactions, due diligence, title verification, lease agreements, property disputes, zoning issues, and real estate development matters. We ensure smooth property transactions while protecting our clients\' interests throughout the process.'
    }
  ];

  const toggleArea = (index: number) => {
    setOpenArea(openArea === index ? null : index);
  };

  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h1>Practice Areas</h1>
          <p className="lead">
            Comprehensive legal services across diverse practice areas
          </p>
        </div>

        <Row>
          <Col lg={8} className="mx-auto">
            {practiceAreas.map((area, index) => (
              <div key={index} className="practice-area-card">
                <div 
                  className="practice-area-header d-flex justify-content-between align-items-center"
                  onClick={() => toggleArea(index)}
                >
                  <h4 className="mb-0">{area.title}</h4>
                  {openArea === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openArea === index && (
                  <div className="practice-area-content">
                    <p className="mb-0">{area.description}</p>
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PracticeAreas;
