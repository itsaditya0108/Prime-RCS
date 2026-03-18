import { motion } from "framer-motion";
import brandLogo from "../../assets/logo.png";

const features = [
    {
        title: "Massive Reach",
        desc: "Connect with over 2 billion active users on their preferred messaging platform.",
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        title: "AI Automation",
        desc: "Deploy intelligent chatbots to handle queries and automate workflows 24/7.",
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Commerce Ready",
        desc: "Showcase products with rich catalogs and secure native payment links.",
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    }
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
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black tracking-[0.25em] uppercase mb-8 font-heading shadow-inner"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            Official API
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight font-heading">
                            WhatsApp Business <br />
                            <span className="text-gradient">Automation.</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-12 leading-relaxed font-semibold opacity-90">
                            The world's most popular messaging app, optimized for your business. 
                            Build trust and drive engagement with our Meta-verified solution.
                        </p>

                        <div className="space-y-4">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="glass-card !p-6 flex items-start gap-6 hover:translate-x-2 transition-transform duration-500 border border-emerald-500/5 shadow-2xl"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 border border-emerald-500/10 shadow-lg`}>
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

                    {/* Right: Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                                    <div className="bg-[#202c33] p-3 px-4 rounded-xl rounded-tl-none border border-white/5 max-w-[85%] shadow-sm">
                                        <p className="text-xs text-slate-300 leading-relaxed">Hello! 👋 How can we help you scale your messaging today?</p>
                                    </div>
                                </div>

                                <div className="flex justify-end relative z-10">
                                    <div className="bg-[#005c4b] p-3 px-4 rounded-xl rounded-tr-none border border-white/5 max-w-[85%] shadow-sm">
                                        <p className="text-xs text-white leading-relaxed">I'd like to integrate WhatsApp into my CRM.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 relative z-10 pl-2">
                                    {['View API Docs', 'Schedule Demo', 'Pricing'].map(action => (
                                        <button key={action} className="bg-[#202c33] border border-white/5 p-3 rounded-xl text-rcs-cyan text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#2a3942] transition-all hover:scale-[1.02] active:scale-[0.98] font-heading shadow-md">
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-[#202c33] flex items-center gap-3 border-t border-white/5">
                                <div className="flex-1 h-9 rounded-full bg-[#2a3942] border border-white/5 flex items-center px-4 overflow-hidden">
                                     <div className="w-full h-1.5 bg-white/10 rounded-full" />
                                </div>
                                <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform">
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
