import LeftColumnSection from "@/components/Home/LeftColumnSection";
import RightColumnSection from "@/components/Home/RightColumnSection";
import FlexSection from "@/components/Solutions/FlexSection";
import SolutionsBanner from "@/components/Solutions/SolutionsBanner";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Head from "next/head";
import React from "react";

function MultiIndustryApplications() {
    return (
        <>
         <Head>
                <title>Neuraserv | Multi-Industry Applications</title>
                <meta name="description" content="Translational neuroscience catalyzing paradigm shifts across diverse cognitive domains." />
            </Head>
            <div>
                <Header />
                <SolutionsBanner title={"Multi-industry Applications"}
                    description={"Translational neuroscience catalyzing paradigm shifts across diverse cognitive domains."}
                    bgPath={'applications.mp4'}
                />
                <FlexSection
                    header={"EXPANDING HUMAN POTENTIAL ACROSS SECTORS"}
                    description={"NeuroServ harnesses neuroscience-driven innovation across multiple industries through our carefully cultivated portfolio of specialized companies. With Aezonia establishing our breakthrough approach, we're now extending these principles into diverse markets with targeted solutions."}
                    imgPath={"applications-1.jpg"}
                />
                <LeftColumnSection
                    text="Transforming Five Key Domains"
                    description="<strong>Gaming & Personal Wellness:</strong> Our flagship product Aezonia delivers clinically-validated mindfulness through immersive gameplay.</br></br><strong>Corporate Development:</strong> Customized training solutions optimize executive function and decision-making in professional environments.</br></br><strong>Education:</strong> Adaptive learning platforms respond to individual cognitive styles, revolutionizing information retention."
                    imgSrc={"/assets/images/Solutions/applications-2.png"}
                    iswhite={false}
                    isButton={false}
                    zindex={3}
                />

                <RightColumnSection
                    text="Pioneering New Frontiers"
                    description="<strong>Healthcare Integration:</strong> Supportive tools complement traditional treatments for cognitive and behavioral challenges.</br></br><strong>Performance Enhancement:</strong> Specialized applications optimize mental function in high-stakes environments, from athletics to creative professions."
                    imgSrc={"/assets/images/Solutions/applications-3.jpg"}
                    iswhite={true}
                    isButtonWhite={false}
                    buttonHref="/about"
                    buttonText="Discover Our Portfolio"
                    zindex={4}
                />

                <LeftColumnSection
                    text="A Unified Scientific Vision"
                    description={"Our synergistic ecosystem of companies shares core technological foundations while delivering specialized solutions for diverse applications—all united by our commitment to scientific validity and measurable cognitive enhancement."}
                    imgSrc={"/assets/images/Solutions/applications-4.jpg"}
                    iswhite={false}
                    isButton={true}
                    isButtonWhite={true}
                    buttonHref="/contact"
                    buttonText="Partner With Us"
                    zindex={5}
                />

                <Footer />
            </div>
        </>
    );
}

export default MultiIndustryApplications;