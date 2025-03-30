import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/CTAs/Button';

function Footer() {
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
    ]
    return (
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer_container}>
                <Image src="/assets/images/icons/footer_logo.png" alt="logo" width={300} height={50} />
                <div className={styles.footer_content}>
                    <h2>Every Connection Sparks Innovation</h2>
                    <div className={styles.footer_innerContent}>
                        <div>
                            <p>Let&apos;s shape the future of cognitive enhancement together. Reach out and be part of the movement.</p>
                            <Button text="Join Our Journey" arrowSrc="/assets/images/icons/arrow_left.svg" href="/" isWhite={true} />
                        </div>
                        <div>
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

            <div>
            <div className={styles.footer_bottom}>
                <h2>Back to the top</h2>
                <button>
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
        </footer>
    );
}

export default Footer;