import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const GlobalWorldMap: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
            {/* Carte du monde en arrière-plan */}
            <img
                src="/images/map.png" // remplace par ton SVG ou PNG de la carte
                alt="Carte du monde Global Investissement+"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            {/* Contenu principal */}
            <div className="relative z-10 max-w-5xl text-center px-6">
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70 mb-4">
                    {t("globalWorld.title")}
                </h2>
                <p className="text-gray-700 text-lg md:text-xl mb-6">
                    {t("globalWorld.subtitle")}
                </p>
                <p className="text-gray-600 text-sm md:text-base mb-8">
                    {t("globalWorld.description")}
                </p>
                <Link
                    to="/investir"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                    {t("globalWorld.cta")}
                </Link>
            </div>

            {/* Exemples de points d'investissement */}
            <span className="absolute top-1/4 left-1/3 w-4 h-4 bg-secondary rounded-full animate-pulse"></span>
            <span className="absolute top-1/2 right-1/4 w-4 h-4 bg-secondary rounded-full animate-pulse"></span>
            <span className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-secondary rounded-full animate-pulse"></span>
        </section>
    );
};

export default GlobalWorldMap;
