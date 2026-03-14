import { motion } from "framer-motion";
import brandLogo from "../../assets/logo.png";

const features = [
    "Reach 2B+ users on their favorite app",
    "Automate with intelligent conversational AI",
    "Deploy rich media catalogs & payment links",
    "Reliable Tier-1 connectivity & 24/7 support",
    "Official Meta Business Solution Provider"
];

export default function WhatsAppService() {
    return (
        <section className="py-32 bg-navy-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black tracking-[0.25em] uppercase mb-8 font-heading shadow-inner">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            Official API
                        </span>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight font-heading">
                            WhatsApp Business <br />
                            <span className="text-gradient">Automation.</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 leading-relaxed font-semibold opacity-90">
                            The world's most popular messaging app, optimized for your business. 
                            Build trust and drive engagement at scale.
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
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300 border border-emerald-500/20">
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
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

                        <div className="relative w-full max-w-[320px] bg-black rounded-[3rem] p-4 border-[10px] border-slate-900 shadow-2xl ring-2 ring-white/5 h-[620px] flex flex-col overflow-hidden">
                            
                            {/* WhatsApp Header */}
                            <div className="bg-[#075E54] pt-12 pb-4 px-5 flex items-center gap-4 border-b border-white/5">

                                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                    <img src={brandLogo} className="w-7 h-7 logo-invert" />
                                </div>

                                <div>
                                    <div className="text-[13px] font-black text-white flex items-center gap-1.5 font-heading">
                                        PrimeRCS
                                        <span className="text-emerald-400 text-xs shadow-glow-sm">✔</span>
                                    </div>
                                    <div className="text-[9px] text-emerald-400/80 font-black uppercase tracking-[0.2em]">
                                        Verified Business
                                    </div>
                                </div>

                            </div>

                            {/* Chat Body */}
                            <div className="flex-1 bg-[#0b141a] p-5 space-y-4 overflow-hidden relative">
                                <div className="absolute inset-0 opacity-[0.03] grayscale bg-[url('https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096d274ad3e07.png')] bg-repeat" />

                                <div className="flex justify-start relative z-10">
                                    <div className="bg-[#202c33] p-3 px-4 rounded-xl rounded-tl-none border border-white/5 max-w-[85%]">
                                        <p className="text-xs text-slate-300 leading-relaxed">Hello! 👋 How can we help you scale your messaging today?</p>
                                    </div>
                                </div>

                                <div className="flex justify-end relative z-10">
                                    <div className="bg-[#005c4b] p-3 px-4 rounded-xl rounded-tr-none border border-white/5 max-w-[85%]">
                                        <p className="text-xs text-white leading-relaxed">I'd like to integrate WhatsApp into my CRM.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 relative z-10 pl-2">
                                    {['View API Docs', 'Schedule Demo', 'Pricing'].map(action => (
                                        <button key={action} className="bg-[#202c33] border border-white/5 p-3 rounded-xl text-rcs-cyan text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#2a3942] transition-all hover:scale-[1.02] active:scale-[0.98] font-heading">
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-[#202c33] flex items-center gap-3">
                                <div className="flex-1 h-9 rounded-full bg-[#2a3942] border border-white/5 flex items-center px-4 overflow-hidden">
                                     <div className="w-full h-1 bg-white/10 rounded-full" />
                                </div>
                                <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-lg">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
