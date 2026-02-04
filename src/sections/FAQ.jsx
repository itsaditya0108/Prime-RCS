const faqs = [
    {
        q: "What is RCS messaging?",
        a: "RCS is the next generation of SMS that supports rich content and interactivity."
    },
    {
        q: "Is RCS supported on all devices?",
        a: "RCS works on most Android devices with supported carriers."
    },
    {
        q: "Can RCS replace SMS?",
        a: "Yes, RCS offers a much richer experience than SMS."
    },
];

export default function FAQ() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-3xl font-bold mb-12 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-semibold mb-2">{f.q}</h4>
                            <p className="text-gray-600">{f.a}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
