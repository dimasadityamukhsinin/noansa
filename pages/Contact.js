import React from 'react';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Contact = (props) => {
    return(
        <Container className="mt-5 mb-5" ref={props.contact}>
            <Row className={`justify-content-between ${styles.column}`}>
                <Col md={6} className="d-flex justify-content-center flex-column">
                    <h1 className={styles.weight}>Let's Get in Touch!</h1>
                    <div className={`mt-3 mb-3 ${styles.divider}`}/>
                    <p className="mt-4">
                        We are very welcoming every chance to communicate with you. Whether it is a simple 
                        question or a quality coffee time request. Everything is maybe a something, right?
                    </p>
                    <Form className="mt-4">
                        <Form.Control type="text" placeholder="Your name*" className="mt-3"/>
                        <Form.Control type="text" placeholder="Your email*" className="mt-3"/>
                        <Form.Control as="textarea" placeholder="Your message*" rows={3} className="mt-3"/>
                    </Form>
                    <div>
                        <Button className={`mt-3 ${styles.buttonhello}`} variant="primary">Submit</Button>
                    </div>
                </Col>
                <Col md={5}>
                    <img
                        style={{ width: '100%' }}
                        alt="hero"
                        src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c329258ff1c074ddb9fb342_drawkit-hero-animation.gif"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;