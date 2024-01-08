"use client";
import React from "react";
import informant from "@/public/informant.jpg";
import stockzu from "@/public/stockzu.jpg";
import smartdraws from "@/public/smartdraws.png";
import Project from "./Project";

const projectsData = [
  {
    title: "Informant",
    description:
      "Blockchain based anonymous crime testimony system with decentralized database.",
    tags: ["Thirdweb", "Next.js", "Ethers.js", "Tailwind", "Framer-Motion"],
    imageUrl: informant,
  },
  {
    title: "Stockzu",
    description:
      "STOCKZU is an AI-based future stock predictor powered by most trendy LSTM model. Forecasting future of any stock out in the whole world. You name it, We have it!",
    tags: ["Streamlit", "LSTM-Model", "Python", "Kaggle", "Jupyter"],
    imageUrl: stockzu,
  },
  {
    title: "Smart Draws",
    description:
      "Decentralized lottery system for fair and equal opportunity for all gamblers!",
    tags: ["Next.js", "Truffle", "Ethers.js", "Thirdweb", "Framer-Motion"],
    imageUrl: smartdraws,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Projects
      </h2>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project
              title={project.title}
              desc={project.description}
              tags={project.tags}
              imageurl={project.imageUrl}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
