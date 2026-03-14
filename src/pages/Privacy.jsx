import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Privacy() {
    return (
        <PageTransition>
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-950">
                {/* Ambient background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-rcs-cyan/10 blur-[150px] rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-rcs-cyan text-[10px] font-extrabold tracking-[0.25em] uppercase mb-8">
                            Privacy
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
                            Identity <span className="text-gradient">Protection.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                            Our commitment to securing your data and maintaining technical transparency.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-card !p-8 md:!p-16 border-white/10 relative overflow-hidden group shadow-2xl"
                    >
                        <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-rcs-cyan prose-p:font-medium prose-p:leading-relaxed">
                            <h3 className="text-2xl font-extrabold tracking-tight mb-6">1. Data Ingestion</h3>
                            <p>
                                We collect telemetry and identity data necessary to facilitate secure communications. This includes metadata, transmission timestamps, and technical identifiers.
                            </p>

                            <h3 className="text-2xl font-extrabold tracking-tight mb-6">2. Utilization Protocol</h3>
                            <p>
                                Ingested data is strictly used for routing optimization, security monitoring, and enhancing the overall deliverability of your messaging campaigns.
                            </p>

                            <h3 className="text-22xl font-extrabold tracking-tight mb-6">3. Zero-Knowledge Encryption</h3>
                            <p>
                                Whenever supported by the channel (e.g., RCS, WhatsApp), data is encrypted in transit and at rest using industry-standard AES-256 protocols.
                            </p>

                            <h3 className="text-2xl font-extrabold tracking-tight mb-6">4. External Disclosure</h3>
                            <p>
                                We do not monetize your data. Information is only shared with carrier partners and regulatory bodies where legally mandated.
                            </p>

                            <h3 className="text-2xl font-extrabold tracking-tight mb-6">5. Cookies & Tracking</h3>
                            <p>
                                We use essential technical cookies to maintain session state and provide a localized interface experience. No third-party ad tracking is engaged.
                            </p>

                            <h3 className="text-2xl font-extrabold tracking-tight mb-6">6. Secure Channel</h3>
                            <p>
                                For any data-related inquiries, please reach out to our privacy desk at <strong>support@primercs.in</strong>.
                            </p>

                            <div className="mt-12 pt-12 border-t border-white/5">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                                    Privacy Shield: 3.1.0 | Revised: {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}
