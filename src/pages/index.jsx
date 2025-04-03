import React, { useRef } from "react";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import HomeBanner from "@/components/Home/Homebanner";
import useLogoAnimation from "@/hooks/useLogoAnimation";
import LeftColumnSection from "@/components/Home/LeftColumnSection";
import RightColumnSection from "@/components/Home/RightColumnSection";
import styles from "./index.module.css";
import Image from "next/image";
import parse from "html-react-parser";
import Button from "@/components/CTAs/Button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

function Home() {
  const logoRef = useRef(null);
  const menuIconRef = useRef(null);
  const bannerContentRef = useRef(null);
  useLogoAnimation(logoRef, menuIconRef, bannerContentRef);
  const { sectionRef, gridLogoRef, textRef, offerRefs, aboutSecRef, aboutRefs, videoRef, overlayRef } = useScrollAnimation();

  const offers = [
    {
      title: "Gamified Learning",
      description: "Engaging tools designed to activate neural pathways through play.",
      bgImge: "/assets/images/home/image3.jpg",
    },
    {
      title: "Cognitive Enhancement",
      description: "Making mental well-being more effective and accessible.",
      bgImge: "/assets/images/home/image4.jpg",
    },
    {
      title: "Wellness Optimization",
      description: "Transforming workplace productivity through neuroscience.",
      bgImge: "/assets/images/home/image5.jpg",
    }
  ]

  const aboutContent = [
    {
      icon: "/assets/images/home/brain.gif",
      title: "<strong>20</strong><small>years</small>",
      smalltext: "of neuroscience",
    },
    {
      icon: "/assets/images/home/ai.gif",
      title: "AI-driven",
      smalltext: "personalization at scale",
    },
    {
      icon: "/assets/images/home/idea.gif",
      title: "+5",
      smalltext: "pioneering solutions",
    }
  ]

  return (
    <div>
      <Header logoRef={logoRef} menuIconRef={menuIconRef} />
      <HomeBanner bannerContentRef={bannerContentRef} />
      <LeftColumnSection
        text="Intelligence & Adaptability Inspired By Nature"
        description="Where cutting-edge neurotechnology meets gamification to revolutionize mental and emotional well-being."
        imgSrc={"/assets/images/Home/image1.jpg"}
        iswhite={false}
        isButtonWhite={true}
        buttonText="Learn More"
      />
      <RightColumnSection
        text="Performance Unlocked"
        description="✔ AI-Powered Adaptive Intelligence for real-time personalized experiences.<br/>✔ Clinically Validated Cognitive Gains based on leading neuroscience research.<br/>✔ Immersive Gamified Learning for enhanced mental well-being."
        imgSrc={"/assets/images/Home/image2.jpg"}
        iswhite={true}
        isButtonWhite={false}
        buttonText="Contact Us"
        zindex={1}
      />

      <div ref={sectionRef} className={styles.gridContainer}>
        <div className={styles.grid}>
          <div>
            <Image ref={gridLogoRef} src="/assets/images/icons/logo.svg" alt="logo" width={50} height={50} />
            <h1 ref={textRef}>What We Offer Innovation Redefined</h1>
          </div>
          {offers.map((offer, index) => (
            <div key={index} ref={(el) => (offerRefs.current[index] = el)} className={styles.offerCard}>
              <Image src={offer.bgImge} className={styles.gridBg} alt="offer" width={450} height={400} />
              <div className={styles.offerOverlay}></div>
              <div className={styles.offerContent}>
                <h2>{offer.title}</h2>
                <p>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RightColumnSection
        text="Aezonia - The Future of Cognitive Gaming"
        description="✔ An immersive experience blending entertainment with neuroscience-backed cognitive training.<br/>✔ Enhances mindfulness, decision-making, and focus through adaptive AI."
        videoSrc="/assets/images/Home/aezonia.mp4"
        iswhite={true}
        isButtonWhite={false}
        buttonText="Know Us More"
        zindex={3}
      />

      <div ref={aboutSecRef} className={styles.aboutGridContainer}>
        <div className={styles.aboutGrid}>
          {aboutContent.map((content, index) => (
            <div key={index} ref={(el) => (aboutRefs.current[index] = el)} className={styles.aboutCard}>
              <Image src={content.icon} alt="icon" width={100} height={100} />
              <div>
                <h2>{parse(content.title)}</h2>
                <p>{content.smalltext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={videoRef}  className={styles.homeBottom}>
        <video className={styles.video} autoPlay loop muted>
          <source src="/assets/images/Home/collaboration.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div ref={overlayRef} className={styles.bottomOverlay}>
          <div className={styles.bottomContent}>
            <h1>Join Us in Shaping the Future of NeuroTechnology</h1>
            <Button text="Collaborate with neuraserv" arrowSrc="/assets/images/icons/arrow_left.svg" href="/" isWhite={true} />
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
