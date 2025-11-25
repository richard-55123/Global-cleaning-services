import React from "react";
import { useTranslation } from "react-i18next";

const MapCard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full mx-auto">
            <div className="relative w-full h-96">
                {/* Google Maps Embed (affiche l’emplacement final) */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.5551309979273!2d9.7140065!3d4.0625546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610cffffffffff%3A0x3d65a7a69427e614!2sGlobal%20cleaning%20services!5e0!3m2!1sfr!2scm!4v1732530000000!5m2!1sfr!2scm"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 border-0 rounded-lg"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Card Overlay */}
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

                    {/* Bouton Directions → ton URL exacte */}
                    <a
                        href="https://www.google.com/maps/dir/4.0785282,9.7939599/Global+cleaning+services,+3486+Bd+de+la+R%C3%A9publique,+Douala/@4.0729634,9.6701209,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x10610cffffffffff:0x3d65a7a69427e614!2m2!1d9.7140065!2d4.0625546"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 text-center"
                    >
                        {t("mapCard.directions")}
                    </a>

                    {/* Voir plus grand */}
                    <a
                        href="https://www.google.com/maps/place/Global+cleaning+services,+3486+Bd+de+la+R%C3%A9publique,+Douala"
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
