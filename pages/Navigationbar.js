import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Navigationbar = (props) => {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Navbar.Brand href="/" className={styles.brand}>
            <img
              alt="noansa"
              src="/icon/feather.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Noansa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id={styles.toggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className={styles.link} onClick={props.about}>About us</Nav.Link>
              <Nav.Link className={styles.link} onClick={props.whatwedo}>What we do</Nav.Link>
              <Nav.Link className={styles.link} onClick={props.project}>Project</Nav.Link>
              <Nav.Link className={styles.link} href="/blog">Blog</Nav.Link>
              <Nav.Link className={styles.link} onClick={props.contact}>Contact</Nav.Link>
              <Button className={styles.buttonstart} variant="primary">Start a project</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}

export default Navigationbar;