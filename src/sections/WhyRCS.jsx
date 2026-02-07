import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "../assets/logo.png";

const features = [
    {
        title: "Verified Trust",
        desc: "Customers know it’s you. Every message carries your verified business checkmark, logo, and brand colors.",
        color: "bg-blue-500"
    },
    {
        title: "Rich Interactions",
        desc: "Stop sending links. Send carousels, payment requests, and date pickers directly in the chat.",
        color: "bg-green-500"
    },
    {
        title: "Better Analytics",
        desc: "See exactly when messages are delivered, read, and interacted with. No more guessing.",
        color: "bg-purple-500"
    }
];

export default function WhyRCS() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Sticky Content */}
                    <div className="lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandBlue/10 text-brandBlue text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-brandBlue animate-pulse" />
                            Why Switch to RCS?
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight"
                        >
                            It’s not just a message. <br />
                            <span className="text-slate-400">It’s an experience.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 mb-12 leading-relaxed"
                        >
                            Traditional SMS is limited to 160 characters of plain text.
                            RCS upgrades your business messaging with the rich features
                            users love in apps like WhatsApp and iMessage.
                        </motion.p>

                        <div className="space-y-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex gap-4 group"
                                >
                                    <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${feature.color} bg-opacity-10 text-${feature.color.split('-')[1]}-600 group-hover:scale-110 transition-transform duration-300`}>
                                        <div className={`w-3 h-3 rounded-full ${feature.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{feature.title}</h4>
                                        <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Demo */}
                    <div className="relative pt-12 lg:pt-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brandBlue/20 to-brandGreen/20 blur-[100px] rounded-full pointer-events-none" />

                        <motion.div style={{ y }} className="relative z-10 mx-auto max-w-[320px]">
                            {/* Comparison Card: SMS vs RCS */}
                            <div className="space-y-6">
                                {/* SMS Message (Boring) */}
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 opacity-60 scale-95 origin-bottom">
                                    <div className="flex items-center gap-3 mb-3 border-b border-slate-50 pb-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                        <div className="h-2 w-20 bg-slate-200 rounded"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                                        <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                                        <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                                    </div>
                                    <div className="mt-2 text-[10px] text-center text-slate-400 font-mono">SMS • Text Only</div>
                                </div>

                                {/* RCS Message (Premium) */}
                                <div className="bg-white rounded-[2rem] shadow-2xl shadow-brandBlue/20 border border-brandBlue/10 overflow-hidden relative">
                                    {/* Verified Header */}
                                    <div className="px-4 py-3 bg-white border-b border-slate-100 flex items-center gap-3">
                                        <img src={logo} className="w-8 h-8 rounded-full" />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-1">
                                                <span className="font-bold text-slate-900 text-sm">SureMsg</span>
                                                <svg className="w-3 h-3 text-brandBlue fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rich Content */}
                                    <div className="p-4 bg-slate-50 space-y-4">
                                        <div className="rounded-xl overflow-hidden shadow-sm">
                                            <div className="h-32 bg-gradient-to-r from-brandBlue to-brandGreen flex items-center justify-center text-white font-bold text-lg">
                                                Summer Sale ☀️
                                            </div>
                                            <div className="bg-white p-3">
                                                <h4 className="font-bold text-slate-900 text-sm mb-1">Get 50% Off Today!</h4>
                                                <p className="text-xs text-slate-500 mb-3">Flash sale ends in 3 hours. Don't miss out on these exclusive deals.</p>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button className="bg-slate-100 text-slate-700 py-1.5 rounded-lg text-xs font-semibold hover:bg-slate-200 transition">View Items</button>
                                                    <button className="bg-brandBlue text-white py-1.5 rounded-lg text-xs font-semibold hover:bg-brandBlue/90 transition">Shop Now</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <span className="text-[10px] text-slate-400 font-medium bg-slate-200/50 px-2 py-1 rounded-full">
                                                RCS • Verified • Interactive
                                            </span>
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
