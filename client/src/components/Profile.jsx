import React from 'react';
import styles from './styles/Profile.css';

const Profile = () => (
  <section id="profile" className={styles.profile}>
    <div>
      <h2>
        Profile
      </h2>
      <span>
        I am a San Francisco based Software Engineer
      </span>
      <div className={styles.column}>
        <div>
          <div className={styles.avatar}>
            <img src="/img/profile.jpg">
            </img>
          </div>
        </div>
        <div className={styles.bio}>
          <h3>
            About Me
          </h3>
          <p>
            I'm currently working as a Software Engineering Teaching Associate at Hack Reactor, where I build full stack applications with talented people and mentoring new engineers. I graduated from
            University of California, San Diego with a B.S. degree in Electrical Engineering in 2015.
            After working as a Business Consultant at <a className="underline-link" href="http://www.unitedamgpartners.com/">United AMG Partners</a>, 
            I found my passion in creating and optimizing web applications, which has always been something I wanted to pursue during college and grad school.
          </p>
          <p>
            As a software engineer, I enjoy bridging the gap between engineering and business &mdash; combining my technical expertise
            and management background to create applications that target real world problems. Even though the tech industry is becoming more saturated, 
            I still believe that there are tons of <a className="underline-link" href="https://en.wikipedia.org/wiki/Blue_Ocean_Strategy">Blue Oceans</a> out there for me to discover.
          </p>
          <p>
            <strong>When I'm not in front of a computer</strong>, I'm probably dancing, looking for new restaurants,
            or taking pictures for my friends.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Profile;