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
    const [active, setActive] = useState(null);

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className={`mb-16 "text-center mx-auto" max-w-3xl`}>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about RCS and SureMsg.
                    </p>
                </div>


                {/* FAQ Items */}
                <div className="space-y-5">
                    {faqs.map((item, index) => {
                        const isOpen = active === index;

                        return (
                            <div
                                key={index}
                                className={`relative rounded-2xl bg-white border transition-all
                  ${isOpen
                                        ? "border-transparent shadow-lg"
                                        : "border-gray-200 hover:border-brandBlue/40"
                                    }`}
                            >
                                {/* Gradient Accent */}
                                <div
                                    className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-brandBlue to-brandGreen transition-opacity
                    ${isOpen ? "opacity-100" : "opacity-40"}
                  `}
                                />

                                {/* Question */}
                                <button
                                    onClick={() => setActive(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className="font-semibold text-gray-900">
                                        {item.q}
                                    </span>

                                    <span
                                        className={`text-xl transition-transform
                      ${isOpen ? "rotate-45 text-brandBlue" : "text-gray-400"}
                    `}
                                    >
                                        +
                                    </span>
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
