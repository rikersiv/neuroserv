import Header from "@/Layout/Header";
import React from "react";
import styles from "./index.module.css";
import NewsList from "@/components/News/NewsList";
import Button from "@/components/CTAs/Button";
import Footer from "@/Layout/Footer";
import Image from "next/image";
import Head from "next/head";

function News() {
    return (
        <>
        <Head>
            <title>Neuraserv | News</title>
            <meta name="description" content="Stay updated with the latest news and updates from Neuraserv. Explore our latest projects, innovations, and insights into the future of technology." />
        </Head>
        <div>
            <Header iswhite={true}/>
            <div className={styles.newsContainer}>
                <div className={styles.newsWrapper}>
                    <Image src="/assets/images/icons/logo_outline.svg" alt="news" width={500} height={800} className={styles.newsLogo} />
                    <h2>Our News</h2>
                    <p>Every day is another opportunity to achieve excellence. Let&apos;s Build the Future Together.</p>
                    <NewsList />
                </div>
                <Button text="View More" href="/" isWhite={false} />
            </div>
            <Footer />
        </div>
        </>
    )
}

export default News;