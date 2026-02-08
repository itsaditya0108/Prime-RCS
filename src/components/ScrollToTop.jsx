import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Give the browser a moment to layout the new page
            setTimeout(() => {
                const element = document.getElementById(hash.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
        } else {
            // Prevent smooth scrolling animation when changing pages
            document.documentElement.style.scrollBehavior = "auto";
            window.scrollTo({ top: 0, behavior: "auto" });
            document.documentElement.style.scrollBehavior = "";
        }
    }, [pathname, hash]);

    return null;
}
