import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = () => {
    const sectionRef = useRef(null);
    const gridLogoRef = useRef(null);
    const textRef = useRef(null);
    const offerRefs = useRef([]);
    const aboutSecRef = useRef(null);
    const aboutRefs = useRef([]);
    const videoRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const logo = gridLogoRef.current;
        const text = textRef.current;
        const offers = offerRefs.current;
        const aboutSection = aboutSecRef.current;
        const aboutItems = aboutRefs.current;
        const video = videoRef.current;
        const overlay = overlayRef.current;

        gsap.set(logo, { scale: 0.3, opacity: 0 });

        gsap.to(logo, {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(text, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 30%",
                toggleActions: "play none none reverse"
            }
        });

        offers.forEach((offer, index) => {
            gsap.from(offer, {
                x: 100,
                opacity: 0,
                duration: 1,
                delay: 0.5 * (index + 1),
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    toggleActions: "play none none reverse"
                }
            });
        });

        aboutItems.forEach((about, index) => {
            gsap.from(about, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: 0.5 * (index + 1),
                ease: "power3.out",
                scrollTrigger: {
                    trigger: aboutSection,
                    start: "top 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false
        });

        ScrollTrigger.create({
            trigger: aboutSection,
            start: "top top",
            pin: true,
            pinSpacing: false
        });

        ScrollTrigger.create({
            trigger: video,        // Element to pin
            start: "top top",      // Start pinning when video hits top of viewport
            endTrigger: overlay,   // Use overlay as reference for end point
            end: "bottom top",     // End pinning when overlay's BOTTOM hits TOP of viewport
            pin: true,             // Enable pinning
            pinSpacing: false
          });

        ScrollTrigger.create({
            trigger: overlay,
            start: "top top",

            pin: true,
            pinSpacing: false
        });

    }, []);

    return { sectionRef, gridLogoRef, textRef, offerRefs, aboutRefs, aboutSecRef, videoRef, overlayRef };
};

export default useScrollAnimation;
