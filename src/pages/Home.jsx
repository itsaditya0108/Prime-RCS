import Hero from "../sections/Hero";
import PageTransition from "../components/PageTransition";
import TrustedBy from "../sections/TrustedBy";
import WhyRCS from "../sections/WhyRCS";
import OtherServices from "../sections/OtherServices";
import FAQ from "../sections/FAQ";
import CTA from "../sections/CTA";
import Features from "../sections/Features";
import PlatformShowcase from "../sections/PlatformShowcase";

export default function Home() {
    return (
        <PageTransition>
            <Hero />
            {/* <TrustedBy /> */}
            <WhyRCS />
            <Features />
            <PlatformShowcase />
            <OtherServices />
            <CTA />
        </PageTransition>
    );
}
