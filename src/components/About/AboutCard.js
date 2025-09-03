import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitin Kumar</span> from{" "}
            <span className="purple">Hapur, Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing{" "}
            <span className="purple">B.Tech in Computer Science and Engineering</span> 
            at IIIT Sonepat (2022–2026) with a CGPA of 8.45/10.
            <br />
            <br />
            I am an aspiring <span className="purple">MEAN/MERN Stack Developer</span> 
            with strong CS fundamentals (DSA, OOP, system design) and hands-on 
            experience building scalable applications using MongoDB, Express.js, 
            Angular/React, and Node.js. Skilled with SQL/NoSQL, REST APIs, and 
            cloud deployments, my projects span real-time dashboards, social 
            media features, and AI-powered analytics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving coding challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring juniors in DSA & full-stack development
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech and tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build scalable, impactful solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nitin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
