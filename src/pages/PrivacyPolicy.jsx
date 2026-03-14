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
                <div className="prose prose-invert prose-blue max-w-none prose-p:text-slate-400 prose-headings:text-white">
                    <p>Last Updated: March 2024</p>
                    <p>Your privacy is important to us. This Privacy Policy explains how PrimeRCS collects, uses, and protects your information.</p>
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
                    <h2>2. How We Use Information</h2>
                    <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
                    <h2>3. Data Security</h2>
                    <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
                </div>
            </div>
        </div>
    );
}
