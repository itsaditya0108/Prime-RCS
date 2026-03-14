import AboutHero from "../sections/about/AboutHero";
import MissionVision from "../sections/about/MissionVision";
import WhyPrime from "../sections/about/WhyPrime";
import TrustPoints from "../sections/about/TrustPoints";
import CTA from "../sections/CTA";
import PageTransition from "../components/PageTransition";

export default function About() {
    return (
        <PageTransition>
            <AboutHero />
            <MissionVision />
            <TrustPoints />
            <WhyPrime />
            <CTA />
        </PageTransition>
    );
}
