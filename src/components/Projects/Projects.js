import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hitech from "../../Assets/Projects/hitech.jpeg";
import ppko from "../../Assets/Projects/ppko.png";
import codejam from "../../Assets/Projects/cja.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Project </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently and Production.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hitech}
              isBlog={false}
              title="Online Presence With Face Recognition and Geolocation"
              description="Im Building Website to joining Hi-Technology 2023 Software Fair, TechStack i use is Svelte Kit, Supabase, PostgreSQL. For Face Recognition i use API from face-api.js and geolocation i use mozila WEB API"
              ghLink = "https://github.com/RickyPrima30/presensi-facerecognition-geolocation"
              demoLink = "https://presensi-mhs.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codejam}
              isBlog={false}
              title="Website Code Jam Academy"
              description = "Im building this website to prepare Code Jam Academy 2023, Code Jam Academy is internal training website from Himpunan Mahasiswa Teknik Informatika The theme I took was Laravel 10 CRUD and Authentication. I use TechStack HTML5 and TailwindCSS"
              ghLink = "https://github.com/codejamacademy/codejamacademy.github.io"
              demoLink = "https://codejamacademy.github.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppko}
              isBlog={false}
              title="jARictku"
              description = "Im building this Website to joining Program Penguatan Kapasitas Ormawa(PPK-O), where I served as a developer on the team. This website is a website that has augmented reality technology where I use TechStack Laravel, Tailwindcss, Mysql, and Ar.js as the augmented reality"
              demoLink = "https://jaricktu.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
