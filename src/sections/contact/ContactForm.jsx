import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../../utils/emailService";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", service: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="pb-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-slate-600 mb-12">
                            Have questions about our RCS API? Need a custom enterprise plan?
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center group-hover:bg-brandBlue group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Chat to Sales</h3>
                                    <p className="text-slate-600">info@suremsg.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-brandGreen/10 text-brandGreen flex items-center justify-center group-hover:bg-brandGreen group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Developer Support</h3>
                                    <p className="text-slate-600">info@suremsg.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                    <p className="text-slate-600">Office No 19 Ground Floor, Evershine Mall Chincholi Bunder, Road, near Mindspace, Malad West, Mumbai, Maharashtra 400064.</p>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandBlue to-brandGreen" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none"
                                        placeholder="john@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none"
                                    placeholder="Acme Inc."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Service of Interest</label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none appearance-none text-slate-600"
                                    >
                                        <option value="" disabled>Select a service...</option>
                                        <option value="rcs">RCS Business Messaging</option>
                                        <option value="whatsapp">WhatsApp Business API</option>
                                        <option value="sms">Enterprise SMS</option>
                                        <option value="other">Other / General Inquiry</option>
                                    </select>
                                    <svg className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending" || status === "success"}
                                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brandBlue to-brandGreen hover:opacity-90 transition-opacity shadow-lg shadow-brandBlue/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                            </button>
                            {status === "success" && (
                                <p className="text-green-600 text-center text-sm font-medium mt-2">
                                    Thanks! We'll be in touch shortly.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-center text-sm font-medium mt-2">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
