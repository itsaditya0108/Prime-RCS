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
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center mb-10">
                <div className="flex items-center gap-4 w-full mb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent flex-1" />
                    <span className="text-slate-400 font-display font-semibold tracking-widest text-xs uppercase">
                        Trusted by industry leaders
                    </span>
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent flex-1" />
                </div>
            </div>

            <div className="relative flex overflow-hidden mask-gradient-x">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-10 md:gap-32 items-center flex-nowrap pl-0"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Triple the list to ensure smooth infinite loop for wide screens */}
                    {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center shrink-0 group px-2"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-14 md:h-20 w-auto object-contain transition-all duration-300 mix-blend-multiply opacity-80 hover:opacity-100 hover:scale-105"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
