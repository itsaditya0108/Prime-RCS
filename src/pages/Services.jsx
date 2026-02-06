import CTA from "../sections/CTA";
import APISection from "../sections/services/APISection";
import OtherChannels from "../sections/services/OtherChannels";
import RCSService from "../sections/services/RCSService";
import ServicesHero from "../sections/services/SeviceHero";


export default function Services() {
    return (
        <>
            <ServicesHero />
            <RCSService />
            <OtherChannels />
            <APISection />
            <CTA />
        </>
    );
}
