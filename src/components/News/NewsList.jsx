import React from "react";
import styles from "./newsList.module.css";
import Image from "next/image";

function NewsList() {
    const news = [
        {
            title: "Neuraserv Launches Aezonia: The Next Evolution in Cognitive Gaming",
            date: "August 22, 2024",
            bgImage: "/assets/images/News/news1.jpg",
        },
        {
            title: "Neuraserv Partners with Leading Universities for Cognitive Research Breakthroughs",
            date: "September 5, 2024",
            bgImage: "/assets/images/News/news2.jpg",
        },
        {
            title: "AI Meets Neuroscience: Neuraserv Unveils Its Neural AI Engine for Personalized Learning",
            date: "October 2, 2024",
            bgImage: "/assets/images/News/news3.jpg",
        },
        {
            title: "Exploring the Future of Mind Enhancement: Neuraserv to Headline Global Neurotech Summit",
            date: "October 20, 2024",
            bgImage: "/assets/images/News/news4.jpg",
        },
    ];

    return (
        <div className={styles.newsListWrapper}>
            {news.map((item, index) => (
                <div key={index} className={styles.newsCard}>
                    <div className={styles.imageContainer}>
                        <Image src={item.bgImage} alt={item.title} width={300} height={200} className={styles.newsImage} />
                    </div>
                    <p>{item.date}</p>
                    <h3>{item.title}</h3>
                    
                </div>
            ))}
        </div>
    );
}

export default NewsList;