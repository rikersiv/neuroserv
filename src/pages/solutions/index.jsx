import Banner from "@/components/Common/Banner";
import LeftColumnSection from "@/components/Home/LeftColumnSection";
import SolutionsList from "@/components/Solutions/SolutionsList";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Head from "next/head";
import React from "react";

function solutions() {
    return (
        <>
            <Head>
                <title>Neuraserv | Solutions</title>
                <meta name="description" content="Explore Neuraserv's innovative solutions designed to enhance cognitive performance, emotional well-being, and personal development. Our AI-driven tools and neuroscience-based programs empower individuals to unlock their full potential." />
            </Head>
            <div style={{ overflowX: "hidden" }}>

                <Banner bgPath='abstract-background.jpg'
                    overlayPath={'flower-background.png'}
                    title={'Intelligence That Evolves With You'}
                    quote={'"The future belongs to those who learn more skills and combine them in creative ways."'}
                    author={"ROBERT GREENE"}
                />
                <LeftColumnSection
                    text="Cognitive Tools Designed For Peak Performance"
                    description="Our AI-powered solutions bridge neuroscience, gamification, and real-time data analysis to enhance cognitive potential for individuals, teams, and enterprises."
                    imgSrc={"/assets/images/Common/brain-scan.jpg"}
                    iswhite={false}
                    isButtonWhite={true}
                    buttonHref="/contact"
                    buttonText="Get in Touch"
                    zindex={4}
                />
                <SolutionsList />
                <Footer />
            </div>
        </>
    )
}

export default solutions;