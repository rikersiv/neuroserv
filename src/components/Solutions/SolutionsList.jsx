import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./SolutionsList.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const SolutionsList = () => {
    const sectionRef = useRef(null);
    const solutions = [
        {
            title: "Bio-adaptive personalization",
            description: "Engineered for mindfulness, focus, and emotional resilience.",
            bgImage: "/assets/images/Solutions/personalization.png",
            href: "/solutions/bio-adaptive-personalization",
        },
        {
            title: "Gamified Intelligence",
            description: "Redefining human potential through AI, neuroscience, and gaming.",
            bgImage: "/assets/images/Solutions/gamified-intelligence.png",
            href: "/solutions/gamified-intelligence",
        },
        {
            title: "Multi-industry applications",
            description: "Consumer wellness, corporate performance, education.",
            bgImage: "/assets/images/Solutions/applications.png",
            href: "/solutions/multi-industry-applications",
        },
        {
            title: "Continuous testing",
            description: "Through gameplay provided unmatched AI model performance.",
            bgImage: "/assets/images/Solutions/continuous-testing.png",
            href: "/solutions/continuous-testing",
        },
    ];

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            pin: true,
            pinSpacing: false
        });
    
        return () => {
            trigger.kill();
        };
    }, []); 
    

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.container} ref={sectionRef}>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>OUR<br />MODEL</h2>
                <div className={styles.grid}>
                    <div className={styles.list}>
                        <p className={styles.subheading}>Solutions We Offer:</p>
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.item} ${activeIndex === index ? styles.active : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <p className={`${styles.itemName}`}>{item.title}</p>
                                {activeIndex === index && (
                                    <Link className={styles.icon} href={item.href}>
                                        <Image
                                            src="/assets/images/icons/arrow_up.svg"
                                            alt="Arrow Icon"
                                            width={8}
                                            height={8}
                                            className="whiteFilter"
                                            style={{ transform: "rotate(40deg)" }}
                                        />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.preview}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={solutions[activeIndex].bgImage}
                                alt={solutions[activeIndex].title}
                                width={600}
                                height={400}
                                className={styles.image}
                                
                            />
                        </div>
                        <p className={styles.description}>
                            {solutions[activeIndex].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionsList;
