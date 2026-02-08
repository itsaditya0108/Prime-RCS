import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import brandLogo from "../assets/logo.png";

const FloatingElement = ({ delay, duration, x, y, className }) => (
    <motion.div
        animate={{
            y: [0, y, 0],
            x: [0, x, 0],
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    />
);

const carouselItems = [
    {
        title: "Summer Collection",
        subtitle: "New arrivals are here! ☀️",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        action: "Shop Now"
    },
    {
        title: "Exclusive Deal",
        subtitle: "Get 40% off shoes today.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        action: "View Offer"
    },
    {
        title: "New Accessories",
        subtitle: "Complete your look.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        action: "Explore"
    }
];

export default function Hero() {
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % carouselItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-28 pb-12 overflow-hidden bg-[#F8FAFC]">

            {/* ===== PREMIUM AMBIENT BACKGROUND ===== */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingElement
                    delay={0}
                    duration={20}
                    x={20}
                    y={-20}
                    className="top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brandBlue/10"
                />
                <FloatingElement
                    delay={2}
                    duration={25}
                    x={-20}
                    y={30}
                    className="bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brandGreen/10"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

                {/* ===== LEFT CONTENT ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-brandBlue/20 shadow-sm mb-8"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandGreen opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brandGreen"></span>
                        </span>
                        <span className="text-sm font-medium text-slate-600 tracking-wide">
                            Now Available: RCS Verification
                        </span>
                    </motion.div>

                    <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight text-slate-900 mb-6">
                        Engage customers like <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen relative">
                            never before.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brandBlue/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                            </svg>
                        </span>
                    </h1>

                    <p className="font-sans text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Transform standard SMS into rich, interactive experiences.
                        Drive <strong>3x more engagement</strong> with verified branding,
                        images, and buttons directly in the messaging app.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-brandBlue to-brandGreen text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-brandBlue/25 transition-all hover:shadow-brandBlue/40 flex items-center justify-center gap-2 group hover:-translate-y-1"
                        >
                            Start Free Trial
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>

                        <Link
                            to="/services"
                            className="bg-white/50 backdrop-blur-sm text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:border-brandBlue/30 transition-colors flex items-center justify-center hover:bg-white/80"
                        >
                            View Services
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p>Trusted by 500+ businesses</p>
                    </div>
                </motion.div>

                {/* ===== RIGHT VISUAL (Mobile Mockup) ===== */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex justify-end"
                >
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brandBlue/20 to-brandGreen/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 w-[320px]">
                        {/* Premium Phone Body */}
                        <div className="relative bg-slate-900 border-slate-900 border-[8px] rounded-[2.5rem] shadow-2xl h-[640px] w-full flex flex-col overflow-hidden ring-1 ring-white/10">
                            {/* Side Buttons */}
                            <div className="h-[32px] w-[3px] bg-slate-800 absolute -start-[11px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-slate-800 absolute -start-[11px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-slate-800 absolute -end-[11px] top-[142px] rounded-e-lg"></div>

                            {/* Screen */}
                            <div className="bg-white w-full h-full rounded-[2rem] overflow-hidden flex flex-col relative">

                                {/* Header */}
                                <div className="bg-white/95 border-b border-slate-100 p-4 pt-8 flex items-center gap-3 z-20 sticky top-0 shadow-sm">
                                    <img src={brandLogo} alt="SureMsg Logo" className="w-10 h-10 rounded-full object-contain p-1 border border-slate-100 bg-white shadow-sm" />
                                    <div className="flex-1">
                                        <div className="font-display font-bold text-slate-900 text-sm flex items-center gap-1.5 tracking-tight">
                                            SureMsg
                                            {/* Verified Badge */}
                                            <svg className="w-4 h-4 text-brandBlue fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <p className="text-[10px] text-brandBlue font-semibold tracking-wide flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brandBlue animate-pulse"></span>
                                            Verified Business
                                        </p>
                                    </div>
                                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01" /></svg>
                                </div>

                                {/* Chat Thread */}
                                <div className="flex-1 bg-slate-50 p-4 space-y-4 overflow-hidden relative">
                                    <div className="text-center text-[10px] text-slate-400 font-medium my-2">Today 9:41 AM</div>

                                    {/* Incoming Msg */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[90%] border border-slate-100"
                                    >
                                        <p className="text-sm text-slate-700">Check out our latest collection! 🌟 Free shipping on all orders today.</p>
                                    </motion.div>

                                    {/* Carousel Container */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="w-full overflow-hidden -mx-1"
                                    >
                                        <div
                                            className="flex transition-transform duration-500 ease-out gap-3 px-1"
                                            style={{ transform: `translateX(-${activeCard * 85}%)` }}
                                        >
                                            {carouselItems.map((card, index) => (
                                                <div key={index} className="min-w-[85%] bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex-shrink-0">
                                                    <div className="h-28 bg-slate-200 relative overflow-hidden">
                                                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                        <div className="absolute bottom-2 left-3 text-white font-bold text-sm shadow-sm">{card.title}</div>
                                                    </div>
                                                    <div className="p-3">
                                                        <p className="text-xs text-slate-500 mb-3">{card.subtitle}</p>
                                                        <button className="w-full py-2 rounded-lg bg-slate-50 text-brandBlue text-xs font-bold hover:bg-slate-100 transition border border-slate-200">
                                                            {card.action}
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Suggested Actions */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="flex gap-2 overflow-x-auto no-scrollbar pb-1"
                                    >
                                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 shadow-sm">
                                            View Website
                                        </button>
                                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 shadow-sm">
                                            Track Order
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Input Area */}
                                <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-brandBlue text-white flex items-center justify-center shadow-lg shadow-brandBlue/30 hover:scale-105 transition">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                    </div>
                                    <div className="flex-1 h-9 rounded-full bg-slate-100 text-xs text-slate-400 flex items-center px-4">Chat with SureMsg...</div>
                                    <div className="w-8 h-8 rounded-full text-slate-400 flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Floating Status */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-24 -right-16 bg-white/90 p-3 rounded-xl shadow-lg border border-slate-100 z-20 w-44 hidden xl:flex items-center gap-3 backdrop-blur-sm"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Status</p>
                                <p className="text-sm font-bold text-slate-900">Verified</p>
                            </div>
                        </motion.div>

                        {/* Floating Impact */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-40 -left-12 bg-white/90 p-4 rounded-xl shadow-lg border border-slate-100 z-20 hidden xl:block backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brandBlue">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Impact</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl font-black text-slate-900">3x</span>
                                        <span className="text-xs font-medium text-green-600 flex items-center">
                                            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12 7h.01M12 14h.01M5.93 17.07l5-5 5 5 1.42-1.42-5.93-5.92a2 2 0 00-2.83 0L2.5 15.65l1.42 1.42z" clipRule="evenodd" /></svg>
                                            Growth
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
