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
                <div className="prose prose-invert prose-blue max-w-none prose-p:text-slate-400 prose-headings:text-white prose-strong:text-rcs-cyan">
                    <p className="text-rcs-cyan font-bold mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                        <p>By accessing or using PrimeRCS, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">2. RCS Messaging Rules</h2>
                        <p>Users must comply with all carrier and regulatory guidelines regarding RCS and SMS messaging, including opt-in requirements and content restrictions.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
                        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of PrimeRCS and its licensors.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
                        <p>In no event shall PrimeRCS be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
