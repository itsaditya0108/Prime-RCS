const services = [
    {
        title: "WhatsApp Business API",
        desc: "Send notifications, alerts, and customer engagement messages using the official WhatsApp Business platform.",
    },
    {
        title: "Bulk SMS Messaging",
        desc: "Reliable transactional and promotional SMS delivery with enterprise-grade throughput.",
    },
    {
        title: "OTP & Authentication",
        desc: "Secure and fast OTP delivery for login verification and user authentication.",
    },
];

export default function OtherServices() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        More Messaging Solutions
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Along with RCS, SureMsg offers a complete suite of messaging
                        solutions to support your business communication needs.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-600 transition"
                        >
                            <h3 className="font-semibold text-lg mb-3">
                                {s.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {s.desc}
                            </p>
                            <a
                                href="/services"
                                className="text-blue-600 font-semibold text-sm hover:underline"
                            >
                                Learn more →
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
