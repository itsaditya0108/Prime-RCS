import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" onClick={() => setOpen(false)}>
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <Link to="/services" className="hover:text-blue-600">
                        Services
                    </Link>
                    <Link to="/faq" className="hover:text-blue-600">
                        FAQ
                    </Link>
                    <Link to="/about" className="hover:text-blue-600">
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="ml-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Request Demo
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <span className="text-2xl">✕</span>
                    ) : (
                        <span className="text-2xl">☰</span>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">

                        <Link
                            to="/services"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-600"
                        >
                            Services
                        </Link>

                        <Link
                            to="/faq"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-600"
                        >
                            FAQ
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-600"
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            onClick={() => setOpen(false)}
                            className="mt-2 inline-flex justify-center rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition"
                        >
                            Request Demo
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}
