export default function ContactForm() {
    return (
        <section className="pb-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

                    <form className="space-y-6">

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandBlue"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandBlue"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandBlue"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandBlue"
                                placeholder="Tell us about your use case (optional)"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-brand w-full justify-center"
                        >
                            Request Demo
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}
