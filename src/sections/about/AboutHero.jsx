import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-950">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-rcs-blue/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-vibrant-purple/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-rcs-cyan text-[10px] font-extrabold tracking-[0.25em] uppercase mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-rcs-cyan animate-pulse" />
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-[0.9]">
                        Reimagining <br />
                        <span className="text-gradient text-glow-lg">
                            Communication.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                        PrimeRCS is on a mission to modernize how brands connect. 
                        We build messaging that is rich, verified, and secure by default.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
