import React, { useRef, useEffect } from "react";
import Banner from "@/components/Common/Banner";
import LeftColumnSection from "@/components/Home/LeftColumnSection";
import Header from "@/Layout/Header";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/components/CTAs/Button";
import parse from "html-react-parser";
import Team from "@/components/About/Team";
import Footer from "@/Layout/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
    const logoRef = useRef(null);
    const sectionRef = useRef(null);
    const titleRefMission = useRef(null);
    const textRefMission = useRef(null);
    const titleRefVision = useRef(null);
    const textRefVision = useRef(null);
    const missionSectionRef = useRef(null);
    const valuesSectionRef = useRef(null);
    const headingRef = useRef(null);
    const buttonRef = useRef(null);
    const valuesGridRef = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;
        const titleMission = titleRefMission.current;
        const textMission = textRefMission.current;
        const titleVision = titleRefVision.current;
        const textVision = textRefVision.current;
        const Mission = missionSectionRef.current;
        const Values = valuesSectionRef.current;
        const buttonText = buttonRef.current;
        const heading = headingRef.current;
        const valuesRef = valuesGridRef.current;

        gsap.set(logo, {
            position: "absolute",
            top: "0%",
            left: "50%",
            xPercent: -50,
            yPercent: -100,
            zIndex: 3,
            scale: 0.5,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: Mission,
                start: "top top",
                toggleActions: "play none none reverse",
            }
        });

        tl.to(logo, {
            yPercent: 0,
            duration: 1,
            ease: "power2.out"
        });

        tl.to({}, { duration: 0.5 });

        tl.to(logo, {
            left: "auto",
            right: "-50%",
            xPercent: 0,
            yPercent: 0,
            top: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.inOut"
        }, "<");

        tl.to(logo, {
            rotation: 180,
            duration: 1.2,
            ease: "none"
        }, "<");

        tl.fromTo(titleMission, {
            xPercent: -100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out"
        }, "+=0.5");

        tl.fromTo(titleVision, {
            xPercent: -100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out"
        }, "<");

        tl.fromTo(textMission, {
            xPercent: -100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out"
        }, "+=0.6");

        tl.fromTo(textVision, {
            xPercent: -100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out"
        }, "<");

        gsap.fromTo(heading, {
            xPercent: -100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: Values,
                start: "top 50%",
                toggleActions: "play none none reverse",
              }
        },);
        
        gsap.fromTo(buttonText, {
            xPercent: 100,
            opacity: 0
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: Values,
                start: "top 50%",
                toggleActions: "play none none reverse",
              }
        }, 0);

        gsap.fromTo(valuesRef, {
            yPercent: 100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: Values,
                start: "top 10%",
                toggleActions: "play none none reverse",
              }
        }, 0);

        ScrollTrigger.create({
            trigger: Mission,
            start: "top top",
            pin: true,
            pinSpacing: false
        });

        ScrollTrigger.create({
            trigger: Values,
            start: "top top",
            pin: true,
            pinSpacing: false
        });

    }, []);


    const valuesContent = [
        {
            icon: "/assets/images/icons/connection.gif",
            title: "Interconnectivity",
            description: "Seamlessly linking technology and human potential.",
        },
        {
            icon: "/assets/images/icons/solving-problems.gif",
            title: "Innovation",
            description: "Redefining cognitive science with AI-driven breakthroughs.",
        },
        {
            icon: "/assets/images/icons/soft-skills.gif",
            title: "Adaptability",
            description: "Personalization that evolves with user needs.",
        }
    ]
    return (
        <div>
            <Header />
            <Banner bgPath='pretty-macro-blue-flower.jpg'
                overlayPath={'full-frame-shot-plants.jpg'}
                title={'Merging Nature, Science, & Technology'}
                quote={'"The mind is not a vessel to be filled, but a fire to be kindled."'}
                author={"PLUTARCH"}
            />
            <LeftColumnSection
                text="Inspired by Nature, Powered by AI"
                description="Just like the octopus, a symbol of intelligence and adaptability, Neuraserv combines neuroscience and artificial intelligence to unlock the vast potential of the human mind."
                imgSrc={"/assets/images/common/octopus.jpg"}
                iswhite={true}
                isButtonWhite={false}
                buttonHref="/contact"
                buttonText="Know Us More"
                zindex={4}
            />

            <div className={styles.octopusWrapper}>
                <video className={styles.octopusVideo} autoPlay loop muted playsInline>
                    <source src="/assets/images/Common/octopus.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={styles.missionVisionContainer} ref={missionSectionRef}>
                <div className={styles.missionVisionWrapper}>
                    <div className={styles.missionContent}>
                        <h4 ref={titleRefMission}>Our Mission</h4>
                        <p ref={textRefMission}>Empowering individuals and organizations to achieve cognitive <span>Evolution through cutting-edge technology.</span></p>
                    </div>
                    <div className={styles.visionContent}>
                        <h4 ref={titleRefVision}>Our Vision</h4>
                        <p ref={textRefVision}>To be the global leader <span>in neuro-enhancement, revolutionizing learning, adaptability, and personal growth.</span></p>
                    </div>
                    <Image ref={logoRef} src="/assets/images/common/logo_masked.png" alt="Mission and Vision Logo" className={styles.logoMasked} width={500} height={300} />
                </div>
            </div>

            <div className={styles.valuesContainer} ref={valuesSectionRef}>
                <div className={styles.valuesWrapper}>
                    <div className={styles.header}>
                        <h2 ref={headingRef}>Our Core Values</h2>
                        <div ref={buttonRef}>
                            <Button text="Explore Our Innovations" arrowSrc="/assets/images/icons/arrow_left.svg" href="/solutions" isWhite={true} />
                        </div>

                    </div>
                    <div className={styles.valuesGrid} ref={valuesGridRef}>
                        {valuesContent.map((content, index) => (
                            <div key={index} className={styles.valuesCard}>
                                <Image src={content.icon} alt="icon" width={100} height={100} />
                                <div>
                                    <h2>{parse(content.title)}</h2>
                                    <p>{content.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Team />
            <Footer />
        </div>
    );
}

export default About;
