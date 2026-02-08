import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

// Menu Data Configuration
const menuItems = [
    {
        title: "Products",
        type: "mega",
        items: [
            { name: "RCS Services", desc: "Next-gen rich messaging with branding and verification.", to: "/services#rcs", icon: "rcs" },
            { name: "WhatsApp Business API", desc: "Engage customers on the world's most popular messaging app.", to: "/services#whatsapp", icon: "whatsapp" },
            { name: "Enterprise SMS", desc: "Reliable global SMS termination for OTPs and alerts.", to: "/services#sms", icon: "message" },
        ]
    },
    {
        title: "Company",
        type: "dropdown",
        items: [
            { name: "About Us", desc: "Our mission to revolutionize business messaging.", to: "/about", icon: "users" },
            { name: "Contact", desc: "Reach out to our global support team.", to: "/contact", icon: "chat" },
        ]
    }
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredNav, setHoveredNav] = useState(null);
    const location = useLocation();

    // Handle Scroll for Navbar styling
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle Body Scroll Lock when Mobile Menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [open]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 h-16 md:h-20 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 ${scrolled ? "shadow-sm" : ""}`}
            onMouseLeave={() => setHoveredNav(null)}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* Logo Area */}
                <div className="flex items-center gap-12">
                    <Link to="/" onClick={() => setOpen(false)} className="relative z-50 group">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {menuItems.map((item, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredNav(item.title)}
                                className="relative"
                            >
                                <button className={`px-4 py-2 text-sm font-semibold flex items-center gap-1 transition-colors ${hoveredNav === item.title ? "text-brandBlue" : "text-slate-600 hover:text-slate-900"}`}>
                                    {item.title}
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${hoveredNav === item.title ? "rotate-180 text-brandBlue" : "text-slate-400"}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions Area */}
                <div className="flex items-center gap-4 relative">

                    {/* Request Demo Button */}
                    <Link to="/contact" className="relative inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden bg-gradient-to-r from-brandBlue to-brandGreen text-white px-3 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-brandBlue/20 hover:shadow-brandBlue/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5 md:gap-2 group"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

                            <span className="relative z-10">Request Demo</span>
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </motion.button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 text-slate-700 -mr-2"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                            <span className={`w-full h-0.5 bg-slate-800 rounded-full transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
                            <span className={`w-full h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Desktop Mega Menu Dropdown */}
            <AnimatePresence>
                {hoveredNav && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-t border-slate-100 shadow-xl py-8 z-40 hidden md:block"
                        onMouseEnter={() => setHoveredNav(hoveredNav)}
                        onMouseLeave={() => setHoveredNav(null)}
                    >
                        <div className="max-w-7xl mx-auto px-6">
                            {menuItems.map((item) => (
                                item.title === hoveredNav && (
                                    <div key={item.title} className="grid grid-cols-12 gap-12">
                                        {/* Left Sidebar */}
                                        <div className="col-span-3 border-r border-slate-100 pr-8">
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-500 mb-6 font-medium">Explore Details</p>
                                            <Link to="/contact" className="text-sm font-semibold text-brandBlue flex items-center gap-1 hover:gap-2 transition-all">
                                                Talk to an expert <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </Link>
                                        </div>

                                        {/* Grid Content */}
                                        <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-8">
                                            {item.items.map((subItem, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={subItem.to}
                                                    onClick={() => setHoveredNav(null)}
                                                    className="group flex gap-4 p-3 -ml-2 rounded-xl hover:bg-slate-50 transition-colors"
                                                >
                                                    {subItem.icon && (
                                                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-brandBlue flex items-center justify-center shrink-0 group-hover:bg-brandBlue group-hover:text-white transition-colors shadow-sm">
                                                            <ItemIcon name={subItem.icon} />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="font-semibold text-slate-900 group-hover:text-brandBlue transition-colors flex items-center gap-1">
                                                            {subItem.name}
                                                        </div>
                                                        {subItem.desc && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{subItem.desc}</p>}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] z-40 md:hidden bg-slate-900/20 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    >
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                            className="bg-white shadow-xl border-t border-slate-100 overflow-hidden max-h-[80vh] overflow-y-auto overscroll-contain"
                        >
                            <div className="p-6 flex flex-col gap-0">
                                {menuItems.map((item, idx) => (
                                    <MobileMenuItem key={idx} item={item} setOpen={setOpen} />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

// Sub-components
const ItemIcon = ({ name }) => {
    // Simple SVG mappings
    if (name === "whatsapp") return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
    if (name === "message") return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    if (name === "mail") return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    if (name === "rcs") return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    if (name === "mic") return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
    if (name === "users") return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    if (name === "chat") return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>

    // Default
    return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg>
}

const MobileMenuItem = ({ item, setOpen }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between py-4 text-base font-semibold text-slate-800"
            >
                {item.title}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${expanded ? "bg-slate-100 text-blue-600" : "text-slate-400"}`}>
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </div>
            </button>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="pb-4 flex flex-col gap-1">
                            {item.items.map((sub, idx) => (
                                <Link
                                    key={idx}
                                    to={sub.to}
                                    onClick={() => setOpen(false)}
                                    className="p-3 pl-0 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-3 group"
                                >
                                    {sub.icon && (
                                        <div className="text-slate-400 group-hover:text-blue-600 transition-colors bg-slate-50 p-2 rounded-lg">
                                            <ItemIcon name={sub.icon} />
                                        </div>
                                    )}
                                    <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors">
                                        {sub.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
