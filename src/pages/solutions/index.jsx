import Banner from "@/components/Common/Banner";
import LeftColumnSection from "@/components/Home/LeftColumnSection";
import SolutionsList from "@/components/Solutions/SolutionsList";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import React from "react";

function solutions() {
    return (
        <div>
            <Header />
            <Banner bgPath='abstract-background.jpg'
                overlayPath={'flower-background.png'}
                title={'Intelligence That Evolves With You'}
                quote={'"The future belongs to those who learn more skills and combine them in creative ways."'}
                author={"ROBERT GREENE"} 
            />
            <LeftColumnSection
                text="Cognitive Tools Designed For Peak Performance"
                description="Our AI-powered solutions bridge neuroscience, gamification, and real-time data analysis to enhance cognitive potential for individuals, teams, and enterprises."
                imgSrc={"/assets/images/common/brain-scan.jpg"}
                iswhite={false}
                isButtonWhite={true}
                buttonText="Get in Touch"
                zindex={4}
            />
            <SolutionsList />
            <Footer/>
        </div>
    )
}

export default solutions;