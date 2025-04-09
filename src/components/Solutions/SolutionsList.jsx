import React, { useState } from "react";
import Image from "next/image";
import styles from "./SolutionsList.module.css";

const SolutionsList = () => {
    const solutions = [
        {
            title: "Neural AI Engine",
            description: "Tracks Cognitive Performance And Adjusts In Real-Time.",
            bgImage: "/assets/images/Solutions/abstract-blue-rings-background.jpg",
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

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.container}>
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
                                {item.title}
                                {activeIndex === index && (
                                    <div className={styles.icon}>
                                        <Image
                                            src="/assets/images/icons/arrow_left.svg"
                                            alt="Arrow Icon"
                                            width={20}
                                            height={20}
                                            className="whiteFilter"
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
