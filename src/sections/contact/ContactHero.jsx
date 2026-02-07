import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            {/* Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandBlue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-brandGreen/10 text-brandGreen text-xs font-bold tracking-wide uppercase mb-6">
                        Contact Us
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                        Let’s start a <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen">
                            conversation.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        Ready to transform your business messaging? Our team is here to help you find the perfect solution.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
