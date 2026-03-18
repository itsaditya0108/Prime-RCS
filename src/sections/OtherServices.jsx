import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
    {
        title: "WhatsApp Business",
        desc: "Reach 2B+ users on their preferred platform. Automate support and drive conversational commerce with the official API.",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.513 1.933.783 2.8.783l.005-.001c3.181 0 5.767-2.586 5.767-5.766.001-3.18-2.585-5.766-5.766-5.77zM17.598 2.43c-3.26-3.26-8.543-3.258-11.802.001C4.159 4.066 3.288 6.225 3.288 8.441c0 1.096.223 2.147.66 3.102L2.43 18.572l7.155-1.875c.91.493 1.928.749 2.955.749h.005c4.615 0 8.358-3.744 8.358-8.36 0-2.232-.87-4.327-2.448-5.903z" /></svg>
        ),
        color: "text-[#25D366]",
        bg: "bg-[#25D366]/10"
    },
    {
        title: "Enterprise SMS",
        desc: "Global mission-critical delivery. The ultimate failover for OTPs and urgent notifications with 99.9% uptime.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        ),
        color: "text-rcs-blue",
        bg: "bg-rcs-blue/10"
    },
    {
        title: "Unified Hub",
        desc: "One API, infinite possibilities. Seamlessly switch between RCS, WhatsApp, and SMS with intelligent routing.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        ),
        color: "text-vibrant-purple",
        bg: "bg-vibrant-purple/10"
    },
];

export default function OtherServices() {
    return (
        <section className="py-20 lg:py-32 bg-navy-900 border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 lg:sticky lg:top-40"
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-rcs-cyan text-[11px] font-black tracking-[0.25em] uppercase mb-6 font-heading shadow-inner backdrop-blur-md">
                            Omnichannel Power
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-[1] font-heading">
                            Beyond RCS. <br />
                            <span className="text-slate-500 text-glow-sm">Unmatched Reach.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-semibold leading-relaxed mb-12 opacity-90 max-w-sm">
                            Don't isolate your audience. PrimeRCS unifies every major channel 
                            into a single, high-performance platform.
                        </p>
                        <Link to="/services" className="btn-primary !px-8 !py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest inline-flex items-center gap-3 active:scale-95 transition-all shadow-xl shadow-rcs-blue/10">
                            Explore Ecosystem
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </motion.div>

                    {/* Grid */}
                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="group glass-card p-10 hover:border-white/20 transition-all duration-500 relative overflow-hidden flex flex-col min-h-[360px] justify-between border border-white/5 shadow-2xl"
                            >
                                <div className={`absolute -top-10 -right-10 w-48 h-48 ${service.bg} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-700 blur-[80px]`} />

                                <div className={`w-16 h-16 rounded-[1.5rem] ${service.bg} flex items-center justify-center ${service.color} mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-md`}>
                                    {service.icon}
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-rcs-cyan transition-colors tracking-tight font-heading">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-400 font-semibold leading-relaxed group-hover:text-slate-200 transition-colors opacity-80 group-hover:opacity-100">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
