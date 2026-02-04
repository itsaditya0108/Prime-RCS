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
                <div className="text-lg font-extrabold tracking-tight">
                    <span className="text-blue-600">Sure</span>
                    <span className="text-green-500">Msg</span>
                </div>
                <div className="text-xs text-gray-500">
                    Trusted Messaging Platform
                </div>
            </div>
        </div>
    );
}
