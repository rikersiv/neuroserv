import React from "react";
import VideoSec from "@/components/Common/VideoSec";
import RightColumnSection from "@/components/Home/RightColumnSection";
import PageBanner from "@/components/Solutions/PageBanner";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import styles from "./aezonia.module.css";
import Button from "@/components/CTAs/Button";
import Image from "next/image";
import Head from "next/head";

function Aezonia() {
    return (
        <>
          <Head>
        <title>Neuraserv | Aezonia</title>
        <meta name="description" content="is the first-of-its-kind bio-adaptive cognitive enhancement game" />
      </Head>
        <div>
            <Header />
            <PageBanner />

            <div className={styles.divContainer}>
                <div className={styles.divWrapper}>
                    <div className={styles.divContent}>
                        <h2>Aezonia - The Future of Cognitive Gaming</h2>
                        <div className={styles.divContentText}>
                             <Image src="/assets/images/icons/logo.svg" alt="Logo" width={50} height={50} className="filter"/>
                            <div className={styles.divText}>
                                <p>An immersive experience blending entertainment with neuroscience-backed cognitive training.</p>
                                <p> Enhances mindfulness, decision-making, and focus through adaptive AI.</p>
                                <Button text="Download Now" arrowSrc="/assets/images/icons/arrow_left.svg" href="/solutions/aezonia" isWhite={false} />
                            </div>
                        </div>

                    </div>

                    <div className={styles.divImage}>
                        <div className={styles.imageWrapper}>
                            <Image src="/assets/images/Aezonia/aezonia1.jpg" alt="Aezonia" className={styles.image} width={1000} height={50} />
                        </div>
                        
                        <div className={styles.imageOverlay}>
                        <Image src="/assets/images/Aezonia/aezonia2.png" alt="Aezonia" className={styles.image} width={1000} height={50} />
                        </div>
                    </div>

                </div>
            </div>

            <RightColumnSection
                text="Why Aezonia Matters"
                description="<br/><br/> Cognitive decline and mental fatigue have become prevalent in today&apos;s fast-paced world. Aezonia offers a fun, engaging, and scientifically-backed way to train the mind while providing moments of relaxation and mental clarity."
                imgSrc={"/assets/images/Aezonia/aezonia3.png"}
                iswhite={true}
                isButtonWhite={false}
                buttonHref="/contact"
                buttonText="Contact Us"
                zindex={3}
            />
            <VideoSec videoSrc={"/assets/images/Aezonia/aezonia_vid.mp4"}
                title={"Aezonia offers a fun, engaging, and scientifically-backed way to train the mind"}
                buttonText={"Collaborate with neuraserv"}
                buttonhref={"/contact"} />
            <Footer />
        </div>
        </>
    );
}

export default Aezonia;