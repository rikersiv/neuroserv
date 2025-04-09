import Banner from "@/components/Common/Banner";
import LeftColumnSection from "@/components/Home/LeftColumnSection";
import Header from "@/Layout/Header";
import React from "react";

function About() {
    return (
        <div>
            <Header/>
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
                buttonText="Know Us More"
                zindex={4}
            />
        </div>
    );
}

export default About;