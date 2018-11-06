import React from 'react';
import styles from './styles/Experience.css';

const Experience = () => (
  <section id="experience" className={styles.experience}>
    <div className={styles.content}>
      <h2>
        Experience
      </h2>
      <hr />
      <div className={styles.entry}>
        <div className={styles.leftCol}>
          <h4>
            Hack Reactor
          </h4>
          <p>
            Sep 2017 - Present
          </p>
        </div>
        <div className={styles.rightCol}>
          <strong>
            Software Engineering instructor assistant
          </strong>
          <p>
            Some SOmefiefoi fdsifjnisdu  fjidsufvhvis  psdsfiuhadgdguidsahguiasdg uasdhgiudads guasdiugfh
          </p>
        </div>
      </div>
      <div className={styles.entry}>
        <div className={styles.leftCol}>
          <h4>
            Epic Sciences
          </h4>
          <p>
            Oct 2016 - Dec 2017
          </p>
        </div>
        <div className={styles.rightCol}>
          <strong>
            MATLAB Engineer
          </strong>
          <p>
            Some SOmefiefoi fdsifjnisdu  fjidsufvhvis  psdsfiuhadgdguidsahguiasdg uasdhgiudads guasdiugfh
          </p>
        </div>
      </div>
      <div className={styles.entry}>
        <div className={styles.leftCol}>
          <h4>
            Scripps Institution of Oceanography
          </h4>
          <p>
            Nov 2014 - Jan 2017
          </p>
        </div>
        <div className={styles.rightCol}>
          <strong>
            Engineering Researcher
          </strong>
          <p>
            Some SOmefiefoi fdsifjnisdu  fjidsufvhvis  psdsfiuhadgdguidsahguiasdg uasdhgiudads guasdiugfh
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
