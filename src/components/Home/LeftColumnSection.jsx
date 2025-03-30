import React from "react";
import Button from "../CTAs/Button";
import styles from "./LeftColumnSection.module.css";
import Image from "next/image";

function LeftColumnSection({ iswhite, isButtonWhite, text, description, imgSrc, buttonText }) {
  return (
    <div className={`${styles.columnWrapper} ${iswhite ? 'white' : 'blue'}`}>
        <div className={styles.gridContainer}>
            <div className={styles.columnText}>
                <div className={styles.linePath}>
                <Image src="/assets/images/icons/logo.svg" alt="Logo" width={50} height={50} className={`${iswhite ? 'filter' : ''}`}/>
                <svg className={`${styles.line} ${iswhite ? styles.filter : ''}`} width="58.4rem" height="5" viewBox="0 0 58.4rem 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0.5" x2="58.4rem" y2="0.5" stroke={iswhite ? "#1a6393" : "#ffffff"} strokeWidth="5"/>
                </svg>
                </div>
                <h1 className={`${iswhite ? 'white' : 'blue'}`}>{text}</h1>
                <p className={`${iswhite ? 'white' : 'blue'}`}>{description}</p>
                <Button text={buttonText} arrowSrc="/assets/images/icons/arrow_left.svg" href="/get-started" isWhite={isButtonWhite}/>
            </div>
            <div>
                <Image src={imgSrc} alt="Woman weaing a VR" width={450} height={400} className={styles.columnImage}/>
            </div>
        </div>
        
    </div>
    
  );
}

export default LeftColumnSection;