import PageTransition from "../components/PageTransition";
import CTA from "../sections/CTA";
import APISection from "../sections/services/APISection";
import RCSService from "../sections/services/RCSService";
import ServicesHero from "../sections/services/SeviceHero";
import WhatsAppService from "../sections/services/WhatsAppService";
import SMSService from "../sections/services/SMSService";





// Services Page Component
export default function Services() {
    return (
        <PageTransition>
            <ServicesHero />

            <div id="rcs" className="scroll-mt-24">
                <RCSService />
            </div>

            <div id="whatsapp" className="scroll-mt-24">
                <WhatsAppService />
            </div>

            <div id="sms" className="scroll-mt-24">
                <SMSService />
            </div>



            <APISection />
            <CTA />
        </PageTransition>
    );
}
