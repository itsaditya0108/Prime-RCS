import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link to="/">
                    <Logo />
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link to="/services" className="hover:text-blue-600">Services</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/faq" className="hover:text-blue-600">FAQ</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact</Link>

                    <Link
                        to="/contact"
                        className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Request Demo
                    </Link>
                </div>

            </div>
        </nav>
    );
}
