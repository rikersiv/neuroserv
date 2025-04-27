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
import NewsList from "@/components/News/NewsList";
import VideoSec from "@/components/Common/VideoSec";
import Head from "next/head";

function Home() {
  const logoRef = useRef(null);
  const menuIconRef = useRef(null);
  const bannerContentRef = useRef(null);
  useLogoAnimation(logoRef, menuIconRef, bannerContentRef);
  const { sectionRef, gridLogoRef, textRef, offerRefs, aboutSecRef, aboutRefs, newsHeaderRef, newsButtonRef, newsSectionRef, newsListRef } = useScrollAnimation();

  const offers = [
    {
      title: "Gamified Learning",
      description: "Engaging tools designed to activate neural pathways through play.",
      bgImge: "/assets/images/Home/image3.jpg",
    },
    {
      title: "Cognitive Enhancement",
      description: "Making mental well-being more effective and accessible.",
      bgImge: "/assets/images/Home/image4.jpg",
    },
    {
      title: "Wellness Optimization",
      description: "Transforming Wellness and Performance Through Neuroscience.",
      bgImge: "/assets/images/Home/image5.jpg",
    }
  ]

  const aboutContent = [
    {
      icon: "/assets/images/Home/brain.gif",
      title: "<strong>20</strong><small>years</small>",
      smalltext: "of advanced neuroscience & gamification",
    },
    {
      icon: "/assets/images/Home/ai.gif",
      title: "AI-driven",
      smalltext: "personalization at scale",
    },
    {
      icon: "/assets/images/Home/idea.gif",
      title: "5",
      smalltext: "pioneering products",
    }
  ]

  return (
    <>
      <Head>
        <title>Neuraserv | Home</title>
        <meta name="description" content="Neuraserv blends AI and neuroscience to expand human potential through cognitive enhancement, gamified learning, and wellness optimization. Join us in revolutionizing mental and emotional well-being." />
      </Head>

      <div style={{ overflowX: "hidden" }}>
        <Header logoRef={logoRef} menuIconRef={menuIconRef} />
        <HomeBanner bannerContentRef={bannerContentRef} />
        <LeftColumnSection
          text="Intelligence and adaptability, inspired by the boundless nature of human potential."
          description="Where cutting-edge neurotechnology meets gamification to revolutionize mental and emotional well-being."
          imgSrc={"/assets/images/Home/image1.jpg"}
          iswhite={false}
          isButtonWhite={true}
          buttonHref="/solutions"
          buttonText="Learn More"
          zindex={1}
        />
        <RightColumnSection
          text="Performance Unlocked"
          description="<br/><br/><strong>AI-Powered</strong> Bio-Adaptive For Personalized Experiences.<br/><br/><strong>Clinically Validated Cognitive</strong> Gains based on leading neuroscience research.<br/><br/><strong>Immersive Gamified Learning</strong> for enhanced mental well-being."
          imgSrc={"/assets/images/Home/image2.jpg"}
          iswhite={true}
          isButtonWhite={false}
          buttonHref="/contact"
          buttonText="Contact Us"
          zindex={2}
        />

        <div ref={sectionRef} className={styles.gridContainer}>
          <div className={styles.grid}>
            <div>
              <Image ref={gridLogoRef} src="/assets/images/icons/logo.svg" alt="logo" width={50} height={50} />
              <h1 ref={textRef}>Innovation Redefined</h1>
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
          description="<br/><br/>AImmersive Experience Blending Entertainment with Neuroscience-Backed Cognitive Training.<br/><br/>Scientifically validated to improve mindfullness, focus, stress resilience, 
mental agility.<br/><br/>AI personalization through adventure and fun ensures every user experiences tailored cognitive improvement."
          imgSrc={"/assets/images/Home/aezonia.png"}
          iswhite={true}
          isButtonWhite={false}
          buttonHref="/solutions/aezonia"
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

        <VideoSec videoSrc={"/assets/images/Home/collaboration.mp4"}
          title={"Join Us in Shaping the Future of NeuroTechnology"}
          buttonText={"Collaborate with neuraserv"}
          buttonhref={"/contact"} />

        <div className={styles.newsContainer} ref={newsSectionRef}>

          <Image src="/assets/images/icons/logo_outline.svg" alt="logo" width={500} height={800} className={styles.logoOutline} />
          <div className={styles.newsWrapper}>
            <div className={styles.header}>
              <h2 ref={newsHeaderRef}>Latest News</h2>
              <div ref={newsButtonRef}>
                <Button text="See All" arrowSrc="/assets/images/icons/arrow_left.svg" href="/news" isWhite={false} />
              </div>
            </div>
            <div ref={newsListRef} className={styles.newsList}>
              <NewsList />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
