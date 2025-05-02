import LeftColumnSection from "@/components/Home/LeftColumnSection";
import RightColumnSection from "@/components/Home/RightColumnSection";
import FlexSection from "@/components/Solutions/FlexSection";
import SolutionsBanner from "@/components/Solutions/SolutionsBanner";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Head from "next/head";
import React from "react";

function ContinuousTesting() {
    return (
        <>
         <Head>
                <title>Neuraserv | Continuous Testing</title>
                <meta name="description" content="Iterative neuro-metric validation driving exponential efficacy improvements." />
            </Head>
            <div>
                <Header />
                <SolutionsBanner title={"Continuous Testing"}
                    description={"Iterative neuro-metric validation driving exponential efficacy improvements."}
                    bgPath={'continuous-testing.mp4'}
                />
                <FlexSection
                    header={"The Science of Refinement"}
                    description={"At neuroserv, scientific rigor drives everything we create. Our methodology combines controlled laboratory research with sophisticated real-world data analytics, establishing an evidence-based development cycle that constantly elevates the effectiveness of our solutions."}
                    imgPath={"continuous-testing-1.jpeg"}
                />
                <LeftColumnSection
                    text="UNPARALLELED INSIGHTS THROUGH SCALE"
                    description="Our unique portfolio structure enables the aggregation of anonymized data across diverse applications and populations. This cross-domain analysis reveals universal principles of effective neurotechnology while identifying specialized approaches optimized for specific contexts."
                    imgSrc={"/assets/images/Solutions/continuous-testing-2.jpg"}
                    iswhite={false}
                    isButton={false}
                    zindex={3}
                />

                <RightColumnSection
                    text="COLLABORATIVE INNOVATION"
                    description="Each subsidiary maintains strategic research partnerships with leading academic institutions while benefiting from neuroserv's central coordination. This integrated approach allows companies like Limitless You Games to focus on domain-specific innovations while contributing to our broader knowledge ecosystem."
                    imgSrc={"/assets/images/Solutions/continuous-testing-3.jpg"}
                    iswhite={true}
                    isButton={false}
                    zindex={4}
                />

                <LeftColumnSection
                    text="From Data to Transformation"
                    description={"User experiences with Aezonia and our expanding portfolio continuously inform improvements throughout our ecosystem. This commitment to evidence-driven development creates a powerful innovation cycle that accelerates our collective mission: transforming cognitive enhancement through validated neuroscience."}
                    imgSrc={"/assets/images/Solutions/continuous-testing-4.jpg"}
                    iswhite={false}
                    isButton={true}
                    isButtonWhite={true}
                    buttonHref="/solutions"
                    buttonText="Discover More Solutions"
                    zindex={5}
                />

                <Footer />
            </div>
        </>
    );
}

export default ContinuousTesting;