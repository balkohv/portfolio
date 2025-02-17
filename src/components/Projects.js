import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import php from "../assets/PHP-logo.webp";
import react from "../assets/React.webp";
import sapli from "../assets/sapli.png";
import Item from './Item'
import './Projects.css'

const Project = () => {
    return (
        <div>
            <Row>
                <h2 className='text-light d-flex justify-content-center'>Quelques réalisations:</h2>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={2}>
                    <Item title="SAPLI" imageUrl={sapli} redirectUrl="https://github.com/balkohv/SAPLI" />
                </Col>
                <Col xs={2}>
                    <Item title="Portfolio" imageUrl={react} redirectUrl/>
                </Col>
                <Col xs={2}>
                    <Item title="Gestion de cabinet médical (scolaire)" imageUrl={php} redirectUrl="https://github.com/balkohv/Projet_php"/>
                </Col>
            </Row>
        </div>
    );
};

export default Project;