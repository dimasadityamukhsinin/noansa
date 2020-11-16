import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const About = (props) => {
    return (
        <Container className="mt-2" ref={props.about}>
            <Row className={`justify-content-between ${styles.column}`}>
                <Col md={6}>
                    <img
                        alt="hero"
                        src="/img/wfh_9.svg"
                    />
                </Col>
                <Col md={4} className={`d-flex justify-content-center flex-column ${styles.about}`}>
                        <h1 className={styles.weight}>About Us</h1>
                        <p className="mt-3">
                            We are a team of creative people who are
                            committed to giving the world a litte touch
                            of beauty with our designs. We love what
                            we do and we do it with passions.
                        </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;