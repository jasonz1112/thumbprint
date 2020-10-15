import React from 'react';
import styles from './index.module.scss';

const description = 'Assets for building high-quality, consistent user experiences at Thumbtack.';

const Hero = () => (
    <div className={styles.hero}>
        <div className={styles.imageWrap}>
            <img src="/hero-img.svg" className={styles.image} alt="" />
        </div>
        <div className={styles.textBlock}>
            <img src="/thumbprint-logo.svg" className={styles.logo} alt="Thumbprint" />
            <div className={styles.subhead}>Design System</div>
            <div className={styles.description}>{description}</div>
        </div>
    </div>
);

export default Hero;
