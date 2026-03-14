 import { motion } from "framer-motion";

const features = [
    "High inbox placement rates",
    "Drag-and-drop template builder",
    "A/B testing & analytics",
    "Automated drip campaigns",
    "Scalable sending infrastructure"
];

export default function EmailService() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            Marketing & Transcation
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                            Email Marketing
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Create beautiful, responsive emails that drive engagement.
                            From transactional receipts to marketing newsletters, we handle it all.
                        </p>

                        <ul className="space-y-4">
                            {features.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-3 text-slate-700 font-medium group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual: Email Client Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-red-500/20 blur-[80px] rounded-full pointer-events-none" />

                        {/* Laptop/Screen Frame */}
                        <div className="relative mx-auto bg-slate-900 rounded-xl p-2 shadow-2xl w-full max-w-md aspect-[4/3] flex flex-col">

                            {/* Window content */}
                            <div className="bg-white rounded-lg flex-1 flex flex-col overflow-hidden relative">
                                {/* Header */}
                                <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-white px-8 py-1 rounded text-[10px] text-slate-400 shadow-sm border border-slate-100 w-1/2 text-center">Inbox - SureMsg Mail</div>
                                    </div>
                                </div>

                                {/* Email Body */}
                                <div className="flex-1 p-6 bg-slate-50 flex flex-col items-center justify-center">

                                    <div className="w-full bg-white shadow-sm border border-slate-100 rounded-lg overflow-hidden">
                                        <div className="h-24 bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                                            <h3 className="text-white text-xl font-bold">SALE STARTS NOW!</h3>
                                        </div>
                                        <div className="p-6 text-center">
                                            <h4 className="font-bold text-slate-800 text-lg mb-2">Exclusive Early Access</h4>
                                            <p className="text-sm text-slate-500 mb-4">
                                                Get 50% off all messaging plans for the next 24 hours. Don't miss out on this limited time offer.
                                            </p>
                                            <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition">
                                                Shop Now
                                            </button>
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
