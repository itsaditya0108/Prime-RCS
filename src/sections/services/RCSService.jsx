export default function RCSService() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                {/* Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                        RCS Business Messaging
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Deliver rich, interactive messaging experiences directly inside
                        your customers’ default messaging app—without requiring any app
                        installation.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li>• Verified sender identity</li>
                        <li>• Rich cards, images & buttons</li>
                        <li>• Two-way conversations</li>
                        <li>• Read receipts & analytics</li>
                        <li>• Enterprise-grade delivery</li>
                    </ul>
                </div>

                {/* Visual Placeholder */}
                <div className="rounded-2xl border border-gray-200 bg-white p-10 flex items-center justify-center text-gray-400">
                    RCS UI Preview
                </div>

            </div>
        </section>
    );
}
