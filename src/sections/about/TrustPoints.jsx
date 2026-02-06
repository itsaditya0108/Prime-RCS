const points = [
    "Focused on RCS and modern messaging technologies",
    "Enterprise-grade infrastructure and APIs",
    "Security and verified sender identity first",
    "Designed for scale and long-term reliability",
];

export default function WhySureMsg() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 max-w-3xl">

                <h2 className="text-3xl font-extrabold mb-6">
                    Why Choose SureMsg?
                </h2>

                <ul className="space-y-4 text-gray-700">
                    {points.map((p, i) => (
                        <li key={i}>• {p}</li>
                    ))}
                </ul>

            </div>
        </section>
    );
}
