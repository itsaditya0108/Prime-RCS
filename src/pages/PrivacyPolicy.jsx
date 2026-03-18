import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-navy-950 pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-white mb-8 font-heading"
                >
                    Privacy Policy
                </motion.h1>
                <div className="prose prose-invert prose-blue max-w-none prose-p:text-slate-400 prose-headings:text-white prose-strong:text-rcs-cyan">
                    <p className="text-rcs-cyan font-bold mb-8">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p>At PrimeRCS, we take your privacy seriously. This Privacy Policy describes how we collect, use, and handle your information when you use our website, software, and services.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                        <h3 className="text-lg font-bold mb-2">2.1 Information You Provide</h3>
                        <p>We collect information you provide directly to us, including name, email address, phone number, and business details when you register or contact support.</p>
                        <h3 className="text-lg font-bold mt-4 mb-2">2.2 Usage Data</h3>
                        <p>We automatically collect certain information when you visit our site, including IP address, browser type, and operating system.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">3. RCS Data Handling</h2>
                        <p>As an RCS provider, we handle message metadata to ensure delivery. <strong>We do not sell your messaging data to third parties.</strong> Data is used strictly for service delivery and analytics.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
                        <p>You have the right to access, correct, or delete your personal data. Contact us at <span className="text-white">support@primercs.com</span> to exercise these rights.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
