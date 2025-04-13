import React, { useEffect, useRef } from "react";
import Button from "../CTAs/Button";
import styles from "./LeftColumnSection.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LeftColumnSection({ iswhite, isButtonWhite, text, description, imgSrc, buttonText, buttonHref, zindex }) {
    const sectionRef = useRef(null);
    const logoRef = useRef(null);
    const lineRef = useRef(null);
    const imageRef = useRef(null);
    const textRefs = useRef([]);
    textRefs.current = [];

    useEffect(() => {
        const section = sectionRef.current;
        const logo = logoRef.current;
        const line = lineRef.current;
        const image = imageRef.current;

        gsap.fromTo(image, {
            width: '120%',    
            opacity: 0,
            transformOrigin: "left center"
        }, {
            width: '71%',       
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 25%",
                toggleActions: "play none none reverse"
            }
        });


        gsap.from(logo, {
            x: 500,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 15%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5,
            scrollTrigger: {
                trigger: section,
                start: "top 10%",
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
                <div className={styles.columnText}>
                    <div className={styles.linePath}>
                        <Image ref={logoRef} src="/assets/images/icons/logo.svg" alt="Logo" width={50} height={50} className={`${iswhite ? 'filter' : ''}`} />
                        <svg ref={lineRef} className={`${styles.line} ${iswhite ? styles.filter : ''}`} width="58.4rem" height="5" viewBox="0 0 58.4rem 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0.5" x2="58.4rem" y2="0.5" stroke={iswhite ? "#1a6393" : "#ffffff"} strokeWidth="5" />
                        </svg>
                    </div>
                    <h1 ref={(el) => textRefs.current.push(el)} className={`${iswhite ? 'white' : 'blue'}`}>{text}</h1>
                    <p ref={(el) => textRefs.current.push(el)} className={`${iswhite ? 'white' : 'blue'}`}>{description}</p>
                    <div ref={(el) => textRefs.current.push(el)}>
                        <Button text={buttonText} arrowSrc="/assets/images/icons/arrow_left.svg" href={buttonHref} isWhite={isButtonWhite} />
                    </div>
                </div>
                <div className={styles.columnImage} ref={imageRef}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={imgSrc}
                            alt="Woman wearing a VR"
                            layout="fill"
                            objectFit="cover"
                            quality={90}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftColumnSection;