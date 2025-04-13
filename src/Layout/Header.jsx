import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import { gsap } from 'gsap';

function Header({ iswhite, logoRef, menuIconRef }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const socials = [
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com',
            icon: '/assets/images/icons/linkedin.png'
        },
        {
            name: 'whatsapp',
            link: 'https://www.instagram.com',
            icon: '/assets/images/icons/whatsapp.png'
        },
        {
            name: 'twitter',
            link: 'https://www.twitter.com',
            icon: '/assets/images/icons/twitter.png'
        },
    ];

    useEffect(() => {
        if (menuOpen) {
            gsap.to(menuRef.current, { display: 'flex', opacity: 1, duration: 0.5, ease: "power2.out" });
        } else {
            gsap.to(menuRef.current, { opacity: 0, display: 'none', duration: 0.5, ease: "power2.in" });
        }
    }, [menuOpen]);
    return (
        <>
            <div className={styles.header}>
                <Link href="/">
                    <Image ref={logoRef} src="/assets/images/icons/logo_full.svg" className={`${styles.logo} ${iswhite ? 'filter' : ''} ${styles.logoBlend}`} alt="logo" width={150} height={50} /></Link>
                <Image ref={menuIconRef} src="/assets/images/icons/menu.svg" className={`${styles.menuIcon} ${iswhite ? 'filter' : ''}`} alt="menu" width={30} height={30} onClick={() => setMenuOpen(true)} />
            </div>

            <div className={styles.menu} ref={menuRef}>
                <div className={styles.header}>
                    <Image src="/assets/images/icons/logo_full.svg" alt="logo" width={150} height={50} />
                    <Image src="/assets/images/icons/close.png" alt="close" width={30} height={30} onClick={() => setMenuOpen(false)} />
                </div>

                <div className={styles.menu_items}>
                    <div>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div>
                        <Link href="/">Home</Link>
                        <Link href="/about">Know Us</Link>
                        <Link href="/solutions">Solutions</Link>
                        <Link href="/news">News</Link>
                    </div>
                </div>

                <div className={styles.menu_footer}>
                    <div>
                        <p>ENGLISH / <small>OTHER</small></p>
                    </div>
                    <div className={styles.socials}>
                        {socials.map((social, index) => (
                            <div>
                                <Image src={social.icon} alt={social.name} width={25} height={25} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;