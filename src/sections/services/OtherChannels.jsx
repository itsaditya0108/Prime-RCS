const channels = [
    {
        title: "WhatsApp Business Messaging",
        desc: "Automated and interactive WhatsApp conversations using official APIs.",
    },
    {
        title: "SMS & OTP Services",
        desc: "Reliable transactional and promotional SMS with high delivery rates.",
    },
    {
        title: "Email Messaging",
        desc: "Personalized and automated email campaigns integrated into your stack.",
    },
];

export default function OtherChannels() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-extrabold mb-12">
                    Additional Messaging Channels
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {channels.map((item, i) => (
                        <div
                            key={i}
                            className="relative border border-gray-200 rounded-2xl p-6"
                        >
                            <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-brandBlue to-brandGreen" />
                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
