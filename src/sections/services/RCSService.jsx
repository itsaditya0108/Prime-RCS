import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brandLogo from "../../assets/logo.png";

const features = [
    {
        title: "Verified Sender",
        desc: "Build instant trust with verified brand identifiers and logos.",
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        color: "text-rcs-cyan",
        bg: "bg-rcs-cyan/10"
    },
    {
        title: "Rich Carousels",
        desc: "Interactive product display with native shopping capabilities.",
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
        color: "text-vibrant-purple",
        bg: "bg-vibrant-purple/10"
    },
    {
        title: "Smart Actions",
        desc: "One-tap conversion triggers for payments, maps, and events.",
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777" /></svg>,
        color: "text-rcs-blue",
        bg: "bg-rcs-blue/10"
    }
];

const carouselItems = [
    {
        title: "Prime Collection",
        subtitle: "The future is interactive.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
        action: "Shop Now"
    },
    {
        title: "Exclusive Access",
        subtitle: "Join the elite movement.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500",
        action: "Get Started"
    }
];

export default function RCSService() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % carouselItems.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-32 bg-navy-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Left side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-rcs-cyan text-[10px] font-black tracking-[0.25em] uppercase mb-8 backdrop-blur-md shadow-inner font-heading"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-rcs-cyan animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                            Premium Channel
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight font-heading">
                            RCS Business <br />
                            <span className="text-gradient py-2">Messaging.</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-12 leading-relaxed font-semibold opacity-90">
                            Transform plain SMS into a rich, app-like environment. 
                            Verified branding and interactive features delivered natively.
                        </p>

                        <div className="space-y-4">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="glass-card !p-6 flex items-start gap-6 hover:translate-x-2 transition-transform duration-500 border border-white/5 shadow-2xl"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 border border-white/10 shadow-lg`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white text-xl mb-1 font-heading">{item.title}</h4>
                                        <p className="text-slate-400 font-semibold text-sm leading-relaxed opacity-80">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side: Mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Glow background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rcs-blue/10 blur-[120px] rounded-full pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 w-full max-w-[340px]"
                        >
                            {/* Realistic Pixel-Perfect Mockup */}
                            <div className="bg-navy-950 rounded-[4rem] p-3 border-[10px] border-slate-900 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.15)] overflow-hidden h-[700px] flex flex-col relative">
                                
                                {/* Inner Screen Border */}
                                <div className="absolute inset-0 rounded-[3.2rem] border border-white/10 pointer-events-none z-20" />

                                {/* Dynamic Island */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-between px-3 border border-white/5 shadow-inner">
                                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                                    <div className="flex gap-1">
                                        <span className="w-1 h-1 rounded-full bg-rcs-blue/40" />
                                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                                    </div>
                                </div>

                                {/* Header */}
                                <div className="pt-14 pb-5 px-5 bg-navy-900/95 backdrop-blur-xl flex items-center gap-4 border-b border-white/10 relative z-10">
                                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md shrink-0">
                                        <img src={brandLogo} className="w-9 h-9 object-contain logo-invert" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-base font-black text-white flex items-center gap-1.5 truncate font-heading">
                                            PrimeRCS
                                            <div className="w-4 h-4 rounded-full bg-rcs-blue flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)] shrink-0">
                                                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-[10px] text-rcs-cyan font-black uppercase tracking-[0.2em] opacity-100 flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rcs-cyan animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                            Verified Business
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="flex-1 bg-navy-950 p-5 space-y-6 overflow-hidden relative z-10">
                                    <div className="text-center">
                                        <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] text-slate-500 font-black tracking-widest uppercase border border-white/5">Encryption Enabled</span>
                                    </div>

                                    <div className="bg-navy-900/60 p-4 rounded-2xl text-[12px] text-slate-300 font-semibold leading-relaxed border border-white/5 shadow-inner backdrop-blur-sm">
                                        Experience a new dimension of customer engagement with <span className="text-rcs-cyan uppercase tracking-wider">PrimeRCS</span> 🚀
                                    </div>

                                    <div className="relative group/carousel">
                                        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={active}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                    className="bg-navy-900/60 backdrop-blur-xl"
                                                >
                                                    <div className="relative h-40 overflow-hidden">
                                                        <img src={carouselItems[active].image} className="h-full w-full object-cover" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                                                    </div>
                                                    <div className="p-5">
                                                        <h4 className="font-black text-white text-base mb-1 tracking-tight font-heading">{carouselItems[active].title}</h4>
                                                        <p className="text-[10px] text-slate-400 mb-4 leading-relaxed line-clamp-2">{carouselItems[active].subtitle}</p>
                                                        <button className="btn-primary w-full !py-3 !text-[10px] rounded-xl shadow-rcs-blue/20 font-black uppercase tracking-widest">
                                                            {carouselItems[active].action}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                                        {['Learn More', 'Book Now', 'Call'].map(btn => (
                                            <button key={btn} className="px-4 py-2 whitespace-nowrap bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase text-rcs-cyan tracking-widest active:scale-95 transition-transform shadow-sm">
                                                {btn}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Input bar */}
                                <div className="p-4 bg-navy-950 border-t border-white/10 flex items-center gap-3 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-btn-gradient flex items-center justify-center text-white text-xl font-bold shadow-rcs-blue/30">+</div>
                                    <div className="flex-1 h-10 rounded-full bg-white/5 border border-white/10 px-5 flex items-center text-xs text-slate-500 font-semibold italic">Type a message...</div>
                                </div>

                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
