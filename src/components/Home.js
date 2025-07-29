import React, { useState, useEffect } from "react";
import './Home.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import devLogo from "../assets/dev-symb.svg";
import profile from "../assets/profile.jpeg";

const words = ["Développeur FullStack", "Développeur PHP","Développeur Symfony","Développeur React", "Administrateur base de données"];

const TypingEffect = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                setDisplayedText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else {
                setDisplayedText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((wordIndex + 1) % words.length);
            }
        };

        const typingSpeed = isDeleting ? 50 : 100;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    return <h3 className="type-effect">{displayedText}</h3>;
};

const Home = () => {
    return (
        <div className="home-container">
            <Row>
                <Col xs={6} className="desc text-light">
                    <h1>Bonjour, </h1>
                    <h2 className="name">Je suis Théo Pellefigue,</h2>
                    <TypingEffect />
                </Col>
                <Col xs={3} className="profile-pic right">
                    <img src={profile} alt="Profile" />
                </Col>
            </Row>
            <h1 className="text-light">En savoir plus sur moi!</h1>
            <Row className="about-me">
                <Col xs={3} className="dev-pic">
                    <img src={devLogo} alt="dev" />
                </Col>
                <Col xs={6} className="about-me-text right d-flex align-items-center">
                    <p className="text-light fs-4">
                    Je suis un jeune diplômé d'un DUT Informatique obtenu à l'Université Toulouse Paul Sabatier, passionné par le développement web.
                    Curieux et motivé, j'aime découvrir de nouvelles technologies et enrichir continuellement mes compétences.
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
