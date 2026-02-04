import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    Ready to modernize your business messaging?
                </h2>

                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                    Talk to our team to see how RCS and omnichannel messaging
                    can help you engage customers more effectively.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                        to="/contact"
                        className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Request Demo
                    </Link>

                    <Link
                        to="/services"
                        className="border border-gray-600 px-8 py-3 rounded-lg font-semibold text-gray-300 hover:border-white hover:text-white transition"
                    >
                        Explore Services
                    </Link>
                </div>

            </div>
        </section>
    );
}
