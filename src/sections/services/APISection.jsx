import { motion } from "framer-motion";

export default function APISection() {
    return (
        <section className="py-32 bg-navy-950 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rcs-blue/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-vibrant-purple/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                }
                            }
                        }}
                    >
                        <motion.span 
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="inline-flex items-center gap-2.5 py-2.5 px-5 rounded-full bg-white/5 border border-white/10 text-rcs-blue text-[11px] font-black tracking-[0.25em] uppercase mb-8 backdrop-blur-md font-heading shadow-inner"
                        >
                            Developer Hub
                        </motion.span>
                        
                        <motion.h2 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1] font-heading"
                        >
                            Built for developers, <br />
                            <span className="text-gradient py-2">by engineers.</span>
                        </motion.h2>

                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-semibold max-w-xl"
                        >
                            Integrate our global messaging mesh in minutes. 
                            Our APIs are built with modern standards for maximum developer velocity.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-6 mb-12">
                            {[
                                "99.99% Uptime SLA",
                                "REST & GraphQL",
                                "Native SDKs",
                                "Webhooks"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-rcs-cyan shadow-glow-sm" />
                                    <span className="font-bold text-sm tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="btn-primary !px-12 !py-5 text-lg font-black font-heading rounded-3xl shadow-rcs-blue/20 hover:shadow-rcs-blue/40"
                        >
                            Explore Documentation
                        </motion.button>
                    </motion.div>

                    {/* Code Terminal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card !p-0 overflow-hidden shadow-2xl-glow border-white/10"
                    >
                        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">protocol-v2.js</div>
                        </div>
                        <div className="p-8 overflow-x-auto bg-navy-950/50">
                            <pre className="font-mono text-sm leading-relaxed">
                                <code className="block text-slate-400">
                                    <span className="text-rcs-blue">import</span> PrimeRCS <span className="text-rcs-blue">from</span> <span className="text-rcs-cyan">'@prime/sdk'</span>;{"\n\n"}
                                    <span className="text-slate-500">// Initialize cluster</span>{"\n"}
                                    <span className="text-rcs-blue">const</span> client = <span className="text-rcs-blue">await</span> PrimeRCS.<span className="text-rcs-cyan">connect</span>({"{ "}
                                    {"\n  "}apiKey: <span className="text-vibrant-purple">'pk_live_...'</span>
                                    {"\n"}{"}"});{"\n\n"}
                                    <span className="text-slate-500">// Dispatch rich payload</span>{"\n"}
                                    <span className="text-rcs-blue">await</span> client.dispatch({"{"}{"\n"}
                                    {"  "}to: <span className="text-rcs-cyan">'+1.202.555.0111'</span>,{"\n"}
                                    {"  "}channel: <span className="text-rcs-cyan">'rcs'</span>,{"\n"}
                                    {"  "}creative: {"{"}{"\n"}
                                    {"    "}template: <span className="text-rcs-cyan">'hero_carousel'</span>,{"\n"}
                                    {"    "}actions: [<span className="text-rcs-cyan">'CHECKOUT'</span>, <span className="text-rcs-cyan">'MAP'</span>]{"\n"}
                                    {"  "}{"}"}{"\n"}
                                    {"}"});
                                </code>
                            </pre>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
