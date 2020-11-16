import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Hero = () => {
    return (
        <Container className="mt-2">
            <Row className={`justify-content-between ${styles.column}`}>
                <Col md={6} className="d-flex justify-content-center flex-column">
                    <h1 className={styles.weight}>Bring <span className={styles.happy}>Happiness</span></h1>
                    <h1 className={styles.weight}>to your digital product</h1>
                    <p className="mt-3">
                        From websites, visual brands, illustrations, even 
                        animations! Name your digital product, we will help
                        you improve it beyond what is imagined.
                    </p>
                    <div>
                        <Button className={styles.buttonhello} variant="primary">Say hello</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <img
                        alt="hero"
                        src="/img/wfh_6.svg"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;