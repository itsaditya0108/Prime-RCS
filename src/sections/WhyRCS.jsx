const items = [
    {
        title: "Branded & Verified",
        desc: "Show your business name and logo instead of unknown numbers."
    },
    {
        title: "Rich Media",
        desc: "Send images, carousels, videos, and CTA buttons."
    },
    {
        title: "Higher Engagement",
        desc: "RCS delivers up to 3x higher CTR compared to SMS."
    },
    {
        title: "Read Receipts",
        desc: "Know when your message is delivered and read."
    },
];

export default function WhyRCS() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why RCS Business Messaging?
                    </h2>
                    <p className="text-gray-600">
                        Upgrade from traditional SMS to rich, interactive messaging
                        experiences that customers love.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {items.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
