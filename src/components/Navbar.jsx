import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 8);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const NavItem = ({ to, children }) => {
        const active = location.pathname === to;
        return (
            <Link
                to={to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition-colors
          ${active
                        ? "text-brandBlue"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
            >
                {children}
            </Link>
        );
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-200
        ${scrolled
                    ? "bg-white/90 backdrop-blur border-b border-gray-200"
                    : "bg-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

                {/* Logo */}
                <Link to="/" onClick={() => setOpen(false)}>
                    <Logo />
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-10">
                    <NavItem to="/services">Services</NavItem>
                    <NavItem to="/faq">FAQ</NavItem>
                    <NavItem to="/about">About</NavItem>

                    <Link to="/contact" className="btn-brand px-5 py-2 text-sm">
                        Request Demo
                    </Link>
                </div>

                {/* Mobile button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-6 py-6 flex flex-col gap-6 text-sm font-medium">
                            <NavItem to="/services">Services</NavItem>
                            <NavItem to="/faq">FAQ</NavItem>
                            <NavItem to="/about">About</NavItem>

                            <Link
                                to="/contact"
                                className="btn-brand text-center py-3"
                                onClick={() => setOpen(false)}
                            >
                                Request Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
