import Header from "@/Layout/Header";
import React from "react";
import styles from "./index.module.css";
import Button from "@/components/CTAs/Button";
import Footer from "@/Layout/Footer";
import Image from "next/image";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const data = {
            name: formData.get("fullName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                toast.success("Message sent successfully!");
                form.reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <Header iswhite={false} />
            <div className={styles.contactContainer}>
                <div className={styles.contactWrapper}>
                    <Image src="/assets/images/icons/logo_outline.svg" alt="contact" width={500} height={800} className={`whiteFilter ${styles.contactLogo}`} />
                    <h2>Contact Us</h2>
                    <p>Every day is another opportunity to achieve excellence. Let&apos;s Build the Future Together.</p>
                    <div className={styles.contactFormContainer}>
                        <Image className={styles.formBg} src="/assets/images/Common/contact_bg.jpg" alt="contact" width={500} height={800} />
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
                            <form onSubmit={handleSubmit}>
                                <div className={styles.row}>
                                    <div>
                                        <label>Full Name *</label>
                                        <input type="text" name="fullName" placeholder="Your Full Name" required />
                                    </div>

                                    <div>
                                        <label>Email *</label>
                                        <input type="email" name="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div>
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" placeholder="Your Phone Number" />
                                    </div>

                                    <div>
                                        <label>Subject</label>
                                        <input type="text" name="subject" placeholder="Write The Subject" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div>
                                        <label>Message *</label>
                                        <textarea name="message" placeholder="Write Your Message" required></textarea>
                                    </div>
                                </div>

                                <Button type="submit" text="Send Message" arrowSrc="/assets/images/icons/arrow_left.svg" isWhite={true} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
}

export default Contact;
