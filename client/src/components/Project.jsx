import React from 'react';
import styles from './styles/Project.css';

const Project = () => (
  <section id="project" className={styles.project}>
    <div className={styles.content}>
      <h2>
        Projects
      </h2>
      <hr />
      <div className={styles.panel}>
        <div className={styles.entry}>
          <img src="/img/yalp.png">

          </img>
        </div>
        <div className={styles.entry}>
          <img src="/img/yalp.png">

          </img>
        </div>

      </div>
    </div>
  </section>
);

export default Project;
