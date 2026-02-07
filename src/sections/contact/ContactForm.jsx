import { motion } from "framer-motion";

export default function ContactForm() {
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
                                    <p className="text-slate-600">sales@suremsg.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-brandGreen/10 text-brandGreen flex items-center justify-center group-hover:bg-brandGreen group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Developer Support</h3>
                                    <p className="text-slate-600">dev@suremsg.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                    <p className="text-slate-600">123 Messaging Lane, Tech City, USA</p>
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

                        <form className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                                    <input type="email" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none" placeholder="john@company.com" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                                <input type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none" placeholder="Acme Inc." />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all outline-none resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <button type="submit" className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brandBlue to-brandGreen hover:opacity-90 transition-opacity shadow-lg shadow-brandBlue/20">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
