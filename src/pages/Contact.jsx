import ContactHero from "../sections/contact/ContactHero";
import ContactForm from "../sections/contact/ContactForm";
import PageTransition from "../components/PageTransition";

export default function Contact() {
    return (
        <PageTransition>
            <ContactHero />
            <ContactForm />
        </PageTransition>
    );
}
