import logo from "../assets/logo.png";

export default function Logo() {
    return (
        <div className="flex items-center gap-3">
            <div className="relative group">
                <div className="absolute -inset-2 bg-brandBlue/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                    src={logo}
                    alt="SureMsg"
                    className="relative h-10 w-10 object-contain drop-shadow-sm"
                />
            </div>

            <div className="leading-none">
                <div className="text-lg md:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen via-brandBlue bg-[length:200%_auto] animate-gradient">
                    SureMsg
                </div>
            </div>
        </div>
    );
}
