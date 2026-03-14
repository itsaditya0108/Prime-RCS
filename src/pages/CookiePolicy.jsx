import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-navy-950 pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-white mb-8 font-heading"
                >
                    Cookie Policy
                </motion.h1>
                <div className="prose prose-invert prose-blue max-w-none prose-p:text-slate-400 prose-headings:text-white">
                    <p>Last Updated: March 2024</p>
                    <p>This Cookie Policy explains how PrimeRCS uses cookies and similar technologies to recognize you when you visit our website.</p>
                    <h2>1. What are cookies?</h2>
                    <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website.</p>
                    <h2>2. Why do we use cookies?</h2>
                    <p>We use first-party and third-party cookies for several reasons, such as enabling certain functionalities and measuring performance.</p>
                </div>
            </div>
        </div>
    );
}
