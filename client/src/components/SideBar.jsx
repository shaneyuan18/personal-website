import React from 'react';
import styles from './styles/Sidebar.css';

const Sidebar = (props) => (
  <div className={styles.sidebar}>
    <a className="active" href="#home">Home</a>
    <a href="#profolio">Profolio</a>
    <a href="#contact">Contact</a>
  </div>
);

export default Sidebar;
