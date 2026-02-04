const features = [
    {
        title: "Rich Media Messaging",
        desc: "Send images, videos, GIFs, and carousels directly inside the native messaging app."
    },
    {
        title: "Interactive Buttons",
        desc: "Enable users to take action instantly with CTA buttons and quick replies."
    },
    {
        title: "Verified Business Profile",
        desc: "Build trust with verified sender IDs, brand name, and logo visibility."
    },
    {
        title: "Read & Delivery Insights",
        desc: "Track delivery, read receipts, and engagement metrics in real time."
    },
    {
        title: "Fallback to SMS",
        desc: "Automatically deliver messages as SMS when RCS is not supported."
    },
    {
        title: "Enterprise Scale",
        desc: "Reliable delivery for high-volume campaigns with carrier-grade infrastructure."
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Powerful RCS Messaging Features
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to create engaging, interactive, and measurable
                        messaging experiences for your customers.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl border border-gray-200 hover:border-blue-600 transition"
                        >
                            <h3 className="font-semibold text-lg mb-2">
                                {f.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
