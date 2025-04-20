import React, { useEffect, useRef } from "react";
import styles from "./RightColumnSection.module.css";
import Image from "next/image";
import Button from "../CTAs/Button";
import parse from "html-react-parser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RightColumnSection({ iswhite, isButtonWhite, text, description, imgSrc, buttonText, buttonHref, zindex, videoSrc }) {
    const sectionRef = useRef(null);
    const imageContainerRef = useRef(null);
    const logoRef = useRef(null);
    const lineRef = useRef(null);
    const textRefs = useRef([]);
    textRefs.current = [];

    useEffect(() => {
        const section = sectionRef.current;
        const imageContainer = imageContainerRef.current;
        const logo = logoRef.current;
        const line = lineRef.current;

        gsap.set(imageContainer, { height: "20%" });

        gsap.from(logo, {
            x: -500,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.to(imageContainer, {
            height: "100%",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 20%",
                end: "top 10%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 40%",
                toggleActions: "play none none reverse"
            }
        });

        textRefs.current.forEach((el, index) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.5 * (index + 1),
                scrollTrigger: {
                    trigger: section,
                    start: "top 5%",
                    toggleActions: "restart none none reverse"
                }
            });
        });

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false
        });

    }, []);

    return (
        <div ref={sectionRef} className={`${styles.columnWrapper} ${iswhite ? 'white' : 'blue'}`} style={{ zIndex: zindex }}>
            <div className={styles.gridContainer}>
                <div className={styles.columnImage}>
                    <div className={styles.linePath}>
                        <div className={styles.line}>
                            <svg ref={lineRef} className={`${iswhite ? 'filter' : ''}`} width="100%" height="5" viewBox="0 0 100 5" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0.5" x2="100" y2="0.5" stroke={iswhite ? "#1a6393" : "#ffffff"} strokeWidth="5" />
                            </svg>
                        </div>
                        <Image ref={logoRef} src="/assets/images/icons/logo.svg" alt="Logo" width={50} height={50} className={`${iswhite ? 'filter' : ''}`} />
                    </div>

                    <div ref={imageContainerRef} className={styles.imageContainer}>
                        {videoSrc ? (
                            <video className={styles.media} loop muted >
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image src={imgSrc} alt="Image" width={450} height={400} className={styles.image} />
                        )}
                    </div>
                </div>
                <div className={styles.columnText}>
                    <h1 ref={(el) => textRefs.current.push(el)} className={`${iswhite ? 'black' : 'white'}`}>{text}</h1>
                    <p ref={(el) => textRefs.current.push(el)} className={`${iswhite ? 'black' : 'white'}`}>{parse(description)}</p>
                    <div ref={(el) => textRefs.current.push(el)} className={styles.button}>
                        <Button text={buttonText} arrowSrc="/assets/images/icons/arrow_left.svg" href={buttonHref} isWhite={isButtonWhite} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightColumnSection;
