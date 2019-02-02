import React from 'react';
import styles from './styles/Project.css';
import pageStyles from './styles/Page.css';
import ProjectEntry from './ProjectEntry.jsx';
import projects from './data/project';

const Project = () => (
  <section id="project" className={`${styles.project} ${pageStyles.page}`}>
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
