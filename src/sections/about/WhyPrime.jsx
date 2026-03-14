import { motion } from "framer-motion";

const values = [
    {
        title: "Security by Default",
        desc: "Enterprise-grade encryption and compliance (GDPR, ISO 27001) are baked into every layer.",
        accent: "bg-rcs-cyan"
    },
    {
        title: "Global Scale",
        desc: "Distributed infrastructure powered by edge nodes for sub-second latency and zero failures.",
        accent: "bg-rcs-blue"
    },
    {
        title: "Verified Trust",
        desc: "We exclusively offer verified business messaging, ensuring zero spam and 100% brand safety.",
        accent: "bg-vibrant-purple"
    },
    {
        title: "Future Proof",
        desc: "Always ahead of the curve, from rich carousels to AI-driven suggested interactions.",
        accent: "bg-pink-500"
    }
];

export default function WhyPrime() {
    return (
        <section className="py-32 bg-navy-950 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-6">
                        The Advantage
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-tight">
                        Why the world's <br />
                        <span className="text-gradient">best brands choose Prime.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card !p-8 group"
                        >
                            <div className={`w-10 h-1.5 rounded-full ${item.accent} mb-8 transition-all duration-500 group-hover:w-full`} />
                            <h3 className="font-extrabold text-2xl mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
