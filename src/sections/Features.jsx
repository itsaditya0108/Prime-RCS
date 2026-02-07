import { motion } from "framer-motion";
import { useState } from "react";

const FeatureCard = ({ title, desc, icon, className, delay }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${className}`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br from-brandBlue/5 to-brandGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition-colors duration-300 shadow-inner">
                    {icon}
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brandBlue transition-colors">
                    {title}
                </h3>

                <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                    {desc}
                </p>
            </div>

            {/* Decor elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-brandBlue/10 to-brandGreen/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
        </motion.div>
    );
};

export default function Features() {
    return (
        <section className="py-24 bg-slate-50/50 relative overflow-hidden">
            {/* Background noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-brandBlue/10 text-brandBlue text-xs font-bold tracking-wide uppercase mb-4">
                        Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                        Everything you need to <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen">
                            message confidentially.
                        </span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        SureMsg combines the reach of SMS with the engagement of apps.
                        Launch campaigns that actually get read and clicked.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

                    {/* Large Featured Card */}
                    <FeatureCard
                        title="Branded Sender Identity"
                        desc="Stand out in the inbox with your logo, business name, and a verified checkmark. Build immediate trust before they even open the message."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        className="md:col-span-2 md:row-span-1 bg-white/50 backdrop-blur-sm"
                        delay={0.1}
                    />

                    <FeatureCard
                        title="Rich Media Support"
                        desc="Send high-res images, videos, and carousels without compression artifacts."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                        delay={0.2}
                    />

                    <FeatureCard
                        title="Interactive Buttons"
                        desc="Guide customers with Suggested Replies and Action Buttons."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>}
                        delay={0.3}
                    />

                    <FeatureCard
                        title="Suggested Actions"
                        desc="Deep link to apps, open maps, or dial numbers seamlessly."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        className=""
                        delay={0.4}
                    />

                    <FeatureCard
                        title="Real-time Analytics"
                        desc="Track everything from delivery rates to button clicks in real-time. Optimize your campaigns with data-driven insights."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>}
                        className=""
                        delay={0.5}
                    />

                </div>
            </div>
        </section>
    );
}
