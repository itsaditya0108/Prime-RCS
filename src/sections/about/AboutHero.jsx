import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandBlue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-brandBlue/10 text-brandBlue text-xs font-bold tracking-wide uppercase mb-6">
                        About Us
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                        We’re reimagining <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen">
                            business communication.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        SureMsg is on a mission to modernise how businesses connect with customers.
                        We believe in messaging that is rich, verified, and secure by default.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
