const trust = [
    "Built with industry-standard security practices",
    "Designed for high-volume enterprise messaging",
    "Focused on reliability, compliance, and performance",
    "Dedicated support for business messaging needs",
];

export default function TrustPoints() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 max-w-3xl">

                <h2 className="text-3xl font-extrabold mb-6">
                    Built for Trust & Reliability
                </h2>

                <ul className="space-y-3 text-gray-700">
                    {trust.map((t, i) => (
                        <li key={i}>• {t}</li>
                    ))}
                </ul>

            </div>
        </section>
    );
}
