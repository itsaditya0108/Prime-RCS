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
                <div className="prose prose-invert prose-blue max-w-none prose-p:text-slate-400 prose-headings:text-white prose-strong:text-rcs-cyan">
                    <p className="text-rcs-cyan font-bold mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
                        <p>Cookies are small text files stored on your device that help us provide a better experience. We use them for authentication, security, and performance tracking.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-white font-bold mb-2">Essential</h3>
                                <p className="text-sm text-slate-400">Necessary for the website to function (Login, CSRF protection).</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h3 className="text-white font-bold mb-2">Analytics</h3>
                                <p className="text-sm text-slate-400">Help us understand how visitors interact with our website.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">3. Managing Cookies</h2>
                        <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. Note that some parts of this site may become inaccessible.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
