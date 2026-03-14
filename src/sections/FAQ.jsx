import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "What is PrimeRCS?",
        a: "PrimeRCS is an enterprise-grade Rich Communication Services platform that enables businesses to send verified, branded, and interactive mobile messages with 80% higher engagement than SMS.",
    },
    {
        q: "How does it improve trust?",
        a: "Every message sent via PrimeRCS features your official brand logo, name, and a verified checkmark, instantly assuring customers of the sender's authenticity.",
    },
    {
        q: "Do I need a special app?",
        a: "No. RCS messages are delivered natively to the default messaging app on supported Android and iOS devices, requiring no additional downloads from your customers.",
    },
    {
        q: "Is it secure for business?",
        a: "Yes. PrimeRCS utilizes industrial-strength encryption and secure delivery channels, significantly reducing the risks of phishing and fraud associated with legacy SMS.",
    },
    {
        q: "Can I integrate with my CRM?",
        a: "Absolutely. PrimeRCS offers robust, modern APIs and webhooks that integrate seamlessly with your existing tech stack, including CRMs and marketing automation tools.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-20 lg:py-32 bg-navy-900 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rcs-blue/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-rcs-cyan text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase mb-6">
                        Expert Knowledge
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Common <span className="text-rcs-blue">Questions</span>
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg font-medium">
                        Everything you need to know about the Prime messaging transition.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((item, index) => {
                        const isOpen = active === index;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen ? "glass-card border-rcs-blue/20 shadow-2xl shadow-rcs-blue/5" : "bg-white/5 border-white/5 hover:border-white/10"}`}
                            >
                                <button
                                    onClick={() => setActive(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-4 px-6 sm:px-10 py-6 sm:py-8 text-left"
                                >
                                    <span className={`font-black text-lg sm:text-xl tracking-tight transition-colors ${isOpen ? "text-white" : "text-slate-300"}`}>
                                        {item.q}
                                    </span>
                                    <span className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-all duration-500 transform ${isOpen ? "bg-rcs-blue text-white border-transparent rotate-45" : "bg-white/5 text-slate-500 border-white/10"}`}>
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M12 4v16m8-8H4" /></svg>
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                        >
                                            <div className="px-6 sm:px-10 pb-6 sm:pb-8 pt-0 text-slate-400 font-medium leading-relaxed text-sm sm:text-base md:text-lg">
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
