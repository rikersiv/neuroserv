import useLogoAnimation from "@/hooks/useLogoAnimation";
import styles from "./Homebanner.module.css";
import React from "react";
import Image from "next/image";
import Button from "../CTAs/Button";

const HomeBanner = ({ bannerContentRef }) => {

  return (
    <div className={styles.homebanner}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src="/assets/images/Home/Homebanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Image ref={logoRef} src="/assets/images/icons/logo_full.svg" alt="Logo" className={styles.bannerlogo} width={150} height={50} /> */}
      <div ref={bannerContentRef} className={styles.bannerContent}>
        <h4>
          Expanding Human Potential With AI & Neuroscience
        </h4>

        <Button arrowSrc="/assets/images/icons/arrow_left.svg" text="Discover neuraserv" href="/" isWhite={true} />
      </div>
    </div>
  );
};

export default HomeBanner;
