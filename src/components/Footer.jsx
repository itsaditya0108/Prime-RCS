export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                <div>
                    <h3 className="text-white font-bold text-lg mb-2">SureMsg</h3>
                    <p className="text-sm">
                        Trusted messaging solutions for modern businesses.
                    </p>
                </div>

                <FooterCol title="Product" items={["RCS Messaging", "WhatsApp API", "Bulk SMS"]} />
                <FooterCol title="Company" items={["About Us", "Contact", "FAQ"]} />
                <FooterCol title="Legal" items={["Privacy Policy", "Terms of Service"]} />

            </div>

            <div className="border-t border-gray-800 text-center py-6 text-sm">
                © {new Date().getFullYear()} SureMsg. All rights reserved.
            </div>
        </footer>
    );
}

function FooterCol({ title, items }) {
    return (
        <div>
            <h4 className="text-white font-semibold mb-4">{title}</h4>
            <ul className="space-y-2 text-sm">
                {items.map((i) => (
                    <li key={i} className="hover:text-white cursor-pointer">
                        {i}
                    </li>
                ))}
            </ul>
        </div>
    );
}
