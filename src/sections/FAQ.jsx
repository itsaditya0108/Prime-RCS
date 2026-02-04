import { useState } from "react";

const faqs = [
    {
        q: "What is RCS Business Messaging?",
        a: "RCS (Rich Communication Services) is the next generation of SMS that allows businesses to send rich, interactive, and branded messages with images, buttons, and read receipts.",
    },
    {
        q: "Which devices support RCS?",
        a: "RCS is supported on most Android devices with compatible carriers. When RCS is unavailable, messages can automatically fall back to SMS.",
    },
    {
        q: "Can RCS replace SMS completely?",
        a: "RCS enhances traditional SMS by offering richer experiences. SMS fallback ensures message delivery even on unsupported devices.",
    },
    {
        q: "Is RCS secure for business communication?",
        a: "Yes. RCS supports verified business profiles and secure message delivery through trusted carrier networks.",
    },
    {
        q: "How do I get started with SureMsg?",
        a: "You can request a demo or contact our team to discuss your use case and get onboarded quickly.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about RCS and SureMsg.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex justify-between items-center px-6 py-5 text-left"
                            >
                                <span className="font-semibold text-gray-800">
                                    {item.q}
                                </span>
                                <span className="text-gray-400 text-xl">
                                    {open === i ? "−" : "+"}
                                </span>
                            </button>

                            {open === i && (
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
