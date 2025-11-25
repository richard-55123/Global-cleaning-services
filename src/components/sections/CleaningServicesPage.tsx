import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CleaningCard from "./CleaningCard";

interface Service {
    title: string;
    description: string;
    image: string;
}

const CleaningServicesPage: React.FC = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    // Récupération des données traduites avec assertion de type
    const cleaningData: Service[] = t("cleaningPage.services", { returnObjects: true }) as Service[];

    // AUTOPLAY - change les cartes toutes les 4 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 3) % cleaningData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [cleaningData.length]);

    // COMPUTE CARDS VISIBLE (3 à la fois)
    const visibleCards: Service[] =
        cleaningData.slice(activeIndex, activeIndex + 3).length === 3
            ? cleaningData.slice(activeIndex, activeIndex + 3)
            : [
                ...cleaningData.slice(activeIndex),
                ...cleaningData.slice(0, 3 - (cleaningData.length - activeIndex)),
            ];

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* BACKGROUND IMAGE LIGHT */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/images/teams.png')" }}
            />
            <div className="absolute inset-0 bg-white/70" />

            {/* CONTENT */}
            <div className="relative w-full">
                {/* HERO */}
                <section className="w-full max-w-7xl px-[10%] grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h4 className="text-sm font-semibold text-primary">
                            {t("cleaningPage.header.subtitle")}
                        </h4>
                        <h1 className="mt-4 text-3xl font-bold leading-tight text-black/70">
                            {t("cleaningPage.header.title")}
                        </h1>
                    </div>
                </section>

                {/* CAROUSEL */}
                <div className="px-[10%] mx-auto py-12 overflow-hidden">
                    <div key={activeIndex} className="grid md:grid-cols-3 gap-6 animate-fadeSlide">
                        {visibleCards.map((card, i) => (
                            <CleaningCard
                                key={i}
                                title={card.title}
                                description={card.description}
                                image={card.image} // /public/images/xxxx.png
                                isActive
                            />
                        ))}
                    </div>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mt-4 pb-10">
                    {Array.from({ length: Math.ceil(cleaningData.length / 3) }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all ${index === Math.floor(activeIndex / 3) ? "bg-blue-900" : "bg-gray-300"
                                }`}
                            onClick={() => setActiveIndex(index * 3)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CleaningServicesPage;
