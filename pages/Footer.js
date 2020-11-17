import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Footer = () => {
    return(
      <Container fluid className={`mt-3 p-2 ${styles.footer}`}>
        <span>Copyright © 2020 Noansa | Powered by Noansa</span>
      </Container>
    );
}

export default Footer;