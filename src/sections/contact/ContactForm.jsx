import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../../utils/emailService";
import { Link } from "react-router-dom";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        terms: false
    });
    const [status, setStatus] = useState("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const serviceLabels = {
            rcs: "RCS Business Messaging",
            whatsapp: "WhatsApp Business API",
            sms: "Enterprise SMS",
            other: "Other / General Inquiry"
        };

        const payload = {
            ...formData,
            service: serviceLabels[formData.service] || formData.service
        };

        try {
            const result = await sendEmail(payload);
            setStatusMessage(result.message);

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", service: "", message: "", terms: false });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setStatusMessage("Mission failed. Please try again.");
        }
    };

    return (
        <section className="pb-32 bg-navy-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24">

                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
                            Global Operations
                        </h2>
                        <p className="text-xl text-slate-400 mb-16 leading-relaxed font-medium">
                            Whether you're looking for high-volume SMS termination or 
                            next-gen RCS interactive flows, our engineers are standing by.
                        </p>

                        <div className="space-y-10">
                            {[
                                {
                                    title: "Expert Consultation",
                                    info: "info@primercs.in",
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                                    color: "text-rcs-blue"
                                },
                                {
                                    title: "Developer Support",
                                    info: "dev@primercs.in",
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
                                    color: "text-rcs-cyan"
                                },
                                {
                                    title: "Mission Control",
                                    info: "No. 42, Shanthi Road, Bengaluru, Karnataka 560027",
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                                    color: "text-vibrant-purple"
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-6 group">
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 ${item.color} flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-white text-lg mb-1 tracking-tight">{item.title}</h3>
                                        <p className="text-slate-400 font-medium leading-relaxed">{item.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card !p-1 shadow-2xl-glow"
                    >
                        <div className="bg-navy-900 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Identity</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-rcs-blue focus:ring-1 focus:ring-rcs-blue transition-all outline-none font-medium placeholder:text-slate-600"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Gateway</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-rcs-blue focus:ring-1 focus:ring-rcs-blue transition-all outline-none font-medium placeholder:text-slate-600"
                                            placeholder="Work Email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Protocols</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-rcs-blue focus:ring-1 focus:ring-rcs-blue transition-all outline-none font-medium appearance-none"
                                    >
                                        <option value="" disabled className="bg-navy-950">Select Channel...</option>
                                        <option value="rcs" className="bg-navy-950">RCS Messaging</option>
                                        <option value="whatsapp" className="bg-navy-950">WhatsApp API</option>
                                        <option value="sms" className="bg-navy-950">Strategic SMS</option>
                                        <option value="other" className="bg-navy-950">Other / Custom</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Request Details</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-rcs-blue focus:ring-1 focus:ring-rcs-blue transition-all outline-none font-medium placeholder:text-slate-600 resize-none"
                                        placeholder="Briefly describe your requirements..."
                                        required
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        id="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        required
                                        className="w-5 h-5 rounded border-white/10 bg-white/5 text-rcs-blue focus:ring-rcs-blue"
                                    />
                                    <label htmlFor="terms" className="text-sm text-slate-500 font-medium">
                                        I accept the <Link to="/terms" className="text-white hover:text-rcs-blue underline transition-colors">Privacy Protocol</Link>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending" || status === "success"}
                                    className="btn-primary w-full !py-5 !text-base transition-all disabled:opacity-50"
                                >
                                    {status === "sending" ? "Processing..." : status === "success" ? "Transmission Successful" : "Dispatch Message"}
                                </button>

                                {status === "success" && (
                                    <p className="text-rcs-cyan text-center text-[10px] font-black uppercase tracking-widest mt-4">
                                        Sync Complete. We'll be in touch.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
