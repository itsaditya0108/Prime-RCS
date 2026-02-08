import { motion } from "framer-motion";
import brandLogo from "../../assets/logo.png";

const features = [
    "Reach 2B+ users globally",
    "Automate support with bots",
    "Send rich media & catalogs",
    "Real-time delivery status",
    "Official Business API integration"
];

export default function WhatsAppService() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Most Popular
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                            WhatsApp Business API
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Connect with customers on their favorite messaging app.
                            Scale your support, sales, and marketing with the official WhatsApp Business API.
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-emerald-500/20 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col overflow-hidden">
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#E5DDD5] flex flex-col relative">

                                {/* Fake Status Bar */}
                                <div className="h-8 bg-[#075E54] flex items-center justify-between px-6 text-[10px] font-medium text-white/80">
                                    <span>9:41</span>
                                    <span>5G</span>
                                </div>

                                {/* Header */}
                                <div className="bg-[#075E54] p-3 flex items-center gap-3 z-10 shadow-sm text-white sticky top-0">
                                    <img src={brandLogo} alt="SureMsg Logo" className="w-8 h-8 rounded-full object-contain p-0.5 bg-white shadow-sm" />
                                    <div className="flex-1">
                                        <div className="font-display font-bold text-sm flex items-center gap-1.5 tracking-tight">
                                            SureMsg Support
                                            <svg className="w-4 h-4 text-white fill-current shadow-sm" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        </div>
                                        <p className="text-[10px] text-white/80 font-medium tracking-wide">Official Business Account</p>
                                    </div>
                                </div>

                                {/* Chat Body */}
                                {/* Chat Body */}
                                <div className="flex-1 p-4 space-y-4 overflow-hidden relative bg-[#E5DDD5]">
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096d274ad3e07.png')] bg-repeat" />

                                    {/* Message 1: User */}
                                    <div className="flex justify-end z-10 relative">
                                        <div className="bg-[#DCF8C6] p-2 px-3 rounded-lg shadow-sm max-w-[85%] rounded-tr-none">
                                            <p className="text-sm text-slate-800">Hi! I'd like to book a demo for the new CRM integration.</p>
                                            <div className="flex items-center justify-end gap-1 mt-1">
                                                <span className="text-[10px] text-slate-500">10:30 AM</span>
                                                <svg className="w-3 h-3 text-blue-500" viewBox="0 0 16 11" fill="none"><path d="M10.95 0.700012L5.85002 5.80001L3.90002 3.85001L2.50002 5.25001L5.85002 8.60001L12.35 2.10001L10.95 0.700012Z" fill="currentColor" /><path d="M15.05 0.700012L9.95002 5.80001L9.20002 5.05001L8.50002 5.75001L9.95002 7.20001L16.45 2.10001L15.05 0.700012Z" fill="currentColor" /><path d="M1.4 5.25L4.75 8.6L3.35 10L0 6.65L1.4 5.25Z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message 2: Business */}
                                    <div className="flex justify-start z-10 relative">
                                        <div className="bg-white p-2 px-3 rounded-lg shadow-sm max-w-[85%] rounded-tl-none border border-slate-100">
                                            <p className="text-sm text-slate-800">Great! We have these slots available for you:</p>
                                            <span className="text-[10px] text-slate-400 block text-right mt-1">10:30 AM</span>
                                        </div>
                                    </div>

                                    {/* Interactive Buttons */}
                                    <div className="z-10 relative pl-2 space-y-2 max-w-[85%]">
                                        <button className="w-full bg-white hover:bg-slate-50 py-2.5 px-4 rounded-lg shadow-sm text-brandBlue text-sm font-semibold border border-slate-200 transition-colors flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            Monday, 10:00 AM
                                        </button>
                                        <button className="w-full bg-white hover:bg-slate-50 py-2.5 px-4 rounded-lg shadow-sm text-brandBlue text-sm font-semibold border border-slate-200 transition-colors flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            Tuesday, 2:00 PM
                                        </button>
                                    </div>

                                </div>

                                {/* Footer Input */}
                                <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full text-slate-400 flex items-center justify-center">+</div>
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
