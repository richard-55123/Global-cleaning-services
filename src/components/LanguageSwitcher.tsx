import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    };

    return (
        <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <select
                id="language"
                value={i18n.language}
                onChange={handleChange}
                className="bg-white border border-secondary text-primary text-sm rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary px-3 py-1.5 shadow-sm hover:shadow-md transition duration-200 cursor-pointer"
            >
                <option value="fr">Français</option>
                <option value="en">English</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
