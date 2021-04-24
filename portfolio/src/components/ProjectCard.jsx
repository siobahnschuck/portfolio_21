import React, { useState } from 'react'
import { projects } from '../projects'
import '../css/Project.css'

const ProjectCard = () => {


  return (
    <div className="project-card">
      {projects.map((pro) => (
        <div className="card-container">
          <h3>{pro.title}</h3>
          <p>{pro.description}</p>
          <p>{pro.tech}</p>
          <img className="screenshot" src={pro.image} alt="screenshot" />
          <a href={pro.link}>Live Site</a>
          <a href={pro.repo}>GitHub</a>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard