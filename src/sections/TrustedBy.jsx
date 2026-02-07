import { motion } from "framer-motion";

// Placeholder logos - in production these would be SVGs
const logos = Array(10).fill(null).map((_, i) => ({
    id: i,
    name: `Company ${i + 1}`,
}));

export default function TrustedBy() {
    return (
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Trusted by forward-thinking companies
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-16 items-center flex-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {/* Double the logos to create seamless loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className="flex items-center justify-center min-w-[120px] opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer"
                        >
                            <span className="text-xl font-bold font-display text-slate-800 flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-slate-800" />
                                LOGO
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
