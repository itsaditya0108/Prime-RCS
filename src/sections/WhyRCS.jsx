const features = [
    {
        title: "Branded Sender",
        rcs: "Business name & logo visible",
        sms: "Unknown phone number",
    },
    {
        title: "Rich Media",
        rcs: "Images, carousels & videos",
        sms: "Text only",
    },
    {
        title: "Call-to-Action",
        rcs: "Buttons & quick replies",
        sms: "Links only",
    },
    {
        title: "Engagement Tracking",
        rcs: "Delivered & read receipts",
        sms: "Delivery status only",
    },
];

export default function WhyRCS() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why RCS Business Messaging?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        RCS is the next evolution of SMS, offering rich, interactive,
                        and branded messaging experiences that drive higher engagement.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto">
                    <div className="min-w-[700px] bg-white rounded-xl shadow-sm">

                        {/* Header */}
                        <div className="grid grid-cols-3 border-b">
                            <div className="p-6 font-semibold text-gray-600">
                                Feature
                            </div>
                            <div className="p-6 font-semibold text-blue-600">
                                RCS Messaging
                            </div>
                            <div className="p-6 font-semibold text-gray-500">
                                Traditional SMS
                            </div>
                        </div>

                        {/* Rows */}
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-3 border-b last:border-b-0"
                            >
                                <div className="p-6 font-medium text-gray-700">
                                    {f.title}
                                </div>
                                <div className="p-6 text-gray-700">
                                    {f.rcs}
                                </div>
                                <div className="p-6 text-gray-500">
                                    {f.sms}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
