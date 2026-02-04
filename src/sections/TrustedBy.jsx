export default function TrustedBy() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-10">
                    Trusted by growing businesses & enterprises
                </p>

                {/* Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center opacity-70">
                    <LogoPlaceholder />
                    <LogoPlaceholder />
                    <LogoPlaceholder />
                    <LogoPlaceholder />
                    <LogoPlaceholder />
                </div>

            </div>
        </section>
    );
}

function LogoPlaceholder() {
    return (
        <div className="h-10 flex items-center justify-center">
            <div className="h-6 w-28 bg-gray-200 rounded"></div>
        </div>
    );
}
