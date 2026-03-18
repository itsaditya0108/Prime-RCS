import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-16 lg:py-24 relative overflow-hidden bg-navy-900">
            {/* Ambient Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rcs-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-24 overflow-hidden border border-white/5 shadow-2xl"
                >
                    {/* Interior Gradient Background */}
                    <div className="absolute inset-0 bg-cta-gradient opacity-90 animate-gradient-move"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] font-heading"
                        >
                            Elevate Your <br />
                            <span className="text-navy-950/70">Messaging.</span>
                        </motion.h2>

                        <p className="text-white/80 text-lg sm:text-2xl md:text-3xl leading-relaxed mb-12 font-medium max-w-2xl mx-auto h-auto">
                            Join the elite businesses leveraging PrimeRCS to deliver 
                            verified, interactive, and high-impact messaging experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 sm:px-16 sm:py-6 rounded-2xl bg-white text-rcs-blue font-black text-lg sm:text-xl shadow-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-4 font-heading"
                                >
                                    Get Started Now
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                                </motion.button>
                            </Link>

                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 sm:px-16 sm:py-6 rounded-2xl bg-navy-900/10 backdrop-blur-xl border border-white/40 text-white font-black text-lg sm:text-xl hover:bg-navy-900/20 transition-all font-heading"
                                >
                                    Book a Demo
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
