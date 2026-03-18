import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import brandLogo from "../assets/logo.png";

const carouselItems = [
    {
        title: "Verified Sender",
        subtitle: "Build trust with a verified checkmark and brand logo.",
        image:
            "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=500",
        action: "Learn More",
    },
    {
        title: "Rich Carousels",
        subtitle: "Showcase products with interactive scrolling cards.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
        action: "Try Demo",
    },
    {
        title: "Smart Replies",
        subtitle: "Enable one-tap responses for faster conversions.",
        image:
            "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=500",
        action: "See Patterns",
    },
];

export default function HomeHero() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % carouselItems.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-aurora pt-24 pb-12 lg:pt-32 lg:pb-20">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-rcs-blue/20 blur-[140px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-vibrant-purple/20 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT CONTENT */}
                <div className="text-center lg:text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-inner"
                    >
                        <span className="w-2.5 h-2.5 bg-rcs-cyan rounded-full animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
                        <span className="text-[11px] lg:text-xs font-black tracking-[0.25em] text-slate-300 uppercase font-heading">
                            Next Generation Messaging
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight mb-6 sm:mb-8 font-heading"
                    >
                        The Future of <br className="hidden sm:block" />
                        <span className="text-gradient text-glow-lg py-2">
                            Messaging is RCS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold opacity-90"
                    >
                        Deliver rich, verified and interactive experiences with PrimeRCS.
                        Increase engagement and drive conversions using next-generation
                        messaging technology.
                    </motion.p>

                    <div className="flex flex-wrap gap-4 lg:gap-5 justify-center lg:justify-start">

                        <Link
                            to="/contact"
                            className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-black font-heading shadow-rcs-blue/25"
                        >
                            Get Started
                        </Link>

                        <button className="glass-card px-6 md:px-8 py-3 md:py-3.5 text-base md:text-lg font-black border border-white/15 rounded-xl font-heading hover:bg-white/10 transition-all duration-500">
                            Watch Demo
                        </button>

                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start">

                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    loading="lazy"
                                    src={`https://i.pravatar.cc/150?u=${i}`}
                                    className="w-9 h-9 rounded-full border-2 border-navy-900 shadow-xl"
                                />
                            ))}
                        </div>

                        <div>
                            <p className="font-black text-white text-base leading-none">5,000+</p>
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">
                                Global Businesses
                            </p>
                        </div>

                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:flex justify-end"
                >

                    <div className="w-[280px] sm:w-[310px] lg:w-[340px] relative group animate-float">

                        {/* Ambient glow */}
                        <div className="absolute -inset-16 bg-rcs-blue/15 blur-[90px] opacity-60" />

                        {/* Phone body */}
                        <div className="relative bg-[#0F1115] rounded-[3rem] p-[10px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] border-[1px] border-white/10">

                            {/* Bezels/Frame details */}
                            <div className="absolute inset-0 rounded-[3rem] border-[3px] border-white/5 pointer-events-none" />
                            
                            {/* Buttons */}
                            <div className="absolute -left-[2px] top-24 w-[3px] h-12 bg-gradient-to-b from-white/20 to-transparent rounded-l-md" />
                            <div className="absolute -left-[2px] top-40 w-[3px] h-12 bg-gradient-to-b from-white/20 to-transparent rounded-l-md" />
                            <div className="absolute -right-[2px] top-32 w-[3px] h-20 bg-gradient-to-b from-white/20 to-transparent rounded-r-md" />

                            {/* Screen */}
                            <div className="relative rounded-[2.4rem] overflow-hidden bg-navy-950">

                                    {/* Glass reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-30" />

                                    {/* Dynamic island */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-40 flex items-center justify-end px-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 blur-[1px]" />
                                    </div>

                                {/* Header */}
                                <div className="bg-navy-900 pt-10 pb-4 px-4 flex items-center gap-3 border-b border-white/5">

                                    <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg">
                                        <img src={brandLogo} className="w-6 h-6 logo-invert" />
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold text-white flex gap-1">
                                            PrimeRCS
                                            <span className="text-rcs-blue">✔</span>
                                        </div>

                                        <div className="text-[9px] text-rcs-cyan font-semibold uppercase tracking-wider">
                                            Verified Business
                                        </div>
                                    </div>

                                </div>

                                {/* Chat area */}
                                <div className="p-4 space-y-6">

                                    <div className="bg-navy-900/60 p-4 rounded-xl text-xs text-slate-300 leading-relaxed">
                                        Explore next-gen messaging with PrimeRCS 🚀
                                    </div>

                                    {/* Carousel */}
                                    <div className="overflow-hidden rounded-xl border border-white/10">

                                        <div
                                            className="flex transition-transform duration-700 ease-out"
                                            style={{
                                                transform: `translateX(-${active * 100}%)`
                                            }}
                                        >

                                            {carouselItems.map((card, i) => (

                                                <div key={i} className="min-w-full bg-navy-900">

                                                    <img
                                                        src={card.image}
                                                        loading="lazy"
                                                        className="h-32 w-full object-cover"
                                                    />

                                                    <div className="p-4">

                                                        <h4 className="font-bold text-white text-sm mb-1.5">
                                                            {card.title}
                                                        </h4>

                                                        <p className="text-[11px] text-slate-400 mb-4 leading-normal">
                                                            {card.subtitle}
                                                        </p>

                                                        <button className="btn-primary w-full text-[11px] py-2.5">
                                                            {card.action}
                                                        </button>

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                    {/* Quick buttons */}
                                    <div className="flex gap-2 overflow-x-auto no-scrollbar">

                                        {["Book Now", "Learn More", "Call Us"].map((btn) => (
                                            <button
                                                key={btn}
                                                className="px-3 py-1.5 text-[10px] bg-white/5 border border-white/10 rounded-lg text-rcs-cyan whitespace-nowrap"
                                            >
                                                {btn}
                                            </button>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>
            </div>

        </section>
    );
}