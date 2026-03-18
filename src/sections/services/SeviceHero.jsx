import { motion } from "framer-motion";
import brandLogo from "../../assets/logo.png";

export default function ServicesHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-aurora">
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-rcs-blue/15 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-vibrant-purple/15 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Content */}
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
                            className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1] font-heading"
                        >
                            Messaging systems <br className="hidden md:block" />
                            <span className="text-gradient text-glow-lg py-2">built for scale.</span>
                        </motion.h1>

                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-semibold opacity-90 mb-10"
                        >
                            From verified RCS business messaging to global SMS termination.
                            One technical ecosystem for all your customer engagement.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            <button className="btn-primary">Explore API Docs</button>
                        </motion.div>
                    </motion.div>

                    {/* Right: Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:flex justify-end relative"
                    >
                        <div className="w-[300px] relative group animate-float">
                            {/* Ambient glow */}
                            <div className="absolute -inset-16 bg-rcs-blue/20 blur-[90px] opacity-60" />

                            {/* Phone body */}
                            <div className="relative bg-[#0F1115] rounded-[3rem] p-[8px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] border border-white/10">
                                <div className="relative rounded-[2.5rem] overflow-hidden bg-navy-950 aspect-[9/19.5]">
                                    {/* Glass reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-30" />
                                    
                                    {/* Header */}
                                    <div className="bg-navy-900 pt-10 pb-4 px-4 flex items-center gap-3 border-b border-white/5">
                                        <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
                                            <img src={brandLogo} className="w-5 h-5 logo-invert" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-white flex gap-1">PrimeRCS <span className="text-rcs-blue">✔</span></div>
                                            <div className="text-[8px] text-rcs-cyan font-semibold uppercase tracking-wider">Multi-Channel API</div>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-4 space-y-4">
                                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                             <div className="h-2 w-16 bg-rcs-blue/40 rounded-full mb-3" />
                                             <div className="space-y-2">
                                                 <div className="h-1.5 w-full bg-white/10 rounded-full" />
                                                 <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                                             </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="aspect-square bg-gradient-to-br from-rcs-blue/20 to-vibrant-purple/20 rounded-xl border border-white/10 flex items-center justify-center">
                                                <div className="w-6 h-6 bg-white/10 rounded-lg" />
                                            </div>
                                            <div className="aspect-square bg-gradient-to-tr from-rcs-cyan/20 to-rcs-blue/20 rounded-xl border border-white/10 flex items-center justify-center">
                                                <div className="w-6 h-6 bg-white/10 rounded-lg" />
                                            </div>
                                        </div>

                                        <div className="bg-rcs-blue/10 border border-rcs-blue/20 p-3 rounded-xl">
                                            <div className="h-1.5 w-20 bg-rcs-blue/40 rounded-full mb-2" />
                                            <div className="h-8 w-full bg-rcs-blue/20 rounded-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
