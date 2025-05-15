import LeftColumnSection from "@/components/Home/LeftColumnSection";
import RightColumnSection from "@/components/Home/RightColumnSection";
import FlexSection from "@/components/Solutions/FlexSection";
import SolutionsBanner from "@/components/Solutions/SolutionsBanner";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Head from "next/head";
import React from "react";

function BioAdaptivePersonalization() {
    return (
        <>
            <Head>
                <title>Neuraserv | Bio-adaptive Personalization</title>
                <meta name="description" content="Neural-responsive technology that dynamically evolves with your cognitive architecture" />
            </Head>
            <div>
                <Header />
                <SolutionsBanner title={"Bio-Adaptive Personalization"}
                    description={"Neural-responsive technology that dynamically evolves with your cognitive architecture"}
                    bgPath={'personalization.mp4'}
                />
                 <FlexSection
                    header={"Bio-Adaptive Intelligence"}
                    description={"neuroserv's core technology leverages sophisticated bio-adaptive systems across our portfolio of companies, creating experiences that intuitively respond to each user's unique cognitive patterns. Beginning with Limitless You Games and their flagship product Aezonia, our proprietary algorithms analyze neural responses in real-time, continuously refining the experience to maintain optimal engagement."}
                    imgPath={"personalization-1.jpg"}
                />
                <LeftColumnSection
                    text="Instant Neural Optimization"
                    description="This precision-calibrated approach identifies peak performance states and cognitive challenges instantaneously, activating neural reward pathways more effectively than traditional methods. The result: accelerated learning, enhanced cognitive development, and truly personalized experiences that evolve alongside users."
                    imgSrc={"/assets/images/Solutions/personalization-2.jpg"}
                    iswhite={false}
                    isButton={false}
                    zindex={3}
                />

                <RightColumnSection
                    text="Unlocking Cognitive Potential"
                    description="As we expand our portfolio, this foundational technology remains our unifying thread—transforming how diverse populations interact with technology and unlock their limitless cognitive potential."
                    imgSrc={"/assets/images/Solutions/personalization-3.jpg"}
                    iswhite={true}
                    isButtonWhite={false}
                    buttonHref="/solutions"
                    buttonText="Discover More Solutions"
                    zindex={4}
                />
                <Footer />
            </div>
        </>
    );
}

export default BioAdaptivePersonalization;