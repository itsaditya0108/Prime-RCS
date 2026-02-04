export default function Logo() {
    return (
        <div className="flex items-center gap-3 select-none">

            {/* ICON */}
            <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-400 to-green-400 flex items-center justify-center shadow-md">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 6L9 17l-5-5" />
                </svg>
            </div>

            {/* TEXT */}
            <div className="leading-tight">
                <div className="text-xl font-extrabold tracking-tight">
                    <span className="text-blue-600">Sure</span>
                    <span className="text-green-500">Msg</span>
                </div>
                <div className="text-xs text-gray-500 font-medium">
                    Trusted Messaging Platform
                </div>
            </div>

        </div>
    );
}
