import React from 'react';
import styles from './styles/Skill.css';
import pageStyles from './styles/Page.css';

const Skill = () => (
  <section id="skill" className={`${styles.skill} ${pageStyles.page}`}>
    <div className={styles.content}>
      <h2>
        Skills
      </h2>
      <hr />
      <div className={styles.columns}>
        <div>
          <strong>
            Languages
          </strong>
          <ul>
            <li><i className="devicon-javascript-plain"></i> JavaScript</li>
            <li><i className="devicon-html5-plain"></i> HTML5</li>
            <li><i className="devicon-css3-plain"></i> CSS3</li>
            <li><i className="devicon-python-plain"></i> Python</li>
            <li><i className="devicon-csharp-plain"></i> C#</li>
            <li><i className="devicon-mysql-plain"></i> SQL</li>
          </ul>
        </div>
        <div>
          <strong>
            FrameWorks
          </strong>
          <ul>
            <li><i className="devicon-react-original"></i> React</li>
            <li><i className="devicon-angularjs-plain"></i> AngularJS</li>
            <li><i className="devicon-backbonejs-plain"></i> Redux</li>
            <li><i className="devicon-nodejs-plain"></i> Node.js</li>
            <li><i className="devicon-express-original"></i> Express</li>
            <li><i className="devicon-jest-plain"></i> Jest</li>
            <li><i className="devicon-jasmine-plain"></i> Jasmine</li>
          </ul>
        </div>
        <div>
          <strong>
            Tools
          </strong>
          <ul>
            <li> <i className="devicon-amazonwebservices-original"></i> AWS </li>
            <li> <i className="devicon-webpack-plain"></i> Webpack</li>
            <li> <i className="devicon-docker-plain"></i> Docker</li>
            <li> <i className="devicon-redis-plain"></i> Redis</li>
            <li> <i className="devicon-nginx-original"></i> NGINX </li>
            <li> <i className="devicon-jquery-plain"></i> JQuery</li>
            <li> <i className="devicon-babel-plain"></i> Babel</li>
          </ul>
        </div>
        <div>
          <strong>
            Other
          </strong>
          <ul>
            <li><i className="devicon-git-plain"></i> Git</li>
            <li><i className="devicon-github-plain"></i> Github </li>
            <li><i className="devicon-chrome-plain"></i> Chrome DevTools</li>
            <li><img src="https://s3-us-west-1.amazonaws.com/thedylanqian/postman.jpg" valign="top" width = "14.39" height = "15" alt =""/> Postman</li>
            <li><i className="devicon-postgresql-plain"></i> Postgres</li>
            <li><i className="devicon-mongodb-plain"></i> MongoDB</li>
          </ul>
        </div>

      </div>
      <div>This website is built with React framework</div>
      <a href="https://github.com/shaneyuan18/shaneyuan" className={styles.button}>
        See project on Github
      </a>
    </div>
  </section>
);

export default Skill;
