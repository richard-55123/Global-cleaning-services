import { useState, useEffect, useRef } from "react";
import { Menu, X, Clock, Phone, MapPin, ChevronRight } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const contentContainer = contentRef.current;

        if (!scrollContainer || !contentContainer) return;

        let scrollAmount = 0;
        let animationFrameId: number;
        let isPaused = false;
        let lastTimestamp = 0;
        const scrollInterval = 20;

        const handleEnter = () => (isPaused = true);
        const handleLeave = () => (isPaused = false);

        scrollContainer.addEventListener("mouseenter", handleEnter);
        scrollContainer.addEventListener("touchstart", handleEnter);
        scrollContainer.addEventListener("mouseleave", handleLeave);
        scrollContainer.addEventListener("touchend", handleLeave);

        const scroll = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const delta = timestamp - lastTimestamp;

            if (delta >= scrollInterval && !isPaused) {
                const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

                if (scrollAmount >= maxScroll) {
                    scrollAmount = 0;
                    scrollContainer.scrollTo({ left: 0, behavior: "auto" });
                } else {
                    scrollAmount += 0.5;
                    scrollContainer.scrollTo({
                        left: scrollAmount,
                        behavior: "smooth",
                    });
                }
                lastTimestamp = timestamp;
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            scrollContainer.removeEventListener("mouseenter", handleEnter);
            scrollContainer.removeEventListener("touchstart", handleEnter);
            scrollContainer.removeEventListener("mouseleave", handleLeave);
            scrollContainer.removeEventListener("touchend", handleLeave);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileOpen]);

    const handleNavClick = () => setMobileOpen(false);

    const linkStyle =
        "text-neutral-700 hover:text-primary transition-all duration-300 font-medium relative group";

    return (
        <header
            className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg border-b border-gray-100" : "shadow-md"
                }`}
        >
            {/* ---------------- TOP BAR AVEC DÉFILEMENT AUTO ---------------- */}
            <div className="relative bg-gradient-to-r from-white to-gray-50 border-b border-gray-100">
                <div
                    ref={scrollRef}
                    className="flex items-center text-sm py-3 px-[10%] overflow-x-auto whitespace-nowrap gap-8 hide-scrollbar scroll-smooth touch-pan-x"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <div ref={contentRef} className="flex items-center gap-8 min-w-max flex-1">
                        {/* Message publicitaire 1 */}
                        <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0 min-w-0">
                            <div className="border-2 rounded-lg p-2 border-primary bg-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm flex-shrink-0">
                                <Phone className="w-4 h-4 text-primary group-hover:text-white" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-semibold text-neutral-900 text-sm sm:text-base">
                                    {t("contactSection.phone.title")}
                                </p>
                                <p className="text-neutral-600 text-xs sm:text-sm">
                                    {t("contactSectio.phone.numbers.0")}
                                </p>
                            </div>
                        </div>

                        {/* Language Switcher */}
                        <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0 min-w-0">
                            <div className="flex-shrink-0">
                                <LanguageSwitcher />
                            </div>
                        </div>

                        {/* Message publicitaire 2 */}
                        <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0 min-w-0">
                            <div className="border-2 rounded-lg p-2 border-primary bg-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm flex-shrink-0">
                                <MapPin className="w-4 h-4 text-primary group-hover:text-white" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-semibold text-neutral-900 text-sm sm:text-base">
                                    {t("contactSectio.location.title")}
                                </p>
                                <p className="text-neutral-600 text-xs sm:text-sm">
                                    {t("contactSectio.location.address")}
                                </p>
                            </div>
                        </div>

                        {/* Message publicitaire 3 */}
                        <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0 min-w-0">
                            <div className="border-2 rounded-lg p-2 border-primary bg-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm flex-shrink-0">
                                <Clock className="w-4 h-4 text-primary group-hover:text-white" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-semibold text-neutral-900 text-sm sm:text-base">
                                    {t("contactSectio.hours.title")}
                                </p>
                                <p className="text-neutral-600 text-xs sm:text-sm">
                                    {t("contactSectio.hours.schedule")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------- NAVBAR ---------------- */}
            <nav className="py-4 px-[10%] bg-white">
                <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="w-12 sm:w-16 transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ul className="flex items-center gap-8 text-lg font-medium">
                            {["home", "about", "services", "contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        className={`${linkStyle} py-2 px-1`}
                                    >
                                        {t(item)}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* DEUX BOUTONS A LA PLACE D'UN */}
                        <div className="flex gap-3">
                            <a
                                href="/investir"
                                className="bg-primary/90 text-white py-3 px-6 rounded-full shadow-lg font-semibold transition-all duration-300 active:scale-95 flex items-center gap-2"
                            >
                                {t("investi")}
                                <ChevronRight className="w-4 h-4 translate-x-1 transition-transform duration-300" />
                            </a>
                            <a
                                href="/login"
                                className="bg-secondary/90 text-white py-3 px-6 rounded-full shadow-lg font-semibold transition-all duration-300 active:scale-95 flex items-center gap-2"
                            >
                                {t("my_investment")}
                                <ChevronRight className="w-4 h-4 translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* MOBILE: Hamburger */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            className="p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 active:scale-95 border border-transparent hover:border-gray-200"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <X size={24} className="text-primary" />
                            ) : (
                                <Menu size={24} className="text-primary" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ---------------- MENU MOBILE AVEC OVERLAY ---------------- */}
            {mobileOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
                        onClick={() => setMobileOpen(false)}
                    />

                    <div
                        className={`fixed top-0 left-0 right-0 bg-white z-50 lg:hidden transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-y-0" : "-translate-y-full"
                            }`}
                        style={{ marginTop: "calc(100px + 1px)" }}
                    >
                        <div className="px-[10%] py-6 max-h-[calc(100vh-100px)] overflow-y-auto">
                            <ul className="flex flex-col gap-2">
                                {["home", "about", "services", "produits", "contact"].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item}`}
                                            className="flex items-center justify-between text-lg font-medium text-neutral-700 hover:text-primary py-4 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group border border-transparent hover:border-gray-200 active:bg-gray-100"
                                            onClick={handleNavClick}
                                        >
                                            <span>{t(item)}</span>
                                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </li>
                                ))}

                                {/* DEUX BOUTONS MOBILE */}
                                <li className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                                    <a
                                        href="/investir"
                                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-full shadow-lg font-semibold transition-all duration-300 active:scale-95 text-center"
                                        onClick={handleNavClick}
                                    >
                                        {t("investi")}
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="/login"
                                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-secondary to-primary text-white py-4 px-6 rounded-full shadow-lg font-semibold transition-all duration-300 active:scale-95 text-center"
                                        onClick={handleNavClick}
                                    >
                                        {t("my_investment")}
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </li>

                                <li className="flex justify-center mt-6">
                                    <LanguageSwitcher />
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}

            <style>
                {`
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    
                    @media (max-width: 768px) {
                        .topbar-scroll-container {
                            -webkit-overflow-scrolling: touch;
                            scroll-behavior: smooth;
                        }
                    }
                `}
            </style>
        </header>
    );
}
