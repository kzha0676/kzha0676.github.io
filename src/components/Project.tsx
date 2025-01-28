import React from "react";
import Masonry from "react-masonry-css";
import Chip from "@mui/material/Chip";
import { Container } from "react-bootstrap";
import "../assets/styles/Project.scss";

// Import project mockups dynamically for scalability
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
// Add more imports as needed...

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    labels: string[];
  };
  
// Project Data Array
const projects = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.",
    image: mock01,
    labels: ["SQL", "Python", "Excel"],
  },
  {
    id: 2,
    title: "Data Analysis Project",
    description:
      "Analyzed large datasets using Python and SQL, visualizing insights through Tableau to drive business decisions.",
    image: mock02,
    labels: ["Python", "SQL", "Tableau"],
  },
  // Add more projects here...
];

// Reusable ProjectCard Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {

  return (
    <Container className="project-container">
      <div className="project-content">
        <h2 className="project-description">{project.description}</h2>
        <img
          src={project.image}
          alt={`${project.title} Mockup`}
          className="project-image"
        />
        <div className="flex-chips">
          {project.labels.map((label, index) => (
            <Chip
              key={index}
              className="chip MuiChip-outlined"
              label={label}
              variant="outlined"
            />
          ))}
        </div>
        <h3>{project.title}</h3>
      </div>
    </Container>
  );
};

// Main Component
export default function BasicGrid() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
