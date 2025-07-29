import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h1>Articles & Blogs</h1>
          <p className="lead">
            Stay informed with our latest legal insights and updates
          </p>
        </div>

        <Row>
          {articles.map((article) => (
            <Col md={4} key={article.id} className="mb-4">
              <Card className="article-card h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-primary-blue">{article.title}</Card.Title>
                  <Card.Text className="text-muted mb-2">
                    By {article.author} | {new Date(article.date).toLocaleDateString()}
                  </Card.Text>
                  <Card.Text className="flex-grow-1">{article.excerpt}</Card.Text>
                  <Card.Text className="small text-muted mt-auto">
                    {article.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Articles;
