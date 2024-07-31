import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hitech from "../../Assets/Projects/hitech.jpeg";
import ppko from "../../Assets/Projects/ppko.png";
import codejam from "../../Assets/Projects/cja.png";
import lms from "../../Assets/Projects/lms.png";
import tf from "../../Assets/Projects/tf-sense.png";
import ticketify from "../../Assets/Projects/ticketify.png";
import sirekam from "../../Assets/Projects/sirekam.png";
import arch from "../../Assets/Projects/arch.png";

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
              imgPath={lms}
              isBlog={false}
              title="Learning Management System"
              description="Developed a learning management system website for a mini project organized by the organization. Integrated OAuth, email verification link, and email verification code. The website serves as a learning platform, enabling users to engage with structured learning videos segmented per material. Utilized the following TechStack: Next.js, PostgreSQL, Supabase, Prisma, and Shadcnui."
              ghLink = "https://github.com/rickyprimay/lms"
              demoLink = "https://rickieslearn.vercel.app/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketify}
              isBlog={false}
              title="Ticketify"
              description = "Working on the development of Ticketify, an event ticketing website similar to Tiket.com and YesPlis, designed for booking event tickets. The website is still in the development/local phase. For this project, I am using Laravel as the backend framework, React for the frontend development, and integrating Midtrans as the payment gateway service."
              demoLink = "https://ticketify.id"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sirekam}
              isBlog={false}
              title="Sirekampolkesyogya"
              description = "Developing a website called sirekampolkesyogya.com as a freelance project for students at Poltekkes Yogyakarta to participate in PKM competitions. This website functions to record and manage the activity scores of the students."
              demoLink = "https://sirekampolkesyogya.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arch}
              isBlog={false}
              title="Sumberdaya Fakultas Rekaya Industri"
              description = "Developing a website called sumberdayafri.my.id as a freelance project for students at Telkom University to completed Thesis."
              demoLink = "https://sumberdayafri.my.id"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tf}
              isBlog={false}
              title="Traffic Sense"
              description = "I took part in a software competition called DINACOM and I made an application called Traffic Sense where the purpose of this application was to find routes with little pollution where for the map I used the API from Graphooper and to find out the air quality I made IoT with the ESP-32 module and MQ-135 Water Quality Sensor. where in this project I was tasked with creating an API for Mobile"
              demoLink = "https://smart-traffic.my.id/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
