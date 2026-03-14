import { motion } from "framer-motion";
import { useState } from "react";

const FeatureCard = ({ title, desc, icon, className, delay, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden glass-card p-10 min-h-[340px] flex flex-col justify-end ${className} border border-white/5 shadow-2xl hover:border-white/20 transition-all duration-500`}
        >
            <div className="absolute top-0 right-0 p-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 text-rcs-blue flex items-center justify-center group-hover:bg-rcs-blue group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-2xl border border-white/10 backdrop-blur-md">
                    <div className="transform transition-transform duration-500 group-hover:scale-110">
                        {icon}
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-rcs-cyan transition-colors tracking-tight font-heading">
                    {title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-semibold group-hover:text-slate-200 transition-colors opacity-80 group-hover:opacity-100 mb-4">
                    {desc}
                </p>
                {children}
            </div>

            {/* Accent Glow */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rcs-blue/20 rounded-full blur-[100px] group-hover:bg-rcs-cyan/30 transition-all duration-700 opacity-0 group-hover:opacity-100" />
        </motion.div>
    );
};

export default function Features() {
    return (
        <section className="py-32 bg-navy-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-24"
                >
                    <span className="inline-block py-2.5 px-5 rounded-full bg-white/5 border border-white/10 text-rcs-cyan text-[11px] font-black tracking-[0.25em] uppercase mb-6 font-heading shadow-inner backdrop-blur-md">
                        The Future of Engagement
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] font-heading">
                        Why compromise? <br />
                        <span className="text-gradient py-2 text-glow-lg">
                            Get the Prime Edge.
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-semibold leading-relaxed max-w-2xl mx-auto">
                        PrimeRCS bridges the gap between traditional SMS and high-conversion apps. 
                        Give your customers the feature-rich experience they deserve.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <FeatureCard
                        title="Branded Verified Identity"
                        desc="Stand out with your logo and a global verified checkmark. Build instant trust that traditional SMS simply cannot provide."
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        className="md:col-span-8 md:row-span-1"
                        delay={0.1}
                    >
                        <div className="mt-6 flex flex-wrap gap-3">
                            {["Custom Logo", "Verified Badge", "Brand Colors"].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-rcs-blue/10 text-rcs-blue text-[10px] font-black uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Rich Media"
                        desc="High-res images and crisp videos sent directly to the inbox."
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                        className="md:col-span-4"
                        delay={0.2}
                    />

                    <FeatureCard
                        title="Interactive Replies"
                        desc="One-tap suggested responses for friction-less customer UX."
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>}
                        className="md:col-span-4"
                        delay={0.3}
                    />

                    <FeatureCard
                        title="Suggested Actions"
                        desc="Deep-link to maps, calendars, or payments with native OS integrations."
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        className="md:col-span-4"
                        delay={0.4}
                    />

                    <FeatureCard
                        title="Live Insights"
                        desc="Full funnel analytics: Delivery, Read, and Click tracking in real-time."
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>}
                        className="md:col-span-4"
                        delay={0.5}
                    />
                </div>
            </div>
        </section>
    );
}
