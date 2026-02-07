import { motion } from "framer-motion";

export default function MissionVision() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 rounded-3xl p-10 border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brandBlue/5 rounded-full blur-[80px] group-hover:bg-brandBlue/10 transition-colors" />

                    <div className="w-12 h-12 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center mb-6">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>

                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        To empower businesses to communicate more effectively by replacing
                        outdated SMS with secure, interactive, and verified
                        messaging experiences that customers actually love.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-slate-50 rounded-3xl p-10 border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brandGreen/5 rounded-full blur-[80px] group-hover:bg-brandGreen/10 transition-colors" />

                    <div className="w-12 h-12 rounded-xl bg-brandGreen/10 text-brandGreen flex items-center justify-center mb-6">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </div>

                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                        Our Vision
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        To become the global standard for business messaging, enabling
                        modern, reliable, and scalable communication across every
                        channel and device.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
