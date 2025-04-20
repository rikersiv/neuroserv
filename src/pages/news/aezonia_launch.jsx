import React from "react";
import styles from "./news.module.css";
import Image from "next/image";
import Header from "@/Layout/Header";
import Link from "next/link";
import Button from "@/components/CTAs/Button";
import NewsList from "@/components/News/NewsList";
import Footer from "@/Layout/Footer";

function AezoniaLaunch() {

    const socials = [
        { name: "LinkedIn", url: "https://www.linkedin.com/company/neuraserv/", src: "/assets/images/icons/linkedin.png" },
        { name: "Twitter", url: "https://twitter.com/neuraserv", src: "/assets/images/icons/twitter.png" },
        { name: "Facebook", url: "https://www.facebook.com/neuraserv", src: "/assets/images/icons/facebook.png" },
    ];

    return (
        <>
            <Header iswhite={true} />
            <div className={styles.newsMainContainer}>
                <div className={styles.newsContent}>
                    <h1>Neuraserv Launches Aezonia: The Next Evolution in Cognitive Gaming</h1>
                    <span>Published on August 22, 2024</span>
                    <Image src="/assets/images/News/limitless_you.png" alt="Limitless You" className={styles.imageBanner} width={1000} height={500} />
                    <div className={styles.newsFlex}>
                        <div className={styles.text}>
                            <h4>“Where cognitive enhancement meets immersive gaming.”</h4>
                            <p><br /><br />Neuraserv proudly announces the launch of Aezonia, its groundbreaking cognitive gaming platform that merges neuroscience, AI, and immersive storytelling to create an unparalleled mental enhancement experience.<br /><br />Designed to stimulate the mind, enhance focus, and promote mindfulness, Aezonia offers users a unique opportunity to engage in a gamified world where entertainment meets cognitive science.<br /><br />“Aezonia isn&apos;t just another game — it&apos;s a journey into the depths of the human mind,” says Dr. [Name], Chief Neuroscientist at Neuraserv. “We&apos;ve combined years of cognitive research with AI-driven personalization to create an experience that&apos;s as engaging as it is beneficial.”</p>
                        </div>
                        <div className={styles.socials}>
                            {socials.map((social, index) => (
                                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <Image src={social.src} alt={social.name} width={25} height={25} className={styles.socialIcon} />

                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.newsFlex} style={{ width: "95%" }}>
                        <Image src="/assets/images/Aezonia/aezonia5.png" alt="Aezonia Launch" className={styles.flexImage} width={250} height={250} />
                        <Image src="/assets/images/Aezonia/aezonia4.jpg" alt="Aezonia Launch" className={styles.flexImage} width={250} height={500} />
                    </div>

                    <div className={styles.text}>
                        <h4>Key Features of Aezonia</h4>
                        <p><br /><br />
                            🧠 <strong>AI-Personalized Gameplay</strong> - Adapts challenges based on the player&apos;s cognitive performance.<br />🎮 <strong>Immersive Storytelling</strong> - Rich narratives designed to boost emotional engagement and mindfulness.<br />💡 <strong>Cognitive Training Modules</strong> - Scientifically validated puzzles and activities that enhance memory, focus, and problem-solving.<br />🌟 <strong>Mindfulness Integration</strong> - Relaxation and meditation elements woven seamlessly into gameplay.</p>
                    </div>


                    <div className={styles.newsFlex}>
                        <div className={`${styles.text} ${styles.margin}`}>
                            <h4>Why Aezonia Matters</h4>
                            <p><br /><br />Cognitive decline and mental fatigue have become prevalent in today&apos;s fast-paced world. Aezonia offers a fun, engaging, and scientifically-backed way to train the mind while providing moments of relaxation and mental clarity.</p>
                        </div>
                    </div>

                    <Button text="Discover Aezonia Today" arrowSrc="/assets/images/icons/arrow_left.svg" href="/solutions/aezonia" isWhite={false} />

                    <div className={styles.newsVidWrapper}>
                        <video className={styles.video} autoPlay loop muted>
                            <source src="/assets/images/Aezonia/aezonia_vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>


                </div>
            </div>

            <div className={styles.newsContainer}>
                <Image src="/assets/images/icons/logo_outline.svg" alt="logo" width={500} height={800} className={styles.logoOutline} />
                <div className={styles.newsWrapper}>
                    <div className={styles.header}>
                        <h2>Latest News</h2>
                        <div>
                            <Button text="See All" arrowSrc="/assets/images/icons/arrow_left.svg" href="/news" isWhite={false} />
                        </div>
                    </div>
                    <div>
                        <NewsList />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default AezoniaLaunch;