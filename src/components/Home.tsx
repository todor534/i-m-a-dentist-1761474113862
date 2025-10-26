import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => (
  <main className={styles.heroSection}>
    <section className={styles.heroContent}>
      <div className={styles.textCol}>
        <h1>Brighten Your Smile with Dr. Smith</h1>
        <p>
          Trusted dentist providing gentle, modern dental care for all ages. Discover comprehensive services in a comfortable, friendly environment.
        </p>
        <Link to="/contact" className={styles.ctaBtn}>Book Appointment</Link>
      </div>
      <div className={styles.imageCol}>
        <img src="@@img_hero@@" alt="Dr. Smith in the dental office" className={styles.heroImg} />
      </div>
    </section>
    <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <img src="@@img_icon1@@" alt="Cleaning" className={styles.icon} />
          <h3>Teeth Cleaning</h3>
          <p>Gentle, thorough cleanings to keep your smile healthy and bright.</p>
        </div>
        <div className={styles.serviceCard}>
          <img src="@@img_icon2@@" alt="Whitening" className={styles.icon} />
          <h3>Whitening</h3>
          <p>Professional whitening treatments for a radiant, confident smile.</p>
        </div>
        <div className={styles.serviceCard}>
          <img src="@@img_icon3@@" alt="Checkups" className={styles.icon} />
          <h3>Checkups</h3>
          <p>Comprehensive exams and personalized care for every patient.</p>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
