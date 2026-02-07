import { motion } from "framer-motion";

export default function APISection() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            {/* Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandBlue/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandGreen/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div>
                        <span className="text-brandBlue font-bold tracking-wider uppercase text-xs mb-3 block">
                            For Developers
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            Built for developers, <br />
                            <span className="text-slate-400">by developers.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Integrate our messaging APIs into your stack in minutes, not days.
                            Comprehensive documentation, SDKs, and 24/7 developer support.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "99.99% Uptime SLA",
                                "REST & GraphQL APIs",
                                "Webhooks for real-time events",
                                "Sandboxed testing environment"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                                    <svg className="w-5 h-5 text-brandGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/10">
                            Read the Docs
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </motion.div>

                    {/* Code Snippet */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden bg-[#0F172A] border border-slate-700 shadow-2xl relative group"
                    >
                        <div className="flex items-center px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="ml-4 text-xs text-slate-500 font-mono">send-message.js</div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="font-mono text-sm leading-relaxed">
                                <code className="text-slate-300">
                                    <span className="text-purple-400">const</span> client = <span className="text-blue-400">require</span>(<span className="text-green-400">'suremsg'</span>);{"\n\n"}
                                    <span className="text-purple-400">await</span> client.messages.<span className="text-blue-400">send</span>({"{"}{"\n"}
                                    {"  "}to: <span className="text-green-400">'+1234567890'</span>,{"\n"}
                                    {"  "}type: <span className="text-green-400">'rcs_card'</span>,{"\n"}
                                    {"  "}content: {"{"}{"\n"}
                                    {"    "}title: <span className="text-green-400">'Welcome!'</span>,{"\n"}
                                    {"    "}media: <span className="text-green-400">'https://...'</span>{"\n"}
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
