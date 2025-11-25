import React from "react";
import { useTranslation } from "react-i18next";

const MapCard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full mx-auto">
            <div className="relative w-full h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.682137520985!2d9.701782!3d4.0541115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113d8a59571b3%3A0x89488edd65bdf25c!2sNaoussi%20Service!5e0!3m2!1sfr!2scm!4v1758625614255!5m2!1sfr!2scm"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 border-0 rounded-lg"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="absolute top-4 left-4 bg-white shadow-lg rounded-md p-3 w-72">
                    <h2 className="text-base font-semibold">
                        {t("mapCard.name")}
                    </h2>
                    <p className="text-xs text-gray-600 leading-snug">
                        {t("mapCard.addressLine1")} <br />
                        {t("mapCard.addressLine2")}
                    </p>
                    <div className="flex items-center mt-1">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="ml-1 text-xs font-medium">{t("mapCard.rating")}</span>
                        <span className="ml-1 text-gray-500 text-xs">({t("mapCard.reviews")})</span>
                    </div>
                    <a
                        href="https://www.google.com/maps/dir//3P32%2BJPV,+Rue+Drouot,+Douala/@4.0809031,9.8013358,15z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 text-center"
                    >
                        {t("mapCard.directions")}
                    </a>
                    <a
                        href="https://www.google.com/maps/place/3P32%2BJPV,+Rue+Drouot,+Douala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-1 text-xs text-blue-500 hover:underline"
                    >
                        {t("mapCard.viewLarger")}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MapCard;
