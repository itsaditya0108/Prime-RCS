import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const menuItems = [
    {
        title: "Products",
        items: [
            {
                name: "RCS Services",
                desc: "Next-gen rich messaging with branding and verification.",
                to: "/services#rcs",
                icon: "rcs",
            },
            {
                name: "WhatsApp Business API",
                desc: "Engage customers on the world's most popular messaging app.",
                to: "/services#whatsapp",
                icon: "whatsapp",
            },
            {
                name: "Enterprise SMS",
                desc: "Reliable global SMS termination for OTPs and alerts.",
                to: "/services#sms",
                icon: "message",
            },
        ],
    },
    {
        title: "Company",
        items: [
            {
                name: "About Us",
                desc: "Our mission to revolutionize business messaging.",
                to: "/about",
                icon: "users",
            },
            {
                name: "Contact",
                desc: "Reach out to our global support team.",
                to: "/contact",
                icon: "chat",
            },
        ],
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const location = useLocation();

    /* Scroll detection */
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 16) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Lock body scroll when mobile menu open */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    }, [mobileOpen]);

    return (
        <nav
            className={`fixed top-0 w-full transition-all duration-500 ${scrolled || mobileOpen
                ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] py-4"
                : "bg-transparent py-6"
                }`}
            style={{ zIndex: 99999 }}
            onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 sm:h-20 px-6">

                {/* Logo */}
                <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {menuItems.map((item) => (
                        <div
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => setActiveMenu(item.title)}
                        >
                            <button className="text-[15px] font-extrabold text-slate-300 hover:text-white flex items-center gap-1.5 transition-all duration-300 font-heading tracking-tight">
                                {item.title}
                                <svg
                                    className={`w-4 h-4 transition-transform ${activeMenu === item.title ? "rotate-180 text-rcs-blue" : ""
                                        }`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">

                    {/* CTA - Hidden when mobile menu is open on mobile */}
                    <div className={`${mobileOpen ? "hidden md:flex" : "flex"} items-center`}>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary !py-2.5 !px-8 text-[15px] font-black font-heading shadow-rcs-blue/20 hover:shadow-rcs-blue/40 rounded-xl"
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-3 -mr-2 z-[100001] relative transition-transform active:scale-90"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`h-[2px] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[9px] bg-rcs-cyan" : "bg-white"
                                    }`}
                            />
                            <span
                                className={`h-[2px] transition-all duration-300 ${mobileOpen ? "opacity-0" : "bg-white"
                                    }`}
                            />
                            <span
                                className={`h-[2px] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[9px] bg-rcs-cyan" : "bg-white"
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Desktop Mega Menu */}
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.18 }}
                        className="absolute w-full top-full bg-navy-900/90 backdrop-blur-2xl border-b border-white/5 py-10 hidden md:block"
                    >
                        <div className="container mx-auto px-6 grid grid-cols-12 gap-12">

                            {/* Sidebar */}
                            <div className="col-span-3 border-r border-white/10 pr-8">
                                <h3 className="text-3xl font-black text-white mb-2 font-heading tracking-tight">
                                    {activeMenu}
                                </h3>

                                <p className="text-[15px] text-slate-400 mb-8 font-semibold opacity-90">
                                    Next-Gen Messaging Solutions
                                </p>

                                <Link
                                    to="/contact"
                                    className="text-sm font-bold text-rcs-blue hover:text-rcs-cyan transition-colors"
                                >
                                    Talk to an expert →
                                </Link>
                            </div>

                            {/* Menu Grid */}
                            <div className="col-span-9 grid grid-cols-3 gap-8">
                                {menuItems
                                    .find((i) => i.title === activeMenu)
                                    ?.items.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            to={sub.to}
                                            className="group flex gap-5 p-5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                                        >
                                            <div className="w-20 h-12 rounded-2xl bg-white/5 text-rcs-blue flex items-center justify-center group-hover:bg-rcs-blue group-hover:text-white transition-all duration-500 shadow-inner border border-white/5">
                                                <ItemIcon name={sub.icon} />
                                            </div>

                                            <div>
                                                <div className="text-lg font-black text-white group-hover:text-rcs-blue transition-colors font-heading tracking-tight">
                                                    {sub.name}
                                                </div>
                                                <p className="text-sm text-slate-400 mt-2 leading-relaxed font-semibold opacity-80">
                                                    {sub.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 md:hidden flex flex-col pt-24"
                        style={{ backgroundColor: '#020617', zIndex: 100000, opacity: 1 }}
                    >
                        {/* Decorative background glow */}
                        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-rcs-blue/20 to-transparent pointer-events-none" />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 250 }}
                            className="relative w-full h-full bg-navy-950 p-8 pt-12 overflow-y-auto border-l border-white/5 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-8">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6 pl-2">Menu Navigation</p>
                                    {menuItems.map((item) => (
                                        <MobileMenuItem
                                            key={item.title}
                                            item={item}
                                            setOpen={setMobileOpen}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 space-y-6">
                                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                                    <button
                                        className="btn-primary w-full !py-4 shadow-rcs-blue/20 text-base font-black font-heading rounded-xl"
                                    >
                                        Get Started
                                    </button>
                                </Link>

                                <div className="flex justify-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-10">
                                    <Link to="/contact" onClick={() => setMobileOpen(false)}>Support</Link>
                                    <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Logo />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

const ItemIcon = ({ name }) => {
    if (name === "whatsapp")
        return (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
        );

    if (name === "message")
        return (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        );

    if (name === "rcs")
        return (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        );

    if (name === "users")
        return (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
            </svg>
        );

    if (name === "chat")
        return (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
        );

    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
    );
};

const MobileMenuItem = ({ item, setOpen }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between py-5 text-lg font-bold text-white group"
            >
                <span className="font-heading tracking-tight group-hover:text-rcs-blue transition-colors">
                    {item.title}
                </span>

                <motion.div
                    animate={{ rotate: expanded ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`p-1 rounded-full ${expanded ? "bg-rcs-blue/10 text-rcs-blue" : "text-slate-500"}`}
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </motion.div>
            </button>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 flex flex-col gap-2">
                            {item.items.map((sub) => (
                                <Link
                                    key={sub.name}
                                    to={sub.to}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-4 text-[15px] font-bold text-slate-400 hover:text-white p-4 rounded-2xl hover:bg-white/5 transition-all active:scale-[0.98] font-heading group/sub"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-rcs-blue/10 text-rcs-blue flex items-center justify-center transition-all group-hover/sub:bg-rcs-blue group-hover/sub:text-white shadow-inner border border-rcs-blue/5">
                                        <ItemIcon name={sub.icon} />
                                    </div>
                                    <span className="transition-colors group-hover/sub:text-white">
                                        {sub.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};