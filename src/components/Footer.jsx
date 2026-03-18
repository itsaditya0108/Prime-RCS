import { Link } from "react-router-dom";
import Logo from "./Logo";
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
                        <div className="mb-8">
                            <Logo />
                        </div>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium opacity-80">
                            Elevate your customer communication with Verified RCS Business Messaging.
                            Secure, interactive, and built for modern engagement.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300 text-slate-400">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-slate-400">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/suremsg?igsh=MWQwYXI5OWtvNWQybw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all duration-300 text-slate-400">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.76-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
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
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} PrimeRCS. All rights reserved. Prime MSG</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-rcs-cyan transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-rcs-cyan transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-rcs-cyan transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
