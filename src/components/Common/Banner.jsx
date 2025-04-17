import React, { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "@/Layout/Header";

gsap.registerPlugin(ScrollTrigger);

function Banner({ bgPath, overlayPath, title, quote, author }) {
    const overlayRef = useRef(null);
    const bannerRef = useRef(null);
    const textRef = useRef(null);
    const quoteRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            overlayRef.current,
            {
                width: "75%",
                height: "75%",
                bottom: "0%",
                left: "50%",
            },
            {
                width: "100%",
                height: "100%",
                bottom: "0%",
                left: "50%",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: overlayRef.current,
                    start: "bottom 90%",
                    end: "bottom 60%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            textRef.current,
            {
                y: 0,
                opacity: 1,
            },
            {
                y: -100,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: overlayRef.current,
                    start: "bottom 90%",
                    end: "bottom 60%",
                    scrub: true,
                },
            }
        );

        ScrollTrigger.create({
            trigger: bannerRef.current,
            start: "top top",
            endTrigger: quoteRef.current,
            end: "bottom top",
            pin: true,
            pinSpacing: false
        });

        ScrollTrigger.create({
            trigger: quoteRef.current,
            start: "top top",
            pin: true,
            pinSpacing: false,
        });
    }, []);

    return (
        <>
            <div ref={bannerRef} className={styles.banner} style={{ backgroundImage: `url('/assets/images/Common/${bgPath}')` }}>
            <Header />
                <div className={styles.bannerContent}>
                    <div className={styles.overlayImage} ref={overlayRef}>
                        <h1 ref={textRef}>{title}</h1>
                        <Image src={`/assets/images/Common/${overlayPath}`} alt="flower" width={1000} height={1000} />
                    </div>
                </div>
            </div>

            <div ref={quoteRef} className={styles.quoteContainer}>
                <h2 className={styles.quoteText}>{quote}</h2>
                <small className={styles.quoteAuthor}>— {author}</small>
            </div>
        </>
    );
}

export default Banner;
