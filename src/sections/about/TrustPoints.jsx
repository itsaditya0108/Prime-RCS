import { motion } from "framer-motion";

const stats = [
    { label: "Messages Delivered", value: "5B+" },
    { label: "Global Clients", value: "1,200+" },
    { label: "Network Uptime", value: "99.99%" },
    { label: "Active Regions", value: "220+" }
];

export default function TrustPoints() {
    return (
        <section className="py-20 bg-rcs-blue relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vibrant-purple/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="px-4"
                        >
                            <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-white/60 font-extrabold text-[10px] tracking-[0.25em] uppercase">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
