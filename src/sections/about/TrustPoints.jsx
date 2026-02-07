import { motion } from "framer-motion";

const values = [
    {
        title: "Security First",
        desc: "We adhere to the highest security standards (ISO 27001, GDPR) to keep your data safe.",
        color: "bg-blue-500"
    },
    {
        title: "Built for Scale",
        desc: "Our infrastructure handles millions of messages per hour without breaking a sweat.",
        color: "bg-green-500"
    },
    {
        title: "Reliability",
        desc: "99.99% uptime SLA guarantees that your business critical messages always get delivered.",
        color: "bg-purple-500"
    },
    {
        title: "Customer Obsessed",
        desc: "Our support team is available 24/7 to help you optimize your messaging strategy.",
        color: "bg-orange-500"
    }
];

export default function WhySureMsg() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Why Leading Brands Choose Us
                    </h2>
                    <p className="text-slate-400 text-lg">
                        We don't just send messages. We deliver peace of mind.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className={`w-3 h-3 rounded-full ${item.color} mb-4`} />
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
