import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import styles from './HomeStyles.module.css';

function ScrollDown() {
  return (
    <div className={styles.home__scroll}>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className={`${styles.home__scroll_button} ${styles.button__flex}`} // Use styles for CSS module classes
      >
        <svg
          width="32px"
          height="32px"
          className={styles.home__scroll_mouse}
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.5',
          }}
        >
          <path
            className={styles.wheel}
            d="M123.359,79.775l0,72.843"
            style={{
              fill: 'none',
              stroke: 'var(--title-color, black)',
              strokeWidth: '20px',
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: 'none',
              stroke: 'var(--title-color, black)',
              strokeWidth: '20px',
            }}
          ></path>
        </svg>
        <span className={styles.home__scroll_name}>Scroll Down</span>
        <i className={`${styles.home__scroll_arrow} uil uil-arrow-down`}></i>
      </Link>
    </div>
  );
}

export default ScrollDown;
