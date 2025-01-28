import React from "react";
import Masonry from "react-masonry-css";
import Chip from "@mui/material/Chip";
import { Container } from "react-bootstrap";
import "../assets/styles/Project.scss";

// Import project mockups dynamically for scalability
import ngo from "../assets/images/ngo_project_image.jpg";
import games from "../assets/images/video_game.jpg";
import mental from "../assets/images/mentalhealth.jpg";
import motorcycle from "../assets/images/motorcycle.jpg";
import house from "../assets/images/house.jpeg";
import coffee from "../assets/images/coffeeshop.jpg";
import crimes from "../assets/images/lacrimes.jpg";
import churn from "../assets/images/churn.jpg";
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
    link: string;
  };
  
// Project Data Array
const projects = [
  // project format
  // {
  //   id: 1,
  //   title: "Full Stack Web Development",
  //   description:
  //     "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.",
  //   image: mock02,
  //   labels: ["SQL", "Python", "Excel"],
  //   link: "https://google.com"
  // },
  {
      id: 8,
      title: "Bank Churning Prediction Model",
      description:
        ".",
      image: churn,
      labels: ["SQL", "Python"],
      link: "https://github.com/kzha0676/ML_bank_churn"
    },
  {
      id: 7,
      title: "LA Crime Analysis",
      description:
        "",
      image: crimes,
      labels: ["SQL", "Python", "Tableau"],
      link: "https://github.com/kzha0676/la_crime_analysis"
    },
  {
      id: 6,
      title: "Coffee Shop Sales",
      description:
        "",
      image: coffee,
      labels: ["Excel"],
      link: "https://github.com/kzha0676/Coffee_shop_sales"
    },
  { 
      id: 5,
      title: "House Pricing Prediction Model",
      description:
        "",
      image: house,
      labels: ["SQL", "Python"],
      link: "https://github.com/kzha0676/House_Prices_ML"
    },
  {
    id: 4,
    title: "Part Sales",
    description:
      "In this project, I will analyze sales data for a motorcycle parts company operating three warehouses. The focus is on understanding wholesale revenue by product line, examining month-to-month trends, and comparing performance across warehouses. Additionally, I will account for the impact of different payment methods, each with varying fees.",
    image: motorcycle,
    labels: ["SQL"],
    link: "https://github.com/kzha0676/part_sales"
  },
  {
    id: 3,
    title: "Student Mental Health",
    description:
      "This project explores the mental health impact of studying abroad, using survey data from a Japanese international university. Key findings highlight the increased risk of mental health challenges among international students and the roles of social connectedness and acculturative stress in predicting depression.",
    image: mental,
    labels: ["SQL"],
    link: "https://github.com/kzha0676/students_mental_health"
  },
  {
    id: 2,
    title: "Gaming Analsysis",
    description:
      "This project analyzes critic and user scores alongside sales data for the top 400 video games released since 1977. The goal is to identify a potential 'golden age' of video games based on user and critic preferences while also exploring the business side of gaming through sales trends.",
    image: games,
    labels: ["SQL"],
    link: "https://github.com/kzha0676/gaming_analysis"
  },
  {
    id: 1,
    title: "NGO Impact Analysis",
    description: `
This project involves analyzing the GoodThought NGO PostgreSQL database, which contains detailed records of assignments, funding, impacts, and donor activities from 2010 to 2023. The goal is to uncover insights into the organization's efforts in education, healthcare, and sustainable development, highlighting its impact on underprivileged communities worldwide.
`,
    image: ngo,
    labels: ["SQL"],
    link: "https://github.com/kzha0676/impact_analysis"
  },
  // Add more projects here...
];

// Reusable ProjectCard Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {

  return (
    <Container className="project-container">
      <a href={project.link} target="_blank">
      <div className="project-content">
        <h3 className="project-description">{project.description}</h3>
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
      </a>
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
