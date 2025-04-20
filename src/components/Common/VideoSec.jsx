import React, { useRef, useEffect } from "react";
import styles from "./VideoSec.module.css";
import Button from "../CTAs/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VideoSec({ videoSrc, title, buttonText, buttonhref }) {
    const videoRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const overlay = overlayRef.current;

        ScrollTrigger.create({
            trigger: video,        
            start: "top top",      
            endTrigger: overlay,   
            end: "bottom top",     
            pin: true,            
            pinSpacing: false
          });

        ScrollTrigger.create({
            trigger: overlay,
            start: "top top",
            pin: true,
            pinSpacing: false
        });

    }, []);
    return (
        <>
            <div ref={videoRef} className={styles.homeBottom}>
                <video className={styles.video} autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div ref={overlayRef} className={styles.bottomOverlay}>
                <div className={styles.bottomContent}>
                    <h1>{title}</h1>
                    <Button text={buttonText} arrowSrc="/assets/images/icons/arrow_left.svg" href={buttonhref} isWhite={true} />
                </div>
            </div>
        </>
    )
}

export default VideoSec;