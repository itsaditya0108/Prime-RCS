import { motion } from "framer-motion";

export default function TrustedBy() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-center text-sm font-medium tracking-wide text-gray-500 mb-10"
                >
                    Trusted by growing businesses & enterprises
                </motion.p>

                {/* Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center"
                >
                    <LogoPlaceholder />
                    <LogoPlaceholder />
                    <LogoPlaceholder />
                    <LogoPlaceholder />
                    <LogoPlaceholder />
                </motion.div>

            </div>
        </section>
    );
}

function LogoPlaceholder() {
    return (
        <div className="h-10 flex items-center justify-center opacity-60 grayscale">
            <div className="h-6 w-28 bg-gray-200 rounded" />
        </div>
    );
}
