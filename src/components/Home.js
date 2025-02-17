import React, { useState, useEffect } from "react";
import './Home.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import devLogo from "../assets/dev-symb.svg";

const words = ["Développeur FullStack", "Designer", "Administrateur base de données"];

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
                    <img src="https://imgs.search.brave.com/L8g0q2VTDqc0PX3hfAVBBNx6gKLd9JE0Gld8jH4BjvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjE5/NDAwODEwL3Bob3Rv/L21yLXdoby5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aGFy/VHhXX0lSbDA2Q25o/LTRrbkNudHh3WWlx/V282eWlBeEpUcld5/U0ppRT0" alt="Profile" />
                </Col>
            </Row>
            <h1 className="text-light">En savoir plus sur moi!</h1>
            <Row>
                <Col xs={3} className="dev-pic">
                    <img src={devLogo} alt="dev" />
                </Col>
                <Col xs={6} className="right d-flex align-items-center">
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
