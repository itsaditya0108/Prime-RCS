import { motion } from "framer-motion";
import { useState } from "react";

const items = [
    {
        title: "Interactive Rich Cards",
        desc: "Images, carousels and media delivered inside chat.",
        gradient: "from-rcs-cyan to-rcs-blue"
    },
    {
        title: "One Tap Actions",
        desc: "Book, buy or navigate instantly.",
        gradient: "from-rcs-blue to-vibrant-purple"
    },
    {
        title: "Verified Trust",
        desc: "Your brand logo with verified sender identity.",
        gradient: "from-vibrant-purple to-pink-500"
    }
];

export default function PlatformShowcase() {

    const [active, setActive] = useState(0);

    return (

        <section className="py-20 lg:py-32 bg-navy-900 relative overflow-hidden">

            {/* Background depth */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-rcs-blue/10 blur-[120px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6">

                <div className="text-center mb-20 lg:mb-24 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 font-heading text-white">
                            Built for <span className="text-gradient text-glow-lg py-2">Engagement</span>
                        </h2>

                        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-semibold leading-relaxed opacity-90">
                            Powerful tools designed to transform messaging into a high-performance conversion engine.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

                    {/* Tabs */}
                    <div className="space-y-4 order-2 lg:order-1">

                        {items.map((item, i) => (

                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-full text-left p-5 sm:p-8 rounded-[1.25rem] sm:rounded-[2rem] transition-all duration-500 relative overflow-hidden group ${active === i
                                        ? "glass-card !bg-white/[0.05] border-white/20 shadow-glow-sm scale-[1.02] sm:scale-100"
                                        : "opacity-40 hover:opacity-100 hover:translate-x-1"
                                    }`}
                            >
                                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${item.gradient} transition-transform duration-500 scale-y-0 group-hover:scale-y-100 ${active === i ? "scale-y-100" : ""}`} />

                                <h3 className={`text-lg sm:text-2xl font-black mb-2 tracking-tight transition-colors ${active === i ? "text-white" : "text-slate-300"}`}>
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
                                    {item.desc}
                                </p>

                            </button>

                        ))}

                    </div>

                    {/* Phone Mockup Rendering */}
                    {/* Phone Mockup Rendering */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-[300px] sm:w-[340px]"
                        >
                            {/* Pro Bezel */}
                            <div className="bg-navy-950 rounded-[4rem] p-3 sm:p-4 border-[10px] border-slate-900 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.15)] overflow-hidden relative">
                                
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

                                <div className="h-[480px] sm:h-[540px] bg-navy-900/40 backdrop-blur-sm rounded-[2.8rem] flex flex-col items-center justify-center text-center p-8 sm:p-12 relative overflow-hidden group">
                                    
                                    {/* Animated Background Pulse */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${items[active].gradient} opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-1000`} />

                                    <div className="relative z-10 w-full">
                                        <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-[2.5rem] bg-gradient-to-r ${items[active].gradient} mx-auto mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 border border-white/10`}>
                                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>

                                        <h4 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight font-heading">
                                            {items[active].title}
                                        </h4>

                                        <p className="text-slate-400 text-sm sm:text-base font-semibold leading-relaxed opacity-80">
                                            {items[active].desc}
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* Mobile Ambient Indicator */}
                            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r ${items[active].gradient} blur-[20px] opacity-50`} />
                        </motion.div>
                    </div>

                </div>

            </div>

        </section>

    );
}