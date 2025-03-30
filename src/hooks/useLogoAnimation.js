import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLogoAnimation = (logoRef, menuIconRef, bannerContentRef) => {
  useEffect(() => {
    if (!logoRef.current || !menuIconRef.current || !bannerContentRef.current) return;

    gsap.set(logoRef.current, {
      scale: 2, 
      transformOrigin: "50% 50%",
      position: "fixed",
      left: 0, 
      top: 0,
      x: "50vw", 
      y: "50vh", 
      xPercent: -50, 
      yPercent: -50, 
      rotate: 0, 
    });
    

    gsap.set(menuIconRef.current, {
      opacity: 0,
      y: "-100%", 
    });

    gsap.set(bannerContentRef.current, {
      opacity: 0,
      y: "100%", 
    });

    gsap.to(logoRef.current, {
      scrollTrigger: {
        trigger: document.body, 
        start: "top top", 
        end: "200px top", 
        scrub: true, 
      },
      scale: 1, 
      left: 0,
      top: 0,
      x: "8vw",
      y: "2.5rem", 
      xPercent: 0, 
      yPercent: 0,
      ease: "power2.out",
    });

    gsap.to(menuIconRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "200px top",
        scrub: true,
      },
      opacity: 1,
      y: 0,
      ease: "power2.out",
    });

    gsap.to(bannerContentRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "200px top",
        scrub: true,
      },
      opacity: 1,
      y: 0, 
      ease: "power2.out",
    });

  }, [logoRef, menuIconRef, bannerContentRef]);
};

export default useLogoAnimation;
