import logo from "../assets/logo.png";

export default function Logo() {
    return (
        <div className="flex items-center group cursor-pointer">
            <div className="relative flex items-center justify-center">
                {/* Ambient glow behind the logo */}
                <div className="absolute -inset-4 bg-rcs-blue/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <img
                    src={logo}
                    alt="PrimeRCS"
                    className="h-10 sm:h-11 w-auto object-contain logo-invert transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] z-10"
                />
            </div>
        </div>
    );
}
