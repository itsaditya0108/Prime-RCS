export default function OtherServices() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold mb-12">
                    Other Messaging Services
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <Service
                        title="WhatsApp Business API"
                        desc="Send notifications, OTPs, and campaigns via WhatsApp."
                    />
                    <Service
                        title="Bulk SMS"
                        desc="Fast, reliable transactional & promotional SMS."
                    />
                    <Service
                        title="OTP & Alerts"
                        desc="Secure OTP delivery for authentication."
                    />
                </div>

            </div>
        </section>
    );
}

function Service({ title, desc }) {
    return (
        <div className="p-8 rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}
