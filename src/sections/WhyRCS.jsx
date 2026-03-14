import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "../assets/logo.png";

const features = [
    {
        title: "Absolute Verification",
        desc: "Build instant credibility. Every message features your branded checkmark, logo, and identity colors.",
        color: "text-rcs-cyan",
        bg: "bg-rcs-cyan/10"
    },
    {
        title: "Immersive Interactions",
        desc: "Convert faster with rich carousels, instant payments, and native actions directly within the chat.",
        color: "text-rcs-blue",
        bg: "bg-rcs-blue/10"
    },
    {
        title: "Precision Tracking",
        desc: "Gain deep insights into campaign performance with real-time delivery, read, and interaction metrics.",
        color: "text-vibrant-purple",
        bg: "bg-vibrant-purple/10"
    }
];

export default function WhyRCS() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section className="py-32 bg-navy-900 relative overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left: Sticky Content */}
                    <div className="lg:sticky lg:top-40">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-rcs-blue text-[11px] font-black uppercase tracking-[0.25em] mb-8 font-heading shadow-inner backdrop-blur-md"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-rcs-blue animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            Why PrimeRCS?
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] font-heading"
                        >
                            Messaging Reimagined. <br />
                            <span className="text-slate-500 text-glow-sm">Beyond the Text.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 mb-14 leading-relaxed font-semibold max-w-lg opacity-90"
                        >
                            Traditional SMS is a fossil of the 90s. PrimeRCS unlocks the 
                            full power of modern mobile devices with rich, secure, and 
                            deeply engaging enterprise communication.
                        </motion.p>

                        <div className="space-y-10">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex gap-6 group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center ${feature.bg} ${feature.color} group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-black/30 border border-white/5`}>
                                        <div className="w-4 h-4 rounded-full bg-current shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white text-2xl mb-2 tracking-tight transition-colors group-hover:text-rcs-blue font-heading">{feature.title}</h4>
                                        <p className="text-slate-400 font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Demo */}
                    <div className="relative pt-20 lg:pt-0">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-rcs-blue/10 blur-[120px] rounded-full pointer-events-none" />

                        <motion.div style={{ y }} className="relative z-10 mx-auto max-w-[340px] space-y-12">
                            
                            {/* SMS Comparison (Dimmed) */}
                            <div className="glass-card p-6 opacity-40 scale-90 blur-[1px] transform rotate-[-2deg]">
                                <div className="flex items-center gap-4 mb-5 border-b border-white/5 pb-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-800"></div>
                                    <div className="h-3 w-28 bg-slate-800 rounded-full"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2.5 w-full bg-slate-800 rounded-full"></div>
                                    <div className="h-2.5 w-3/4 bg-slate-800 rounded-full"></div>
                                    <div className="h-2.5 w-1/2 bg-slate-800 rounded-full"></div>
                                </div>
                                <div className="mt-4 text-[9px] text-center text-slate-500 font-black tracking-widest uppercase">Legacy SMS • Limited Content</div>
                            </div>

                            {/* PrimeRCS Comparison (Highlighted) */}
                            <div className="bg-navy-950 rounded-[3.5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.15)] border-[8px] border-slate-900 overflow-hidden relative group/phone">
                                {/* Header */}
                                <div className="px-6 py-8 bg-navy-900/95 backdrop-blur-xl border-b border-white/10 flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
                                        <img src={logo} className="w-9 h-9 object-contain logo-invert" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="font-black text-white text-base tracking-tight font-heading">PrimeRCS</span>
                                            <div className="w-4 h-4 rounded-full bg-rcs-blue flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)] shrink-0">
                                                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-rcs-cyan font-black tracking-[0.2em] uppercase mt-0.5">Verified Business</p>
                                    </div>
                                </div>

                                {/* Rich Body */}
                                <div className="p-6 bg-navy-950/50 space-y-6 relative z-10">
                                    <div className="rounded-[2.5rem] overflow-hidden bg-navy-900/40 border border-white/10 group shadow-2xl backdrop-blur-sm">
                                        <div className="h-44 bg-hero-gradient flex flex-col items-center justify-center text-white p-6 text-center animate-gradient-move relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/10"></div>
                                            <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-2 opacity-80 relative z-10">Exclusive Offer</p>
                                            <h4 className="font-black text-2xl tracking-tight relative z-10 font-heading">Premium Access ✨</h4>
                                        </div>
                                        <div className="p-6 bg-navy-900/80">
                                            <p className="text-[13px] text-slate-400 font-semibold leading-relaxed mb-6 opacity-80">Experience the prime difference. Interactive tools and rich media support for your business.</p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <button className="glass-card !rounded-xl py-3 text-[10px] font-black uppercase text-white hover:bg-white/10 transition-all tracking-[0.15em] active:scale-95 shadow-lg">Pricing</button>
                                                <button className="btn-primary !py-3 !rounded-xl text-[10px] font-black uppercase tracking-[0.15em] active:scale-95">Upgrade</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="inline-flex items-center gap-2 bg-white/5 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
                                            <span className="w-2 h-2 rounded-full bg-rcs-cyan animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                                            <span className="text-[10px] text-rcs-cyan font-black tracking-[0.25em] uppercase font-heading">Verified Channel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
