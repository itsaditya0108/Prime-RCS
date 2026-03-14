import { motion } from "framer-motion";

export default function MissionVision() {
    return (
        <section className="py-24 bg-navy-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card !p-12 relative overflow-hidden group shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rcs-blue/5 rounded-full blur-[80px] group-hover:bg-rcs-blue/10 transition-all duration-500" />

                    <div className="w-14 h-14 rounded-2xl bg-rcs-blue/10 text-rcs-blue flex items-center justify-center mb-8 border border-rcs-blue/20">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>

                    <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
                        Our Mission
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">
                        To empower brands to communicate more effectively by replacing
                        outdated SMS with secure, interactive, and verified
                        messaging experiences that drive real results and loyalty.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass-card !p-12 relative overflow-hidden group shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant-purple/5 rounded-full blur-[80px] group-hover:bg-vibrant-purple/10 transition-all duration-500" />

                    <div className="w-14 h-14 rounded-2xl bg-vibrant-purple/10 text-vibrant-purple flex items-center justify-center mb-8 border border-vibrant-purple/20">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </div>

                    <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
                        Our Vision
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">
                        To become the global infrastructure for rich business messaging, 
                        enabling seamless, reliable, and intelligent communication 
                        across every digital touchpoint.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
