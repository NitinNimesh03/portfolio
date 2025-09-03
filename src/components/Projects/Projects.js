import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Using one placeholder image for all projects (replace later with your own screenshots)
import placeholder from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Text-to-SQL Copilot"
              description="AI/NLP + Data Analytics — natural-language interface for SQL databases. Implemented NL → SQL translator using FLAN-T5 and ChromaDB, trained on Spider dataset, deployed Flask API. Achieved 85%+ SQL generation accuracy."
              ghLink="https://github.com/NitinNimesh03/Text-to-SQL-Copilot"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Instagram Clone (MERN)"
              description="Full-stack social app with posts, likes, comments, and follow system. Added real-time chat with Socket.IO, deployed via Heroku CI/CD. Designed scalable MongoDB schemas and REST APIs."
              ghLink="https://github.com/NitinNimesh03/Instagram-Clone"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Weather Forecast App"
              description="Frontend + API Integration — responsive dashboard built with React and Tailwind. Integrated OpenWeatherMap API, geolocation detection, and chart-based visualizations."
              ghLink="https://github.com/NitinNimesh03/Weather-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Library Management System"
              description="C++ + MySQL CLI tool for managing book issues, returns, and fine calculations. Built using OOP principles and optimized SQL queries."
              ghLink="https://github.com/NitinNimesh03/Library-Management-System"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Portfolio Website"
              description="Personal portfolio built with HTML, CSS, JavaScript. Optimized for SEO and accessibility. Showcases projects and achievements."
              ghLink="https://github.com/NitinNimesh03/Portfolio"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
