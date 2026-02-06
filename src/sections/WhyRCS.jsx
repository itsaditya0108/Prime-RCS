import { motion } from "framer-motion";

const reasons = [
    {
        title: "Verified Business Messaging",
        desc: "RCS messages are sent from verified business profiles, building instant trust and reducing fraud compared to traditional SMS.",
    },
    {
        title: "Rich & Interactive Content",
        desc: "Go beyond plain text with images, carousels, buttons, and suggested replies directly inside the messaging app.",
    },
    {
        title: "Higher Customer Engagement",
        desc: "Interactive messages drive significantly higher open rates, CTRs, and conversions than standard SMS campaigns.",
    },
    {
        title: "Real-Time Conversations",
        desc: "Enable two-way messaging with read receipts, typing indicators, and instant responses — just like modern chat apps.",
    },
];

export default function WhyRCS() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="max-w-2xl mb-16"
                >
                    <span className="badge-brand mb-4">
                        Why RCS Messaging
                    </span>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                        A Better Alternative to Traditional SMS
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Rich Communication Services (RCS) brings app-like experiences directly
                        into the native messaging app — without requiring customers to install
                        anything.
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                            className="rounded-2xl border border-gray-200 p-6 hover:border-brandBlue transition"
                        >
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
