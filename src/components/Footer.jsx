import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const FooterLink = ({ to, children }) => (
    <li>
        <Link
            to={to}
            className="text-slate-400 hover:text-brandBlue transition-colors duration-300 flex items-center gap-2 group"
        >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-brandBlue transition-colors"></span>
            {children}
        </Link>
    </li>
);

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandBlue to-brandGreen"></div>
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-brandGreen/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue to-brandGreen rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <img
                                    src={logo}
                                    alt="SureMsg"
                                    className="relative h-10 w-10 rounded-full object-cover border border-slate-700"
                                />
                            </div>
                            <span className="text-2xl font-display font-bold text-white tracking-tight">
                                SureMsg
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Elevate your customer communication with Verified RCS Business Messaging.
                            Secure, interactive, and built for modern engagement.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            {[1, 2, 3].map((i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brandBlue hover:text-white transition-all duration-300">
                                    <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            Product
                            <span className="h-px w-8 bg-slate-700"></span>
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink to="/services">RCS Messaging</FooterLink>
                            <FooterLink to="/services">WhatsApp Business</FooterLink>
                            <FooterLink to="/services">SMS & OTP</FooterLink>
                            <FooterLink to="/services">Verify API</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            Company
                            <span className="h-px w-8 bg-slate-700"></span>
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/faq">Documentation</FooterLink>
                            <FooterLink to="/faq">Help Center</FooterLink>
                            <FooterLink to="/contact">Contact Support</FooterLink>
                        </ul>
                    </div>

                    {/* Contact/Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                            <p className="text-xs text-slate-400 mb-4">
                                Subscribe to our newsletter for the latest RCS updates and features.
                            </p>
                            <form className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-all placeholder:text-slate-600"
                                />
                                <button className="w-full bg-gradient-to-r from-brandBlue to-brandGreen text-white font-medium py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} SureMsg. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
