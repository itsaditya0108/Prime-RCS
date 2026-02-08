import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
    {
        title: "WhatsApp Business",
        desc: "Reach 2B+ users on their favorite app. Automate support, send notifications, and drive sales with the official API.",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.513 1.933.783 2.8.783l.005-.001c3.181 0 5.767-2.586 5.767-5.766.001-3.18-2.585-5.766-5.766-5.77zM17.598 2.43c-3.26-3.26-8.543-3.258-11.802.001C4.159 4.066 3.288 6.225 3.288 8.441c0 1.096.223 2.147.66 3.102L2.43 18.572l7.155-1.875c.91.493 1.928.749 2.955.749h.005c4.615 0 8.358-3.744 8.358-8.36 0-2.232-.87-4.327-2.448-5.903z" /></svg>
        ),
        color: "bg-[#25D366]"
    },
    {
        title: "Enterprise SMS",
        desc: "The most reliable failover channel. Ensure delivery for OTPs, alerts, and critical notifications worldwide.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        ),
        color: "bg-blue-500"
    },

    {
        title: "Unified API",
        desc: "One API for all channels. Switch between RCS, WhatsApp, and SMS intelligently based on user connectivity.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        ),
        color: "bg-purple-600"
    },
];

export default function OtherServices() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 lg:sticky lg:top-32"
                    >
                        <span className="text-brandBlue font-bold tracking-wider uppercase text-xs mb-3 block">
                            Omnichannel Platform
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                            Beyond RCS: <br />
                            <span className="text-slate-400">Complete Connectivity.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Don't limit your reach. SureMsg unifies every major communication channel into a single, intelligent platform.
                        </p>
                        <Link to="/services" className="text-brandBlue font-semibold hover:text-brandBlue/80 inline-flex items-center gap-2 group">
                            Explore all channels
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </motion.div>

                    {/* Grid */}
                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-brandBlue/30 hover:shadow-xl hover:shadow-brandBlue/5 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 ${service.color} opacity-5 rounded-bl-[100px] group-hover:scale-150 transition-transform duration-500`} />

                                <div className={`w-12 h-12 rounded-xl ${service.color} bg-opacity-10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                    {/* Hack to use the text color corresponding to the bg color class */}
                                    <div className={`absolute inset-0 opacity-20 `} />
                                    <span className={`${service.color.replace('bg-', 'text-')} opacity-100 brightness-75`}>
                                        {service.icon}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brandBlue transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
