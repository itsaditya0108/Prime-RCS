import { motion } from "framer-motion";
import brandLogo from "../../assets/logo.png";

const features = [
    "Global termination & sub-second latency",
    "Mission-critical OTPs & Transactional alerts",
    "Carrier-grade reliability (99.99% SLA)",
    "Intelligent failover infrastructure",
    "Real-time DLRs & analytics dashboard"
];

export default function SMSService() {
    return (
        <section className="py-32 bg-navy-950 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black tracking-[0.25em] uppercase mb-8 font-heading shadow-inner">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
                            Core Protocol
                        </span>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight font-heading">
                            Enterprise <br />
                            <span className="text-gradient">SMS Solutions.</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 leading-relaxed font-semibold opacity-90">
                            The rock-solid backbone of global digital identity. 
                            Deliver high-priority notifications with guaranteed precision.
                        </p>

                        <div className="space-y-4">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-rcs-cyan group-hover:bg-rcs-cyan/20 transition-all duration-300 border border-white/10">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-slate-300 font-bold text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

                        <div className="relative w-full max-w-[320px] bg-black rounded-[3rem] p-4 border-[10px] border-slate-900 shadow-2xl ring-2 ring-white/5 h-[620px] flex flex-col overflow-hidden">
                            
                            {/* Header */}
                            <div className="bg-navy-950/80 pt-12 pb-6 px-6 flex flex-col items-center border-b border-white/5 text-center">

                                <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 mb-4 shadow-2xl">
                                    <img src={brandLogo} className="w-9 h-9 logo-invert" />
                                </div>

                                <div>
                                    <div className="text-base font-black text-white flex items-center justify-center gap-2 font-heading tracking-tight">
                                        PrimeRCS
                                        <span className="text-rcs-blue text-sm">✔</span>
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1.5 opacity-60">
                                        Verified Global Terminal
                                    </div>
                                </div>

                            </div>

                            {/* Chat */}
                            <div className="flex-1 bg-navy-900 p-5 space-y-5 overflow-hidden">
                                <div className="text-center">
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] text-slate-500 font-bold tracking-widest uppercase">Verified SMS Hash</span>
                                </div>

                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="glass-card !rounded-2xl !rounded-tl-none !p-5 border-white/10"
                                >
                                    <p className="text-sm text-slate-300 font-medium leading-relaxed">
                                        <span className="text-white font-bold block mb-1">PrimeRCS Authentication</span>
                                        Security Alert: Your verification code is <span className="text-rcs-cyan font-black tracking-widest text-lg">829402</span>.
                                    </p>
                                    <div className="mt-3 flex gap-2">
                                        <div className="h-1 flex-1 bg-rcs-cyan/30 rounded-full overflow-hidden">
                                            <motion.div 
                                                animate={{ width: ["0%", "100%"] }}
                                                transition={{ duration: 10, ease: "linear" }}
                                                className="h-full bg-rcs-cyan" 
                                            />
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-3 font-bold uppercase tracking-widest">Valid for 10:00 mins</p>
                                </motion.div>

                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="glass-card !rounded-2xl !rounded-tl-none !p-5 opacity-60 border-white/5"
                                >
                                    <p className="text-sm text-slate-400 font-medium">Your global shipment #PR-921 is out for delivery. Estimated arrival: 2 PM today.</p>
                                </motion.div>
                            </div>

                            {/* Input */}
                            <div className="p-4 bg-navy-950/80 border-t border-white/5 flex items-center gap-3">
                                <div className="flex-1 h-10 rounded-full bg-white/5 border border-white/10 flex items-center px-4">
                                    <div className="w-full h-1.5 bg-white/10 rounded-full" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
