import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file for styling
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
    return (
        <footer>
            <Row className="link">
                <h2 className="d-flex justify-content-center text-light">Retrouvez moi sur:</h2>
                <Col xs={3} className="social-links d-flex justify-content-center">
                    <li className="social-icons">
                        <a href="https://github.com/balkohv" target="_blank" rel="noopener noreferrer">GitHub&nbsp;
                        <AiFillGithub className='text-light'/></a>
                    </li>
                    <li className="social-icons">
                        <a href="https://linkedin.com/in/théo-pellefigue-90a778257" target="_blank" rel="noopener noreferrer">LinkedIn&nbsp;
                        <FaLinkedinIn className='text-light'/></a>
                    </li>
                </Col>
            </Row>
            <div className='footer'>
                <div className="footer-content">
                    <p>&copy; 2025 Pellefigue Théo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;