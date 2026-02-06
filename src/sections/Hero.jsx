import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start md:items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    {/* Badge */}
                    <span className="badge-brand mb-6">
                        RCS Business Messaging
                    </span>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight mb-6">
                        Power Your Business with{" "}
                        <span className="text-brand">Rich & Interactive</span>{" "}
                        Messaging
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Replace traditional SMS with branded, verified RCS messages that
                        support images, buttons, and real-time engagement — directly inside
                        your customer’s messaging app.
                    </p>

                    {/* CTA */}
                    <div className="flex gap-4 flex-wrap">
                        <a href="/contact" className="btn-brand">
                            Request Demo
                        </a>

                        <a
                            href="/services"
                            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold
                         hover:border-brandBlue hover:text-brandBlue transition"
                        >
                            Explore Services
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT: Mobile Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative flex justify-center"
                >

                    {/* Ambient glow – background only */}
                    <motion.div
                        animate={{ opacity: [0.08, 0.14, 0.08] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 -z-10 bg-gradient-to-br from-brandBlue to-brandGreen blur-3xl rounded-full"
                    />

                    {/* PHONE (scaled safely, never clipped) */}
                    <div
                        className="
      relative w-64 h-[520px]
      rounded-[3rem]
      border-[7px] border-black
      bg-white overflow-hidden
      shadow-[0_25px_60px_rgba(0,0,0,0.25)]
      scale-[0.94] md:scale-100
      origin-top
    "
                    >

                        {/* iOS STATUS BAR */}
                        <div className="px-4 pt-2 pb-1 flex justify-between items-center text-[11px] text-black">
                            <span>9:41</span>
                            <span className="tracking-wide">📶 🔋</span>
                        </div>

                        {/* APP HEADER */}
                        <div className="px-4 py-2 flex items-center gap-3 border-b bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                            <img
                                src={logo}
                                alt="SureMsg"
                                className="h-7 w-7 rounded-full object-cover"
                            />
                            <div className="leading-tight">
                                <div className="text-sm font-semibold text-black flex items-center gap-1">
                                    SureMsg
                                    <span className="text-brandBlue text-xs">✔</span>
                                </div>
                                <div className="text-[11px] text-gray-500">
                                    Verified Business
                                </div>
                            </div>
                        </div>

                        {/* CHAT AREA */}
                        <div className="flex flex-col h-[calc(100%-110px)] bg-white">

                            {/* Messages */}
                            <div className="flex-1 p-4 space-y-3 text-[14px] overflow-hidden">

                                {/* Incoming */}
                                <div className="bg-[#E9E9EB] text-black px-3 py-2 rounded-2xl rounded-bl-md w-fit max-w-[85%]">
                                    Hi there! Welcome to SureMsg 👋
                                </div>

                                {/* Outgoing */}
                                <div className="bg-brandBlue text-white px-3 py-2 rounded-2xl rounded-br-md w-fit ml-auto max-w-[85%]">
                                    Here’s an exclusive offer just for you
                                </div>

                                {/* RCS Rich Card */}
                                <div className="border border-[#D1D1D6] rounded-xl overflow-hidden max-w-[90%]">
                                    <div className="px-3 py-2 text-xs font-semibold text-black bg-[#F2F2F7]">
                                        Exclusive RCS Campaign
                                    </div>

                                    <div className="p-3 space-y-2">
                                        <p className="text-[13px] text-[#3A3A3C] leading-snug">
                                            Branded messages with images, buttons,
                                            and real-time engagement.
                                        </p>

                                        <button className="w-full bg-brandGreen text-white py-2 rounded-lg text-[13px] font-semibold hover:opacity-90 transition">
                                            Get Started
                                        </button>
                                    </div>
                                </div>

                            </div>

                            {/* INPUT BAR (KEY FIX) */}
                            <div className="px-3 py-2 border-t bg-[#F9F9F9] flex items-center gap-2">
                                <div className="flex-1 bg-white border rounded-full px-3 py-2 text-[13px] text-gray-400">
                                    Message
                                </div>
                                <button className="h-8 w-8 rounded-full bg-brandBlue text-white text-sm font-bold flex items-center justify-center">
                                    ➤
                                </button>
                            </div>
                        </div>

                    </div>
                </motion.div>


            </div>
        </section>
    );
}
