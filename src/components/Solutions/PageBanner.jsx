import React from "react";
import styles from './PageBanner.module.css'
import Image from "next/image";

function PageBanner() {
    return (
        <div className={styles.bannerWrapper}>
            <Image src="/assets/images/Aezonia/aezonia.png" alt="Aezonia" className={styles.bannerImage} width={1000} height={50} />
            <div className={styles.bannerContentWrapper}>
                <div className={styles.bannerContent}>
                    <h1>Aezonia</h1>
                    <p>is the first-of-its-kind bio-adaptive cognitive enhancement game</p>
                </div>
            </div>
        </div>
    )
}

export default PageBanner;