import React from "react";
import styles from "./RightColumnSection.module.css";
import Image from "next/image";
import Button from "../CTAs/Button";
import parse from "html-react-parser";

function RightColumnSection({ iswhite, isButtonWhite, text, description, imgSrc, buttonText }) {
    return (
        <div className={`${styles.columnWrapper} ${iswhite ? 'white' : 'blue'}`}>
            <div className={styles.gridContainer}>
                <div className={styles.columnImage}>
                    <div className={styles.linePath}>
                        <svg className={`${styles.line} ${iswhite ? 'filter' : ''}`} width="34rem" height="5" viewBox="0 0 34rem 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0.5" x2="34rem" y2="0.5" stroke={iswhite ? "#1a6393" : "#ffffff"} strokeWidth="5" />
                        </svg>
                        <Image src="/assets/images/icons/logo.svg" alt="Logo" width={50} height={50} className={`${iswhite ? 'filter' : ''}`} />
                    </div>
                    <Image src={imgSrc} alt="Woman weaing a VR" width={450} height={400} className={styles.columnImage} />
                </div>
                <div className={styles.columnText}>
                    <h1 className={`${iswhite ? 'black' : 'white'}`}>{text}</h1>
                    <p className={`${iswhite ? 'black' : 'white'}`}>{parse(description)}</p>
                    <Button text={buttonText} arrowSrc="/assets/images/icons/arrow_left.svg" href="/get-started" isWhite={isButtonWhite} />
                </div>
            </div>

        </div>
    );
}

export default RightColumnSection;