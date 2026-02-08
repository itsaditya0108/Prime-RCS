import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brandLogo from "../../assets/logo.png";

const features = [
    {
        title: "Verified Sender",
        desc: "Build trust instantly with your brand logo, name, and verified checkmark.",
        icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        color: "bg-blue-500"
    },
    {
        title: "Carousel Cards",
        desc: "Showcase multiple products or offers in a swipeable, rich card format.",
        icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
        color: "bg-purple-500"
    },
    {
        title: "Suggested Actions",
        desc: "One-tap buttons for payments, maps, calendaring, and dialing.",
        icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777" /></svg>,
        color: "bg-green-500"
    }
];

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

export default function RCSService() {
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % carouselItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandBlue/10 text-brandBlue text-sm font-bold uppercase tracking-wide mb-6 border border-brandBlue/20">
                            <span className="w-2 h-2 rounded-full bg-brandBlue animate-pulse" />
                            The Future of Messaging
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                            RCS Business Messaging <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandGreen">
                                Interactive & Verified.
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Upgrade your SMS to a rich, app-like experience.
                            Deliver engaging content directly to the default messaging app—no downloads required.
                        </p>

                        <div className="space-y-6">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
                                >
                                    <div className={`w-10 h-10 rounded-lg ${item.color} shadow-lg shadow-${item.color.replace('bg-', '')}/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual: Premium Phone Mockup with Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 flex justify-center lg:justify-end"
                    >
                        {/* Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brandBlue/20 to-brandGreen/20 blur-[100px] rounded-full pointer-events-none" />

                        {/* Phone Body */}
                        <div className="relative border-gray-800 bg-gray-900 border-[12px] rounded-[3rem] h-[680px] w-[340px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/20">
                            {/* Buttons */}
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[15px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[15px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[15px] top-[142px] rounded-e-lg"></div>

                            {/* Screen */}
                            <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-white flex flex-col relative">

                                {/* Header */}
                                <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 p-4 pt-10 flex items-center gap-3 z-20 sticky top-0">
                                    <img src={brandLogo} alt="SureMsg Logo" className="w-10 h-10 rounded-full object-contain p-1 border border-slate-100 bg-white shadow-sm" />
                                    <div className="flex-1">
                                        <div className="font-display font-bold text-slate-900 text-sm flex items-center gap-1.5 tracking-tight">
                                            SureMsg Fashion
                                            <svg className="w-4 h-4 text-brandBlue fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        </div>
                                        <p className="text-[10px] text-brandBlue font-semibold tracking-wide flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brandBlue animate-pulse"></span>
                                            Verified Business
                                        </p>
                                    </div>
                                    <svg className="w-5 h-5 text-brandBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                </div>

                                {/* Chat Thread */}
                                <div className="flex-1 bg-slate-50 p-4 space-y-4 overflow-y-auto no-scrollbar">
                                    <div className="text-center text-[10px] text-slate-400 font-medium my-2">Today 10:23 AM</div>

                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-slate-100">
                                        <p className="text-sm text-slate-700">Hi Alex! 👋 Check out our latest summer collection.</p>
                                    </div>

                                    {/* Carousel Container */}
                                    <div className="w-full overflow-hidden">
                                        <div
                                            className="flex transition-transform duration-500 ease-out gap-3"
                                            style={{ transform: `translateX(-${activeCard * 85}%)` }}
                                        >
                                            {carouselItems.map((card, index) => (
                                                <div key={index} className="min-w-[85%] bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex-shrink-0">
                                                    <div className="h-32 bg-slate-200 relative overflow-hidden">
                                                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
                                    </div>

                                    {/* Suggested Actions */}
                                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                                        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 shadow-sm hover:bg-slate-50">
                                            View Website
                                        </button>
                                        <button className="whitespace-nowrap px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 shadow-sm hover:bg-slate-50">
                                            Call Support
                                        </button>
                                    </div>

                                </div>

                                {/* Input Area */}
                                <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-brandBlue text-white flex items-center justify-center shadow-lg shadow-brandBlue/30">+</div>
                                    <div className="flex-1 h-9 rounded-full bg-slate-100 text-xs text-slate-400 flex items-center px-4">Chat with SureMsg...</div>
                                    <div className="w-8 h-8 rounded-full text-slate-400 flex items-center justify-center">🎤</div>
                                </div>
                                <div className="h-1 bg-black w-1/3 mx-auto rounded-full mb-2 opacity-20"></div>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
