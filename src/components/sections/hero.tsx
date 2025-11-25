"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Slide {
    id: number;
    titleKey: string;
    textKey: string;
    img: string;
    bg: string;
    layout: "left" | "right";
    button?: {
        textKey: string;
        link: string;
    };
}

const slides: Slide[] = [
    {
        id: 1,
        titleKey: "hero.professional_cleaning.title",
        textKey: "hero.professional_cleaning.text",
        img: "/images/nettoyage.png",
        bg: "/images/desinfection.png",
        layout: "left",
        button: {
            textKey: "hero.professional_cleaning.button",
            link: "#contact"
        }
    },
    {
        id: 2,
        titleKey: "hero.maintenance_disinfection.title",
        textKey: "hero.maintenance_disinfection.text",
        img: "/images/seau.png",
        bg: "/images/desinfection.png",
        layout: "right",
        button: {
            textKey: "hero.maintenance_disinfection.button",
            link: "#contact"
        }
    },
    {
        id: 3,
        titleKey: "hero.for_clients_businesses.title",
        textKey: "hero.for_clients_businesses.text",
        img: "/images/plein.png",
        bg: "/images/desinfection.png",
        layout: "left",
        button: {
            textKey: "hero.for_clients_businesses.button",
            link: "#contact"
        }
    }
];

function Hero() {
    const { t } = useTranslation();
    const [current, setCurrent] = useState<number>(0);

    const nextSlide = (): void => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = (): void => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 7000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <section className="relative h-[90vh] sm:h-[80vh] md:h-[90vh] overflow-hidden font-sans">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    className="absolute inset-0 bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.7)), url(${slides[current].bg})`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative z-10 mx-auto px-6 sm:px-12 md:px-[10%] w-full">
                        <div className={`flex flex-col-reverse md:flex-row items-center gap-y-10 md:gap-y-0 ${slides[current].layout === "right" ? "md:flex-row-reverse" : ""}`}>

                            {/* Image */}
                            <motion.div
                                className="relative flex justify-center md:w-1/2"
                                initial={{ x: slides[current].layout === "left" ? -100 : 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <div className="relative border-4 border-gray-300 transform hover:scale-105 transition-transform duration-700 shadow-card w-full max-w-md sm:max-w-lg md:max-w-full">
                                    <div className="absolute inset-0 bg-white/60 z-0"></div>
                                    <img
                                        src={slides[current].img}
                                        alt={t(slides[current].titleKey)}
                                        className="max-h-[320px] sm:max-h-[400px] md:max-h-[420px] w-full object-contain relative z-10"
                                    />
                                </div>
                            </motion.div>

                            {/* Texte */}
                            <motion.div
                                className="text-white space-y-6 md:w-1/2 md:pl-10 text-center md:text-left"
                                initial={{ x: slides[current].layout === "left" ? 100 : -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <motion.span
                                    className="block w-12 h-[2px] bg-primary mb-4 mx-auto md:mx-0"
                                    initial={{ width: 0 }}
                                    animate={{ width: 48 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                />
                                <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-heading font-bold leading-tight md:leading-[1.2]">
                                    {t(slides[current].titleKey).split(' ').map((word, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.9 + (i * 0.1) }}
                                            className="inline-block mr-1 sm:mr-2"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </h1>
                                <motion.p
                                    className="leading-relaxed text-sm sm:text-base md:text-[1.05rem] text-gray-200 max-w-3xl mx-auto md:mx-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                >
                                    {t(slides[current].textKey)}
                                </motion.p>
                                {slides[current].button && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1.7 }}
                                    >
                                        <a
                                            href={`/${slides[current].button.link}`}
                                            className="mt-4 bg-primary hover:bg-secondary transition text-white font-semibold px-6 py-3 rounded w-full md:w-auto relative overflow-hidden group inline-block"
                                        >
                                            <span className="relative z-10">{t(slides[current].button.textKey)} →</span>
                                        </a>
                                    </motion.div>
                                )}
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-8" : "bg-white bg-opacity-50"}`}
                    />
                ))}
            </div>

            {/* Navigation */}
            <motion.button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-4 sm:p-5 rounded-md text-white hover:bg-primary transition z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.button>

            <motion.button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-4 sm:p-5 rounded-md text-white hover:bg-primary transition z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.button>
        </section>
    );
}

export default Hero;
