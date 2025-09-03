import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // replace with your own photo later
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an aspiring <b className="purple">MEAN/MERN Stack Developer</b> 
              with strong CS fundamentals (DSA, OOP, system design) and hands-on 
              experience building scalable applications.
              <br />
              <br />
              Skilled in{" "}
              <i>
                <b className="purple">JavaScript (ES6+), C++, Python, Java</b>
              </i>{" "}
              with experience in{" "}
              <i>
                <b className="purple">MongoDB, MySQL, React.js, Node.js, Express.js</b>
              </i>.
              <br />
              <br />
              My interests include{" "}
              <i>
                <b className="purple">full-stack development, cloud deployment,</b>
              </i>{" "}
              and building impactful{" "}
              <i>
                <b className="purple">AI-powered applications and analytics tools.</b>
              </i>
              <br />
              <br />
              I enjoy solving problems, mentoring juniors, and exploring modern 
              tools and frameworks to create efficient solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NitinNimesh03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/nitin-kumar-709a58269"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:nitin991190@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
