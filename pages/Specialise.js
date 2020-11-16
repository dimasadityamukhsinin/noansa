import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Specialise = (props) => {
    return (
        <Container className="mt-5" ref={props.specialise}>
            <h2 className={`${styles.weight} ${styles.text_responsive}`}>We specialise in</h2>
            <Row className={styles.column}>
                <Col>
                    <div className={`mt-5 mb-4 ${styles.responsive}`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.uiux}`}>
                        <img
                        alt="ui/ux"
                        width="40"
                        height="40"
                        src="/icon/uiux.svg"
                        />
                    </div>
                    <div className={`mt-4 w-75 ${styles.text_responsive}`}>
                        <h4 className={styles.weight}>UIUX Design</h4>
                        <p>
                        Hi-Fedelity Design, Protoype,
                        Competitive Analysis, User Flow,
                        User Journey, Wireframe,
                        Lo-Fidelity Design, Quality
                        </p>
                    </div>
                    </div>
                    <div className={`mt-5 mb-4 ${styles.responsive}`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.uiux}`}>
                        <img
                        alt="ui/ux"
                        width="40"
                        height="40"
                        src="/icon/uiux.svg"
                        />
                    </div>
                    <div className={`mt-4 w-75 ${styles.text_responsive}`}>
                        <h4 className={styles.weight}>UIUX Design</h4>
                        <p>
                        Hi-Fedelity Design, Protoype,
                        Competitive Analysis, User Flow,
                        User Journey, Wireframe,
                        Lo-Fidelity Design, Quality
                        </p>
                    </div>
                    </div>
                </Col>
                <Col>
                    <div className={`mt-5 mb-4 ${styles.responsive}`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.illustration}`}>
                        <img
                        alt="illustration"
                        width="40"
                        height="40"
                        src="/icon/illustration.svg"
                        />
                    </div>
                    <div className={`mt-4 w-75 ${styles.text_responsive}`}>
                        <h5 className={styles.weight}>Illustration</h5>
                        <p>
                        Hi-Fedelity Design, Protoype,
                        Competitive Analysis, User Flow,
                        User Journey, Wireframe,
                        Lo-Fidelity Design, Quality
                        </p>
                    </div>
                    </div>
                    <div className={`mt-5 mb-4 ${styles.responsive}`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.illustration}`}>
                        <img
                        alt="illustration"
                        width="40"
                        height="40"
                        src="/icon/illustration.svg"
                        />
                    </div>
                    <div className={`mt-4 w-75 ${styles.text_responsive}`}>
                        <h5 className={styles.weight}>Illustration</h5>
                        <p>
                        Hi-Fedelity Design, Protoype,
                        Competitive Analysis, User Flow,
                        User Journey, Wireframe,
                        Lo-Fidelity Design, Quality
                        </p>
                    </div>
                    </div>
                </Col>
                <Col>
                    <div className={`mt-5 mb-4 ${styles.responsive}`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.branding}`}>
                        <img
                        alt="branding"
                        width="40"
                        height="40"
                        src="/icon/branding.svg"
                        />
                    </div>
                    <div className={`mt-4 w-75 ${styles.text_responsive}`}>
                        <h5 className={styles.weight}>Branding</h5>
                        <p>
                        Hi-Fedelity Design, Protoype,
                        Competitive Analysis, User Flow,
                        User Journey, Wireframe,
                        Lo-Fidelity Design, Quality
                        </p>
                    </div>
                    </div>
                    <div className={`mt-5 mb-4 ${styles.responsive}`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.branding}`}>
                        <img
                        alt="branding"
                        width="40"
                        height="40"
                        src="/icon/branding.svg"
                        />
                    </div>
                    <div className={`mt-4 w-75 ${styles.text_responsive}`}>
                        <h5 className={styles.weight}>Branding</h5>
                        <p>
                        Hi-Fedelity Design, Protoype,
                        Competitive Analysis, User Flow,
                        User Journey, Wireframe,
                        Lo-Fidelity Design, Quality
                        </p>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Specialise;