import Hero from "../sections/Hero";
import TrustedBy from "../sections/TrustedBy";
import WhyRCS from "../sections/WhyRCS";
import OtherServices from "../sections/OtherServices";
import FAQ from "../sections/FAQ";
import CTA from "../sections/CTA";
import Features from "../sections/Features";

export default function Home() {
    return (
        <>
            <Hero />
            <TrustedBy />
            <WhyRCS />
            <Features />
            <OtherServices />
            <FAQ />
            <CTA />
        </>
    );
}
