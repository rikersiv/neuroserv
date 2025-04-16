import React, { useRef, useEffect } from "react";
import styles from "./Team.module.css";
import Button from "../CTAs/Button";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Team() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const teamRefs = useRef([]);

    useEffect(() => {
        const header = headerRef.current;
        const [first, second, ...rest] = teamRefs.current;

        gsap.set([header, first, second, ...rest], { opacity: 0 });

        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 50%",
                toggleActions: "play none none reverse",
            }
        })
            .fromTo(header,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
            )
            .fromTo([first, second],
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
                0
            );

        rest.forEach((el, i) => {
            gsap.fromTo(el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            pin: true,
            pinSpacing: false
        });
    }, []);
    const team = [
        {
            name: "Nitesh Gupta",
            position: "Founder, CEO",
            image: "/assets/images/Team/1.jpg",
        },
        {
            name: "Jeena Erthiva",
            position: "Co-Founder, COO",
            image: "/assets/images/Team/2.jpg",
        },
        {
            name: "Christopher Naime",
            position: "Co-Founder, CTO",
            image: "/assets/images/Team/3.jpg",
        },
        {
            name: "Anne-Sophie",
            position: "CSO, Aezonia",
            image: "/assets/images/Team/4.jpg",
        },
        {
            name: "Mike Luard",
            position: "Lead 3D Artist",
            image: "/assets/images/Team/5.jpg",
        }
    ]
    return (
        <div className={styles.teamContainer} ref={sectionRef}>
            <div className={styles.teamWrapper}>
                <div className={styles.header} ref={headerRef}>
                    <h2>The Minds Behind Neuraserve</h2>
                    <Button text="Join The Team" arrowSrc="/assets/images/icons/arrow_left.svg" href="/contact" isWhite={false} />
                </div>
                <div className={styles.teamList}>
                    {team.map((member, index) => (
                        <div key={index} className={styles.teamCard} ref={(el) => (teamRefs.current[index] = el)}>
                            <Image src={member.image} alt={member.name} width={50} height={50} className={styles.teamImage} />
                            <div className={styles.teamInfo}>
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                            </div>
                            <Image src="/assets/images/icons/arrow_left.svg" alt="arrow" width={50} height={20} className={styles.arrowIcon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;