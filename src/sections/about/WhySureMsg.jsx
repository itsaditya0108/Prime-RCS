import { motion } from "framer-motion";

const stats = [
    { label: "Messages Sent", value: "2B+" },
    { label: "Enterprise Clients", value: "500+" },
    { label: "Uptime Guaranteed", value: "99.99%" },
    { label: "Global Reach", value: "190+" }
];

export default function TrustPoints() {
    return (
        <section className="py-20 bg-brandBlue text-white relative overflow-hidden">

            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-brandBlue-100 font-medium text-sm tracking-wider uppercase">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
