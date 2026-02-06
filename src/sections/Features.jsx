import { motion } from "framer-motion";

const features = [
    {
        title: "Branded Sender Identity",
        desc: "Display your business name, logo, and verified badge in every conversation to build trust and brand recognition.",
    },
    {
        title: "Rich Media Messaging",
        desc: "Send images, videos, carousels, and rich cards to deliver engaging and interactive customer experiences.",
    },
    {
        title: "Actionable Buttons",
        desc: "Drive instant actions with suggested replies and call-to-action buttons directly inside the message.",
    },
    {
        title: "Two-Way Conversations",
        desc: "Enable real-time, two-way messaging for support, sales, and customer engagement use cases.",
    },
    {
        title: "Campaign Analytics",
        desc: "Track delivery, reads, clicks, and user interactions with detailed campaign-level analytics.",
    },
    {
        title: "Seamless API Integration",
        desc: "Integrate RCS messaging into your existing systems using secure, developer-friendly APIs.",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="max-w-2xl mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                        Powerful Features Built for Modern Messaging
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        SureMsg provides everything businesses need to deliver rich,
                        interactive, and scalable RCS messaging experiences.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                            className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
