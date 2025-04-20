import React, { useRef, useEffect } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/CTAs/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const footerRef = useRef(null);
    const logoRef = useRef(null);
    const innerContentLeftRef = useRef(null);
    const innerContentRightRef = useRef(null);
    const bottomRef = useRef(null);
    const innerContentTopRef = useRef(null);

    const handleScrollToTop = () => {
        gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power2.out' });
    };

    const socials = [
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com',
            icon: '/assets/images/icons/linkedin.png'
        },
        {
            name: 'discord',
            link: 'https://www.discord.com',
            icon: '/assets/images/icons/discord.png'
        },
        {
            name: 'youtube',
            link: 'https://www.youtube.com',
            icon: '/assets/images/icons/youtube.png'
        },
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 10%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(logoRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(innerContentLeftRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
            "-=0.8"
        )
        .fromTo(innerContentTopRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
            "-=0.8"
        )
        .fromTo(innerContentRightRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
            "-=0.8"
        )
        .fromTo(bottomRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
            "-=0.8"
        );
    }, []);

    return (
        <footer className={styles.footer_wrapper} ref={footerRef}>
            <div className={styles.footerInnerWrapper}>
                <div className={styles.footer_container}>
                    <div ref={logoRef} className={styles.footerLogo}>
                        <Image src="/assets/images/icons/footer_logo.png" alt="logo" width={300} height={50} />
                    </div>
                    <div className={styles.footer_content}>
                        <h2 ref={innerContentTopRef}>Every Connection Sparks Innovation</h2>
                        <div className={styles.footer_innerContent}>
                            <div ref={innerContentLeftRef}>
                                <p>Let&apos;s shape the future of cognitive enhancement together. Reach out and be part of the movement.</p>
                                <Button text="Join Our Journey" arrowSrc="/assets/images/icons/arrow_left.svg" href="/contact" isWhite={true} />
                            </div>
                            <div ref={innerContentRightRef}>
                                <p>+1 (123) 456-7890</p>
                                <p>contact@neuraserv.com</p>
                                <div className={styles.socials}>
                                    {socials.map((social) => (
                                        <Link href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
                                            <Image src={social.icon} alt={social.name} width={20} height={20} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={bottomRef}>
                    <div className={styles.footer_bottom}>
                        <h2 onClick={handleScrollToTop}>Back to the top</h2>
                        <button onClick={handleScrollToTop}>
                            <Image src="/assets/images/icons/arrow_up.svg" alt="arrow" width={10} height={10} />
                        </button>
                    </div>

                    <div className={styles.copyright}>
                        <p>© Copyright 2025 - neuraserv</p>
                        <div className={styles.copyright_links}>
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
