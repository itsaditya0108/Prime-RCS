import { motion } from "framer-motion";

const services = [
    {
        title: "WhatsApp Business Messaging",
        desc: "Reach customers on WhatsApp with rich, interactive, and automated conversations using official business APIs.",
    },
    {
        title: "SMS & OTP Services",
        desc: "Reliable transactional and promotional SMS with fast delivery, high throughput, and global coverage.",
    },
    {
        title: "Email Messaging",
        desc: "Engage users with personalized, automated email campaigns integrated into your communication stack.",
    },
    {
        title: "Messaging APIs",
        desc: "Developer-friendly APIs to unify RCS, WhatsApp, SMS, and email messaging under one platform.",
    },
];

export default function OtherServices() {
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
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                        More Messaging Channels, One Platform
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Beyond RCS, SureMsg supports multiple communication channels to help
                        you reach customers wherever they are.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                            className="relative rounded-2xl border border-gray-200 p-6 hover:shadow-md transition"
                        >
                            {/* Gradient Accent */}
                            <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-brandBlue to-brandGreen" />

                            <h3 className="text-lg font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
