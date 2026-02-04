import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-32">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl"
                >
                    <span className="badge-brand">
                        RCS Business Messaging
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                        Power Your Business with{" "}
                        <span className="text-brand">Rich & Interactive </span>
                        Messaging
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Replace traditional SMS with branded, verified RCS messages that
                        support images, buttons, and real-time engagement — directly inside
                        your customer’s messaging app.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="/contact"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Request Demo
                        </a>

                        <a
                            href="/services"
                            className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition"
                        >
                            Explore Services
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT: PHONE MOCKUP */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="flex justify-center"
                >
                    <div className="relative w-72 h-[520px] rounded-[2.6rem] border-[8px] border-gray-900 bg-white shadow-xl overflow-hidden">

                        {/* App Header */}
                        <div className="px-4 py-3 text-sm font-semibold border-b">
                            SureMsg
                        </div>

                        {/* Chat UI */}
                        <div className="p-4 space-y-4 text-sm">
                            <div className="bg-gray-100 p-3 rounded-xl w-fit">
                                👋 Welcome to SureMsg!
                            </div>

                            <div className="bg-blue-600 text-white p-3 rounded-xl w-fit ml-auto">
                                Check our latest offer 🚀
                            </div>

                            <div className="border rounded-xl overflow-hidden">
                                <div className="bg-gray-50 px-3 py-2 text-xs font-semibold">
                                    Exclusive RCS Offer
                                </div>
                                <div className="p-3">
                                    <p className="mb-3 text-gray-700">
                                        Get 20% OFF on your first campaign
                                    </p>
                                    <button className="w-full bg-green-500 text-white py-2 rounded-md text-sm font-semibold">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subtle Glow */}
                    <div className="absolute -z-10 w-72 h-[520px] bg-gradient-to-br from-blue-400 to-green-400 blur-3xl opacity-15"></div>
                </motion.div>

            </div>
        </section>
    );
}
