import React from 'react';
import styles from './styles/Sidebar.css';

const Sidebar = (props) => (
  <div className={styles.sidebar}>
    <a className="active" href="#profile">Profile</a>
    <a href="#experience">Experience</a>
    <a href="#skill">Skills</a>
    <a href="#project">Project</a>
    <a href="#contact">Contacts</a>
  </div>
);

export default Sidebar;
