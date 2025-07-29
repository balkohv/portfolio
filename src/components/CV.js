import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../assets/cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import './CV.css';

function CV() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Row className="resume d-flex justify-content-center">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                            <Viewer 
                                fileUrl={pdf}
                                defaultScale={1} 
                            />
                        </div>
                    </Worker>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative", padding: "5vh" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default CV;
