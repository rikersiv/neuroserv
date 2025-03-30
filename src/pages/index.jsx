import React, { useRef } from "react";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import HomeBanner from "@/components/Home/Homebanner";
import useLogoAnimation from "@/hooks/useLogoAnimation";
import LeftColumnSection from "@/components/Home/LeftColumnSection";
import RightColumnSection from "@/components/Home/RightColumnSection";

function Home() {
  const logoRef = useRef(null);
  const menuIconRef = useRef(null);
  const bannerContentRef = useRef(null);
  useLogoAnimation(logoRef, menuIconRef, bannerContentRef); // Run animation

  return (
    <div>
      <Header logoRef={logoRef} menuIconRef={menuIconRef} />
      <HomeBanner bannerContentRef={bannerContentRef} />
      <LeftColumnSection
        text="Intelligence & Adaptability Inspired By Nature"
        description="Where cutting-edge neurotechnology meets gamification to revolutionize mental and emotional well-being."
        imgSrc={"/assets/images/home/image1.png"}
        iswhite={false}
        isButtonWhite={true}
        buttonText="Learn More"
      />
      <RightColumnSection
       text="Performance Unlocked"
       description="✔ AI-Powered Adaptive Intelligence for real-time personalized experiences.<br/>✔ Clinically Validated Cognitive Gains based on leading neuroscience research.<br/>✔ Immersive Gamified Learning for enhanced mental well-being."
       imgSrc={"/assets/images/home/image2.jpg"}
       iswhite={true}
       isButtonWhite={false}
       buttonText="Contact Us"
      />
      <Footer />
    </div>
  );
}

export default Home;
