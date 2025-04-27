import React from "react";
import styles from './PageBanner.module.css'
import Image from "next/image";

function SolutionsBanner({ bgPath, title, description }) {
    return (
        <div className={styles.bannerWrapper}>
            <video className={styles.bannerVideo} autoPlay loop muted>
                <source src={`/assets/images/Solutions/${bgPath}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerContentWrapper}>
                <div className={styles.solutionsBannerContent}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default SolutionsBanner;