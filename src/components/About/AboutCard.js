import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ricky Primayuda Putra </span>
            from <span className="purple"> Semarang, Indonesia.</span>
            <br /> I am a Informatics Engineering Student at Dian Nuswantoro University.
            <br />
            Additionally, I am Serving as Lead on Google Developer Group on Campus Universitas Dian Nuswantoro and Himpunan Mahasiswa Teknik Informatika UDINUS as a Head of Software Departement
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Write a Code
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything I Do Breaks, But We Fix It Quickly"{" "}
          </p>
          <footer className="blockquote-footer">Ricky Primayuda Putra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
