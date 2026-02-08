import { motion } from "framer-motion";
import brandLogo from "../../assets/logo.png";

const features = [
    "Global delivery & high throughput",
    "Transactional alerts & OTPs",
    "Carrier-grade reliability (99.99% uptime)",
    "Automatic failover from data channels",
    "Compliance management built-in"
];

export default function SMSService() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Reliable & Fast
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                            Enterprise SMS
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            The backbone of business communication. Ensure critical notifications
                            reach your customers instantly, anywhere in the world.
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
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col overflow-hidden">
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col relative">

                                {/* Fake Status Bar */}
                                <div className="h-8 bg-white flex items-center justify-between px-6 text-[10px] font-medium text-slate-900">
                                    <span>9:41</span>
                                    <span>LTE</span>
                                </div>

                                {/* Header */}
                                <div className="bg-white/90 backdrop-blur-md border-b border-slate-200 p-3 flex flex-col items-center justify-center z-10 relative shadow-sm">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mb-1 ring-1 ring-slate-100">
                                        <img src={brandLogo} alt="SureMsg" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-xs font-semibold text-slate-900 flex items-center gap-1">
                                        SureMsg
                                        <svg className="w-3 h-3 text-brandBlue fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                                    </div>
                                    <div className="text-[10px] text-slate-400">093850 93485</div>
                                </div>

                                {/* Chat Body */}
                                <div className="flex-1 bg-white p-4 space-y-6 overflow-hidden relative">
                                    <div className="text-center text-[10px] text-slate-400 font-medium">Text Message<br />Today 9:41 AM</div>

                                    {/* OTP Message */}
                                    <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-sm max-w-[90%] float-left clear-both group">
                                        <p className="text-sm text-slate-800 leading-relaxed">
                                            <span className="font-semibold text-slate-900">SureMsg:</span> Your verification code is <strong className="text-brandBlue text-lg tracking-widest">829402</strong>.
                                        </p>
                                        <p className="text-xs text-slate-500 mt-2">Expires in 10 minutes. Do not share this code.</p>
                                    </div>

                                    {/* Action Message */}
                                    <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-sm max-w-[90%] float-left clear-both mt-4">
                                        <p className="text-sm text-slate-800">
                                            Your appointment is confirmed for <span className="font-semibold">Fri, Oct 24 at 2:00 PM</span>.
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">Reply 'C' to confirm or 'R' to reschedule.</p>
                                    </div>

                                    {/* User Reply */}
                                    <div className="bg-brandBlue text-white p-3 px-4 rounded-2xl rounded-tr-sm max-w-[80%] float-right clear-both mt-4 shadow-sm shadow-brandBlue/30">
                                        <p className="text-sm">C</p>
                                    </div>
                                </div>

                                {/* Footer Input */}
                                <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div className="flex-1 h-9 rounded-full border border-slate-300 text-xs text-slate-400 flex items-center px-4">
                                        Text Message
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
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
