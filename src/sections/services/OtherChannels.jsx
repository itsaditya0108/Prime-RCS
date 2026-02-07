import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const channels = [
    {
        title: "WhatsApp Business",
        desc: "Reach 2.5B+ users on the world's most popular messaging app. Automate support and sales with the official API.",
        color: "bg-[#25D366]",
        icon: (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.513 1.933.783 2.8.783l.005-.001c3.181 0 5.767-2.586 5.767-5.766.001-3.18-2.585-5.766-5.766-5.77zM17.598 2.43c-3.26-3.26-8.543-3.258-11.802.001C4.159 4.066 3.288 6.225 3.288 8.441c0 1.096.223 2.147.66 3.102L2.43 18.572l7.155-1.875c.91.493 1.928.749 2.955.749h.005c4.615 0 8.358-3.744 8.358-8.36 0-2.232-.87-4.327-2.448-5.903z" /></svg>
        )
    },
    {
        title: "SMS & OTP",
        desc: "High-speed SMS delivery for transactional alerts, 2FA, and marketing campaigns with global reach.",
        color: "bg-blue-500",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )
    },
    {
        title: "Email Marketing",
        desc: "Design responsive email templates and automate campaigns with high inbox placement rates.",
        color: "bg-orange-500",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        )
    }
];

export default function OtherChannels() {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        A Complete Omnichannel Suite
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Engage your customers on every channel they use, all from a single unified platform.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {channels.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.color} shadow-lg shadow-${item.color.replace('bg-', '')}/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>

                            <h3 className="font-bold text-xl text-slate-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {item.desc}
                            </p>

                            <Link to="/services" className="inline-flex items-center text-brandBlue font-semibold text-sm hover:underline">
                                Learn more <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
