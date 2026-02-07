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
            setScrolled(window.scrollY > 20);
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
                className="relative group px-1 py-2"
            >
                <span className={`text-sm font-medium transition-colors duration-300 ${active ? "text-brandBlue" : "text-slate-600 group-hover:text-slate-900"
                    }`}>
                    {children}
                </span>

                {/* Active Indicator */}
                {active && (
                    <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brandBlue to-brandGreen rounded-full"
                    />
                )}

                {/* Hover Indicator */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-200 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${active ? 'hidden' : 'block'}`} />
            </Link>
        );
    };

    const variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 group">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brandBlue to-brandGreen rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />
                        <Logo />
                    </div>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <NavItem to="/services">Services</NavItem>
                    <NavItem to="/faq">FAQ</NavItem>
                    <NavItem to="/about">About</NavItem>

                    <div className="h-6 w-px bg-slate-200 mx-2"></div>

                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group overflow-hidden bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 transition-all"
                        >
                            <span className="relative z-10">Request Demo</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brandBlue to-brandGreen opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-slate-700 hover:bg-slate-100/50 rounded-full transition-colors"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
                        <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6 text-center">
                            <Link to="/services" onClick={() => setOpen(false)} className="text-lg font-medium text-slate-700">Services</Link>
                            <Link to="/faq" onClick={() => setOpen(false)} className="text-lg font-medium text-slate-700">FAQ</Link>
                            <Link to="/about" onClick={() => setOpen(false)} className="text-lg font-medium text-slate-700">About</Link>

                            <div className="border-t border-slate-100 my-2"></div>

                            <Link
                                to="/contact"
                                onClick={() => setOpen(false)}
                                className="bg-gradient-to-r from-brandBlue to-brandGreen text-white py-3 rounded-xl font-semibold shadow-lg"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
