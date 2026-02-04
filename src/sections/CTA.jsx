import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="py-24 bg-gradient-to-r from-blue-600 to-green-500 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    Ready to Upgrade Your Business Messaging?
                </h2>

                <p className="text-lg opacity-90 mb-10">
                    Start engaging your customers with rich, interactive RCS and
                    WhatsApp messaging today.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                        to="/contact"
                        className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                    >
                        Request Demo
                    </Link>

                    <Link
                        to="/services"
                        className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
                    >
                        View Services
                    </Link>
                </div>

            </div>
        </section>
    );
}
