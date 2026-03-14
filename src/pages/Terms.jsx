import { motion } from "framer-motion";

export default function Terms() {
    return (
        <div className="min-h-screen bg-navy-950 pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-white mb-8 font-heading"
                >
                    Terms of Service
                </motion.h1>
                <div className="prose prose-invert prose-blue max-w-none prose-p:text-slate-400 prose-headings:text-white">
                    <p>Last Updated: March 2024</p>
                    <p>By using our services, you agree to these terms. Please read them carefully.</p>
                    <h2>1. Using our Services</h2>
                    <p>You must follow any policies made available to you within the Services.</p>
                    <h2>2. Your Content</h2>
                    <p>Some of our Services allow you to upload, submit, store, send or receive content.</p>
                </div>
            </div>
        </div>
    );
}
