import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pairLogo from "../assets/pair-prog.svg";
import php from "../assets/PHP-logo.webp";
import js from "../assets/javascript-logo.webp";
import c from "../assets/C++Logo.webp";
import py from "../assets/python.webp";
import symfony from "../assets/symfony.webp";
import Jquery from "../assets/JQuery.webp";
import bootstrap from "../assets/Bootstrap.webp";
import html from "../assets/html.webp";
import css from "../assets/CSS.webp";
import git from "../assets/git.webp";
import react from "../assets/React.webp";
import java from "../assets/java.webp";
import sql from "../assets/sql.webp";
import Item from './Item'
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <Row className='about-row'>
                <h2 className='text-light d-flex justify-content-center'>Plus sur moi</h2>
            </Row>
            <Row className='p-0'>
                <Col xs={5}>
                    <p>
                        Je m'appelle Théo Pellefigue. Je suis titulaire d'un baccalauréat STI2D option SIN du lycée Jean François Champollion de Figeac,
                        ainsi que d'un DUT Informatique de l'IUT Paul Sabatier de Toulouse. J'ai eu l'opportunité de travailler chez Appligos-OpenDev pendant deux ans et demi en tant que développeur FullStack Symfony.
                        Je suis également cofondateur d'une association qui aide les jeunes développeurs à acquérir de l'expérience en leur confiant des projets et des responsabilités.
                    </p>
                    <p>
                        J'ai également d'autres centres d'intérêt tels que :
                    </p>
                    <ul>
                        <li><h4 className='text-light'>La mécanique</h4></li>
                        <li><h4 className='text-light'>L'airsoft</h4></li>
                        <li><h4 className='text-light'>Les sports mécaniques</h4></li>
                        <li><h4 className='text-light'>La conquête spatiale</h4></li>
                    </ul>
                </Col>
                <Col xs={4}>
                    <img src={pairLogo} alt="pair" />
                </Col>
            </Row>
            <Row className='p-0'>
                <h2 className='text-light d-flex justify-content-center'>Mes outils</h2>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={2}>
                    <Item title="PHP" imageUrl={php} redirectUrl=""/>
                    <Item title="GIT" imageUrl={git} redirectUrl=""/>
                </Col>
                <Col xs={2}>
                    <Item title="JavaScript" imageUrl={js} redirectUrl=""/>
                    <Item title="CSS" imageUrl={css} redirectUrl=""/>
                    <Item title="React js" imageUrl={react} redirectUrl=""/>
                </Col>
                <Col xs={2}>
                    <Item title="Python" imageUrl={py} redirectUrl=""/>
                    <Item title="HTML" imageUrl={html} redirectUrl=""/>
                    <Item title="Java" imageUrl={java} redirectUrl=""/>
                </Col>
                <Col xs={2}>
                    <Item title="C++" imageUrl={c} redirectUrl=""/>
                    <Item title="Bootstrap" imageUrl={bootstrap} redirectUrl=""/>
                    <Item title="PL/SQL" imageUrl={sql} redirectUrl=""/>
                </Col>
                <Col xs={2} className='large'>
                    <Item title="Symfony" imageUrl={symfony} redirectUrl=""/>
                    <Item title="JQuery" imageUrl={Jquery} redirectUrl=""/>
                </Col>
            </Row>
        </div>
    );
};

export default About;