import React from 'react';
import styles from './styles/Project.css';
import ProjectEntry from './ProjectEntry.jsx';
import projects from './data/project';
console.log(projects);

const Project = () => (
  <section id="project" className={styles.project}>
    <div className={styles.content}>
      <h2>
        Projects
      </h2>
      <hr />
      <div className={styles.panel}>
        {projects.map(projectData => <ProjectEntry project={projectData} />)}
      </div>
    </div>
  </section>
);

export default Project;
