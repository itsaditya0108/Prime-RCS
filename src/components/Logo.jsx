import logo from "../assets/logo.png";

export default function Logo() {
    return (
        <div className="flex items-center gap-3">
            <img
                src={logo}
                alt="SureMsg"
                className="h-9 w-9 object-contain"
            />

            <div className="leading-tight">
                <div className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brandBlue to-brandGreen">
                    SureMsg
                </div>
                <div className="text-xs text-gray-500">
                    Your Trusted Messaging Partner
                </div>

            </div>
        </div>
    );
}
