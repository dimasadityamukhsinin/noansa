import React from 'react';
import Slide from './slide';
import { Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Project = (props) => {
    return(
      <Container className="mt-5" ref={props.project}>
        <div style={{ textAlign: 'center'}}>
          <h2 className={styles.weight}>Our latest project</h2>
          <p style={{ color: '#57606bff' }}>See the beauty through our project that we made</p>
        </div>
        <Slide/>
      </Container>
    );
}

export default Project;