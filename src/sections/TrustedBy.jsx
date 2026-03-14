import { motion } from "framer-motion";
import ajmeraLogo from "../assets/logos/ajmera.png";
import balajiLogo from "../assets/logos/balajiwaffers.png";
import heroLogo from "../assets/logos/hero.png";
import jswLogo from "../assets/logos/jsw.png";
import labdhiLogo from "../assets/logos/labadhililfestylelimited.png";
import marutiLogo from "../assets/logos/marutisuzki.png";
import moviemaxLogo from "../assets/logos/moviemwx.png";

const brands = [
    { name: "Maruti Suzuki", logo: marutiLogo },
    { name: "JSW Group", logo: jswLogo },
    { name: "Balaji Wafers", logo: balajiLogo },
    { name: "Hero", logo: heroLogo },
    { name: "Ajmera Realty", logo: ajmeraLogo },
    { name: "Labdhi Lifestyle", logo: labdhiLogo },
    { name: "MovieMax", logo: moviemaxLogo },
];

export default function TrustedBy() {
    return (
        <section className="py-20 bg-navy-900 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center mb-12">
                <div className="flex items-center gap-6 w-full mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1" />
                    <span className="text-slate-500 font-extrabold tracking-[0.25em] text-[10px] uppercase">
                        Empowering Enterprise Communication
                    </span>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mt-4 tracking-tight">
                    Trusted by <span className="text-rcs-blue">Global Leaders</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-12 md:gap-32 items-center flex-nowrap"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Multiplied list for infinite scroll */}
                    {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center shrink-0 px-4 filter grayscale brightness-200 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-10 md:h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
