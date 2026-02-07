import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/20 to-brandGreen/20 opacity-50"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                        Ready to transform your <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen">
                            customer communication?
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                        Join 500+ businesses using SureMsg to deliver verified,
                        interactive, and high-converting messages.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-brandBlue to-brandGreen text-white font-bold shadow-lg shadow-brandBlue/25 hover:shadow-brandBlue/50 transition-all"
                            >
                                Get Started Free
                            </motion.button>
                        </Link>

                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:border-white/20 transition-all"
                            >
                                Contact Sales
                            </motion.button>
                        </Link>
                    </div>

                    <p className="mt-8 text-sm text-slate-500">
                        No credit card required · 14-day free trial · Cancel anytime
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
