import LeftColumnSection from "@/components/Home/LeftColumnSection";
import RightColumnSection from "@/components/Home/RightColumnSection";
import FlexSection from "@/components/Solutions/FlexSection";
import SolutionsBanner from "@/components/Solutions/SolutionsBanner";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Head from "next/head";
import React from "react";

function GamifiedIntelligence() {
    return (
        <>
            <Head>
                <title>Neuraserv | Gamified Intelligence</title>
                <meta name="description" content="Neuroplasticity acceleration through strategic dopaminergic engagement systems." />
            </Head>
            <div>
                <Header />
                <SolutionsBanner title={"Gamified Intelligence"}
                    description={"Neuroplasticity acceleration through strategic dopaminergic engagement systems."}
                    bgPath={'gamified-intelligence.mp4'}
                />
                <FlexSection
                    header={"Aezonia - The Future of Cognitive Gaming"}
                    description={"<p>An immersive experience blending entertainment with neuroscience-backed cognitive training.</p><p> Enhances mindfulness, decision-making, and focus through adaptive AI.</p>"}
                    imgPath={"gamified-intelligence-1.jpg"}
                />
                <LeftColumnSection
                    text="Beyond Entertainment"
                    description="Our scientifically-validated frameworks target specific neural pathways through carefully calibrated challenges and reward systems. This precision engagement creates powerful feedback loops that enhance neuroplasticity and accelerate cognitive development in ways traditional methods cannot match."
                    imgSrc={"/assets/images/Solutions/gamified-intelligence-2.png"}
                    iswhite={false}
                    isButton={false}
                    zindex={3}
                />

                <RightColumnSection
                    text="A Blueprint For Evolution"
                    description="Aezonia's success demonstrates how effective gamification can transform cognitive enhancement across multiple domains. This model now serves as the strategic foundation for NeuroServ's expanding portfolio, from mindfulness applications to corporate training and educational technology."
                    imgSrc={"/assets/images/Solutions/gamified-intelligence-3.png"}
                    iswhite={true}
                    isButtonWhite={false}
                    buttonHref="/solutions"
                    buttonText="Explore Our Approaches"
                    zindex={4}
                />

                <LeftColumnSection
                    text="Unlocking Human Potentials"
                    description="By creating solutions people genuinely enjoy using, we're building an ecosystem that makes cognitive growth accessible and sustainable for everyone. Each new venture contributes unique approaches to our vision: transforming how humanity develops its greatest asset—the mind."
                    imgSrc={"/assets/images/Solutions/gamified-intelligence-4.jpg"}
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

export default GamifiedIntelligence;