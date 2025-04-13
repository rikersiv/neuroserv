import Header from "@/Layout/Header";
import React from "react";
import styles from "./index.module.css";
import Button from "@/components/CTAs/Button";
import Footer from "@/Layout/Footer";
import Image from "next/image";
import Link from "next/link";

function Contact() {
    return (
        <div>
            <Header iswhite={false} />
            <div className={styles.contactContainer}>
                <div className={styles.contactWrapper}>
                    <Image src="/assets/images/icons/logo_outline.svg" alt="contact" width={500} height={800} className={`whiteFilter ${styles.contactLogo}`} />
                    <h2>Contact Us</h2>
                    <p>Every day is another opportunity to achieve excellence. Let&apos;s Build the Future Together.</p>
                    <div className={styles.contactFormContainer}>
                        <Image className={styles.formBg} src="/assets/images/common/contact_bg.jpg" alt="contact" width={500} height={800} />
                        <div className={styles.overlay}></div>
                        <div className={styles.contactInfo}>
                            <div>
                                <p>Phone Number</p>
                                <p>+1 (123) 456-7890</p>
                            </div>
                            <div>
                                <p>Head Office</p>
                                <p>Dubai, UAE</p>
                            </div>
                            <div>
                                <p>E-mail</p>
                                <p>contact@neuraserv.com</p>
                            </div>
                        </div>
                        <h2>Ready to Collaborate?<br />Let's Connect</h2>
                        <div className={styles.contactForm}>
                            <form action="/" method="POST">
                                <div className={styles.row}>
                                    <div>
                                        <label>Full Name *</label>
                                        <input type="text" placeholder="Your Full Name" required />
                                    </div>

                                    <div>
                                        <label>Email *</label>
                                        <input type="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div>
                                        <label>Phone Number</label>
                                        <input type="text" placeholder="Your Phone Number" />
                                    </div>

                                    <div>
                                        <label>Subject</label>
                                        <input type="text" placeholder="Write The Subject" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div>
                                        <label>Message *</label>
                                        <textarea placeholder="Write Your Message" required></textarea>
                                    </div>
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" id="terms" required />
                                    <p htmlFor="terms">By checking this box, you agree to the <strong><Link href="/">Terms and Conditions</Link></strong> and confirm that you have read and understood our <strong><Link href="/">Data Protection Policy</Link></strong>.*</p>
                                </div>

                                <div className={styles.checkbox}>
                                    <input type="checkbox" id="terms" required />
                                    <p htmlFor="terms">By checking this box, you subscribe to <strong>Our Newsletter</strong>.</p>
                                </div>

                                <Button text="Send Message" arrowSrc="/assets/images/icons/arrow_left.svg" href="/" isWhite={true} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;