import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src={logo}
                            alt="SureMsg"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen">
                            SureMsg
                        </span>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                        SureMsg is a modern business messaging platform helping companies
                        deliver rich, verified, and interactive communication experiences
                        using RCS and other messaging channels.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-sm font-semibold text-white mb-4">
                        Services
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/services" className="hover:text-white transition">RCS Messaging</Link></li>
                        <li><Link to="/services" className="hover:text-white transition">WhatsApp Business</Link></li>
                        <li><Link to="/services" className="hover:text-white transition">SMS & OTP</Link></li>
                        <li><Link to="/services" className="hover:text-white transition">Messaging APIs</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-sm font-semibold text-white mb-4">
                        Company
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                        <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-sm font-semibold text-white mb-4">
                        Contact
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>Email: support@suremsg.in</li>
                        <li>Business Messaging Solutions</li>
                        <li>India</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <span>
                        © {new Date().getFullYear()} SureMsg. All rights reserved.
                    </span>
                    <span>
                        Built for modern business messaging
                    </span>
                </div>
            </div>
        </footer>
    );
}
