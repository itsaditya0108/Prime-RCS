import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-brandBlue to-brandGreen">
            <div className="max-w-5xl mx-auto px-6 text-center text-white">

                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
                >
                    Ready to Experience Modern Business Messaging?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    className="text-white/90 text-lg leading-relaxed mb-10"
                >
                    Get started with SureMsg and deliver rich, interactive, and verified
                    RCS messages that engage customers and drive results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                    className="flex justify-center gap-4 flex-wrap"
                >
                    <a
                        href="/contact"
                        className="bg-white text-brandBlue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Request a Demo
                    </a>

                    <a
                        href="/services"
                        className="border border-white/70 px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition"
                    >
                        View Services
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
