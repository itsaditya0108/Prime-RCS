import { motion } from "framer-motion";

const features = [
    "Verified sender identity",
    "Rich cards, images & buttons",
    "Two-way conversations",
    "Read receipts & analytics",
    "Enterprise-grade delivery"
];

export default function RCSService() {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandBlue/10 text-brandBlue text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-brandBlue animate-pulse" />
                            Flagship Product
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                            RCS Business Messaging
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Deliver rich, interactive messaging experiences directly inside
                            your customers’ default messaging app—without requiring any app
                            installation.
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
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual: Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-brandBlue/20 to-brandGreen/20 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col overflow-hidden">
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col relative">

                                {/* Fake Status Bar */}
                                <div className="h-8 bg-slate-50 flex items-center justify-between px-6 text-[10px] font-medium text-slate-500">
                                    <span>9:41</span>
                                    <span>5G</span>
                                </div>

                                {/* Header */}
                                <div className="bg-white border-b border-slate-100 p-3 flex items-center gap-3 z-10 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brandBlue to-brandGreen flex items-center justify-center text-white text-xs font-bold">
                                        S
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-slate-900 text-sm flex items-center gap-1">
                                            SureMsg
                                            <svg className="w-3 h-3 text-brandBlue fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Body */}
                                <div className="flex-1 bg-slate-50 p-4 space-y-4 overflow-hidden relative">
                                    {/* Brand Date */}
                                    <div className="text-center text-[10px] text-slate-400 font-medium">Today 9:41 AM</div>

                                    {/* Message 1 */}
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-slate-100">
                                        <p className="text-sm text-slate-700">Hi John! 👋 Your order #4923 has been shipped.</p>
                                    </div>

                                    {/* Rich Card */}
                                    <div className="bg-white rounded-2xl rounded-tl-none shadow-sm max-w-[85%] overflow-hidden border border-slate-100 group cursor-pointer hover:shadow-md transition-shadow">
                                        <div className="h-24 bg-gradient-to-r from-brandBlue to-brandGreen relative">
                                            <div className="absolute inset-0 bg-black/10" />
                                            <div className="absolute bottom-2 left-3 text-white font-bold">In Transit 🚚</div>
                                        </div>
                                        <div className="p-3">
                                            <h4 className="font-bold text-slate-900 text-sm mb-1">Estimated Delivery</h4>
                                            <p className="text-xs text-slate-500 mb-2">Arriving by Friday, Feb 10th directly to your doorstep.</p>
                                            <button className="w-full py-2 rounded-lg bg-slate-100 text-brandBlue text-xs font-bold hover:bg-slate-200 transition">Track Package</button>
                                        </div>
                                    </div>

                                    {/* User Reply */}
                                    <div className="bg-brandBlue text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] ml-auto text-sm">
                                        Awesome, thanks! Can't wait.
                                    </div>

                                </div>

                                {/* Footer Input */}
                                <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">+</div>
                                    <div className="flex-1 h-8 rounded-full bg-slate-100 text-xs text-slate-400 flex items-center px-3">Type a message...</div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
