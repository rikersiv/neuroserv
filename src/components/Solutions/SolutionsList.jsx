import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./SolutionsList.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolutionsList = () => {
    const sectionRef = useRef(null);
    const solutions = [
        {
            title: "Neural AI Engine",
            description: "Tracks Cognitive Performance And Adjusts In Real-Time.",
            bgImage: "/assets/images/Solutions/solution1.jpg",
        },
        {
            title: "Gamified Intelligence",
            description: "Making mental well-being more effective and accessible.",
            bgImage: "/assets/images/home/image3.jpg",
        },
        {
            title: "Cognitive Training Modules",
            description: "Transforming workplace productivity through neuroscience.",
            bgImage: "/assets/images/home/image3.jpg",
        },
        {
            title: "Enterprise Intelligence Systems",
            description: "Unlocking the potential of data for cognitive enhancement.",
            bgImage: "/assets/images/home/image3.jpg",
        },
    ];

    useEffect(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            pin: true,
            pinSpacing: false
        });
    });

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.container} ref={sectionRef}>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>SOLUTIONS<br />WE OFFER</h2>
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
                                    <div className={styles.icon}>
                                        <Image
                                            src="/assets/images/icons/arrow_up.svg"
                                            alt="Arrow Icon"
                                            width={8}
                                            height={8}
                                            className="whiteFilter"
                                            style={{ transform: "rotate(40deg)" }}
                                        />
                                    </div>
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
