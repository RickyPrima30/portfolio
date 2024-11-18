import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { motion } from "framer-motion";
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
import movie from "../../Assets/Projects/movie.png";
import expense from "../../Assets/Projects/expense.png";
import madura from "../../Assets/Projects/madura.png";
import sevensummit from "../../Assets/Projects/sevensummit.png";
import vehiloc from "../../Assets/Projects/vehiloc.png";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      imgPath: movie,
      title: "Movie App",
      description: "Developed a movie app iOS with SwiftUI and alamofire. The app features a list of popular movies, movie details, and search functionality. The app uses the TMDB API for movie data. and this app i using package SDWebImage for image caching.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/MovieApp"
    },
    {
      imgPath: sevensummit,
      title: "Seven Summit Central Java Guide App",
      description: "Developed a Seven Summit Central Java Guide App with SwiftUI. The app features a list of mountains, mountain details, and the ability to create custom hiking itineraries. The app uses MapKit for displaying interactive maps, route planning, and providing users with geolocation-based guidance.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/MVVMSevenSummitApp"
    },
    {
      imgPath: expense,
      title: "Expense Tracker App",
      description: "Developed an expense tracker app with SwiftUI. The app features a list of transactions, transaction details, and the ability to add and delete transactions. The app uses Core Data for data persistence, Data Visualization Using Swift Charts, Advance Filters and Search, Device Biometric App Lock, App Widget.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/ExpenseApp"
    },
    {
      imgPath: madura,
      title: "Warung Madura App",
      description: "Developed an online food ordering app with SwiftUI. The app features a list of cigarattes, cigarattes details, and the ability to add and delete cigarattes. The app uses Core Data for data persistence.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/WarungMaduraApp"
    },
    {
      imgPath: vehiloc,
      title: "Vehiloc App",
      description: "Developed and published app on App Store, Google Play Store and modernize web vehiloc.id, this app using Google Maps API for rendering map and track vehicle client, using websocket for realtime get data from vehicle. this app i created when i intern on PT. Buana Online Sejahtera as a Full Stack App Developer i handle web and Flutter, migrate from Legacy app using felgo to Flutter.",
      category: "Flutter",
      demoLink: "https://apps.apple.com/id/app/vehiloc/id6478942877",
    },
    {
      imgPath: hitech,
      title: "Online Presence With Face Recognition and Geolocation",
      description: "I’m building a website for the Hi-Technology 2023 Software Fair. The tech stack I used includes SvelteKit, Supabase, and PostgreSQL. For face recognition, I utilized the face-api.js API, and for geolocation, I implemented Mozilla Web API.",
      category: "Web",
      ghLink: "https://github.com/RickyPrima30/presensi-facerecognition-geolocation",
      demoLink: "https://presensi-mhs.netlify.app/",
    },
    {
      imgPath: lms,
      title: "Learning Management System",
      description: "Developed a learning management system website for a mini project organized by an association. Integrated OAuth, email verification link, and email verification code. The platform allows users to engage with structured learning materials in video format. The tech stack includes Next.js, PostgreSQL, Supabase, Prisma, and Shadcnui.",
      category: "Web",
      ghLink: "https://github.com/rickyprimay/lms",
      demoLink: "https://rickieslearn.vercel.app/",
    },
    {
      imgPath: codejam,
      title: "Website Code Jam Academy",
      description: "I’m building a website for Code Jam Academy 2023. The project is an internal training website by Himpunan Mahasiswa Teknik Informatika. The theme of the project is Laravel 10 CRUD with Authentication. Tech stack: HTML5 and TailwindCSS.",
      category: "Web",
      ghLink: "https://github.com/codejamacademy/codejamacademy.github.io",
      demoLink: "https://codejamacademy.github.io",
    },
    {
      imgPath: ppko,
      title: "jARictku",
      description: "I’m building this website for the Program Penguatan Kapasitas Ormawa (PPK-O). I served as a developer on the team. This project features augmented reality technology using Laravel, TailwindCSS, MySQL, and AR.js.",
      category: "Web",
      demoLink: "https://jaricktu.com",
    },
    {
      imgPath: ticketify,
      title: "Ticketify",
      description: "Working on the development of Ticketify, an event ticketing website similar to Tiket.com and YesPlis. The website is still in the development phase. Tech stack includes Laravel for backend, React for frontend, and Midtrans as the payment gateway service.",
      category: "Web",
      demoLink: "https://ticketify.id",
    },
    {
      imgPath: sirekam,
      title: "Sirekampolkesyogya",
      description: "Developed a website, sirekampolkesyogya.com, as a freelance project for students at Poltekkes Yogyakarta to participate in PKM competitions. The website helps record and manage student activity scores.",
      category: "Web",
      demoLink: "https://sirekampolkesyogya.com",
    },
    {
      imgPath: arch,
      title: "Sumberdaya Fakultas Rekaya Industri",
      description: "Developed a website, sumberdayafri.my.id, as a freelance project for students at Telkom University to complete their Thesis. The website serves as an information and resource platform for faculty students.",
      category: "Web",
      demoLink: "https://sumberdayafri.my.id",
    },
    {
      imgPath: tf,
      title: "Traffic Sense",
      description: "Participated in the DINACOM software competition by creating Traffic Sense, an app designed to find routes with minimal pollution. It uses Graphhopper API for maps and IoT with ESP-32 and MQ-135 sensors to monitor air quality. I developed the API for the mobile application.",
      category: "Android",
      demoLink: "https://smart-traffic.my.id/",
    },

    
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <Container
      fluid
      className="project-section"
      style={{
        background: "#1a1a2e",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <Particle />
      <Container>
        <motion.h1
          className="project-heading"
          style={{
            textAlign: "center",
            fontWeight: "700",
            color: "#ffc107",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Recent <strong style={{ color: "#cd5ff8" }}>Projects</strong>
        </motion.h1>
        <motion.p
          style={{ textAlign: "center", marginBottom: "30px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Here are a few projects I've worked on recently and in production.
        </motion.p>

        <motion.div
          style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ButtonGroup>
            {["All", "Web", "iOS", "Android", "Flutter"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "dark" : "light"}
                onClick={() => setFilter(category)}
                style={{
                  border: "2px solid #a24dd386",
                  color: filter === category ? "#fff" : "#a24dd386",
                  background: filter === category ? "#a24dd386" : "transparent",
                  fontWeight: "600",
                  margin: "0 5px",
                }}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
        </motion.div>

        <Row style={{ justifyContent: "center" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
