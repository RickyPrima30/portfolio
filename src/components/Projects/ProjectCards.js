import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        style={{
          background: "#1a1a2e",
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          color: "#fff",
          padding: "20px",
        }}
      >
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="project"
          style={{
            borderRadius: "10px",
            // objectFit: "cover",
            height: "350px",
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              color: "#ffc107",
              marginBottom: "10px",
            }}
          >
            {props.title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.5",
              textAlign: "justify",
              color: "#c9c9c9",
              marginBottom: "15px",
            }}
          >
            {props.description}
          </Card.Text>
          {props.ghLink && (
            <Button
              variant="outline-primary"
              href={props.ghLink}
              target="_blank"
              style={{
                marginRight: "10px",
                borderColor: "#ffc107",
                color: "#ffc107",
                fontWeight: "600",
              }}
            >
              <BsGithub /> GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="outline-success"
              href={props.demoLink}
              target="_blank"
              style={{
                borderColor: "#a24dd386",
                color: "#a24dd386",
                fontWeight: "600",
              }}
            >
              <CgWebsite /> Demo
            </Button>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
