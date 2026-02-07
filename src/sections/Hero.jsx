import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";

const FloatingElement = ({ delay, duration, x, y, className }) => (
    <motion.div
        animate={{
            y: [0, y, 0],
            x: [0, x, 0],
            rotate: [0, 5, -5, 0]
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

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-12 md:pt-20 pb-12 overflow-hidden bg-[#F8FAFC]">

            {/* ===== PREMIUM AMBIENT BACKGROUND ===== */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingElement
                    delay={0}
                    duration={25}
                    x={30}
                    y={-40}
                    className="top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brandBlue/20"
                />
                <FloatingElement
                    delay={2}
                    duration={30}
                    x={-40}
                    y={50}
                    className="bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brandGreen/15"
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

                {/* ===== RIGHT VISUAL (3D/Floating) ===== */}
                <motion.div
                    style={{ y, opacity }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 mx-auto w-[320px]">
                        {/* Phone Frame */}
                        <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-xl z-20"></div>

                            <div className="bg-white rounded-[2.5rem] overflow-hidden h-[640px] relative">
                                {/* Header */}
                                <div className="bg-white/90 backdrop-blur-md p-4 pt-10 border-b flex items-center gap-3 sticky top-0 z-10">
                                    <img src={logo} className="w-8 h-8 rounded-full shadow-sm" alt="Logo" />
                                    <div>
                                        <p className="font-bold text-sm text-slate-900">SureMsg</p>
                                        <p className="text-[10px] text-brandBlue flex items-center gap-1">
                                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                                            Verified Business
                                        </p>
                                    </div>
                                </div>

                                {/* Chat Body */}
                                <div className="p-4 space-y-4 bg-slate-50 min-h-full">
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[85%]">
                                        <p className="text-sm text-slate-600">Hi! Ready to boost your engagement? 🚀</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-brandBlue to-brandGreen p-3 rounded-2xl rounded-tr-none shadow-md max-w-[85%] ml-auto text-white">
                                        <p className="text-sm">Absolutely! How does RCS help?</p>
                                    </div>

                                    {/* Rich Card */}
                                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden max-w-[85%] animate-pulse-slow">
                                        <div className="h-24 bg-gradient-to-r from-brandBlue/10 to-brandGreen/10 flex items-center justify-center">
                                            <span className="text-4xl">✨</span>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-bold text-slate-800 text-sm mb-1">Interactive Rich Cards</h4>
                                            <p className="text-xs text-slate-500 mb-3">Send images, carousels, and buttons directly in the chat.</p>
                                            <button className="w-full py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition">
                                                See Demo
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Input Area */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white p-3 border-t flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">+</div>
                                    <div className="h-8 flex-1 rounded-full bg-slate-100 text-xs flex items-center px-3 text-slate-400">Message...</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements behind phone */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 -right-16 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 z-20 w-48"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Message Status</p>
                                    <p className="text-sm font-bold text-slate-800">Delivered</p>
                                </div>
                            </div>
                            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="h-full bg-green-500"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-32 -left-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 z-20 w-40"
                        >
                            <div className="text-center">
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Open Rate</p>
                                <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen">98%</p>
                            </div>
                        </motion.div>


                    </div>
                </motion.div>
            </div>
        </section >
    );
}
