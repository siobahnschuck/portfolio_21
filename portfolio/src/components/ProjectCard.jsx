import React, { useState } from 'react'
import { projects } from '../projects'

const ProjectCard = () => {


  return (
    <div>
      {projects.map((pro) => (
        <div>
          <h3>{pro.title}</h3>
          <p>{pro.description}</p>
          <p>{pro.tech}</p>
          <a>{pro.link}</a>
          <a>{pro.repo}</a>
          <img src={pro.image} />
        </div>
      ))}
    </div>
  )
}

export default ProjectCard