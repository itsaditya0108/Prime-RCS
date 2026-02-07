import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "What is RCS messaging?",
        a: "RCS (Rich Communication Services) is an advanced messaging protocol that allows businesses to send rich, interactive messages with images, buttons, and verified branding directly to users’ default messaging apps.",
    },
    {
        q: "How is RCS different from SMS?",
        a: "Unlike SMS, RCS supports rich media, read receipts, suggested replies, and verified sender profiles—making messages more engaging and trustworthy.",
    },
    {
        q: "Do users need to install any app to receive RCS messages?",
        a: "No. RCS messages are delivered directly to the user’s default messaging app on supported Android devices.",
    },
    {
        q: "Is RCS messaging secure?",
        a: "Yes. RCS uses secure delivery channels and verified business profiles, reducing the risk of spam and fraud compared to traditional SMS.",
    },
    {
        q: "Can RCS be integrated with existing systems?",
        a: "Absolutely. SureMsg provides developer-friendly APIs that integrate seamlessly with CRMs, marketing platforms, and backend systems.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 bg-white relative overflow-hidden">

            {/* Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandBlue/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wide uppercase mb-4">
                        Got Questions?
                    </span>
                    <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Everything you need to know about modernizing your business messaging.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = active === index;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{ backgroundColor: isOpen ? "rgba(241, 245, 249, 0.5)" : "rgba(255, 255, 255, 0)" }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-brandBlue/20 ring-4 ring-brandBlue/5 shadow-sm" : "border-slate-100 hover:border-slate-200"}`}
                            >
                                <button
                                    onClick={() => setActive(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left"
                                >
                                    <span className={`font-bold text-lg transition-colors ${isOpen ? "text-slate-900" : "text-slate-700"}`}>
                                        {item.q}
                                    </span>
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-brandBlue text-white border-transparent rotate-45" : "bg-white text-slate-400 border-slate-200"}`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-8 pb-8 pt-0 text-slate-600 leading-relaxed">
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
