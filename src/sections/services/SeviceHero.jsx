import { motion } from "framer-motion";

export default function ServicesHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-950">
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-rcs-blue/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-vibrant-purple/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-rcs-cyan text-[10px] font-black tracking-[0.25em] uppercase mb-8 backdrop-blur-md shadow-inner font-heading"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-rcs-cyan animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                        Our Solutions
                    </motion.div>

                    <motion.h1 
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] font-heading"
                    >
                        Messaging systems <br className="hidden md:block" />
                        <span className="text-gradient text-glow-lg py-2">built for scale.</span>
                    </motion.h1>

                    <motion.p 
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-semibold opacity-90"
                    >
                        From verified RCS business messaging to global SMS termination.
                        One technical ecosystem for all your customer engagement.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
