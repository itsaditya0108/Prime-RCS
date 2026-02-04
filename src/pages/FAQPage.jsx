import FAQ from "../sections/FAQ";

export default function FAQPage() {
    return (
        <section className="pt-32 pb-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">

                <h1 className="text-3xl md:text-4xl font-bold mb-10">
                    Frequently Asked Questions
                </h1>

                <FAQ />

            </div>
        </section>
    );
}
