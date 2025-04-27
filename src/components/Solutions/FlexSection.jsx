import React, { useEffect, useRef } from "react";
import styles from './FlexSection.module.css';
import Image from "next/image";
import parse from "html-react-parser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlexSection({ header, description, imgPath }) {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 50%",
                toggleActions: "play none none reverse",
            }
        });
    
        tl.from(textRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }).from(imageRef.current, {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }, "-=0.8");
    
        const pinTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            pin: true,
            pinSpacing: false
        });
    
        // Cleanup function
        return () => {
            // Kill timeline and its ScrollTrigger
            tl.kill();
            // Kill the pin ScrollTrigger
            pinTrigger.kill();
            // Optional: Update ScrollTrigger after cleanup
            ScrollTrigger.update();
        };
    }, []);

    return (
        <div className={styles.divContainer} ref={sectionRef}>
            <div className={styles.divWrapper}>
                <div className={styles.divContent} ref={textRef}>
                    <h2>{header}</h2>
                    <div className={styles.divContentText} >
                        <Image src="/assets/images/icons/logo.svg" alt="Logo" width={50} height={50} className="filter" />
                        <div className={styles.divText}>
                            {parse(description)}
                        </div>
                    </div>
                </div>

                <div className={styles.divImage} ref={imageRef}>
                    <div className={styles.imageWrapper}>
                        <Image src={`/assets/images/Solutions/${imgPath}`} alt={header} className={styles.image} width={1000} height={50} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FlexSection;
