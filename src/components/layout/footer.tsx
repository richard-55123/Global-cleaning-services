import React from "react";
import { Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

type Link = { name: string; href: string };
type SocialLink = { href: string; icon: React.ReactNode };

const Footer: React.FC = () => {
    const { t } = useTranslation();

    // Récupération des données depuis la traduction
    const aboutDescription: string = t("footer.about.description");
    const socialLinks: SocialLink[] = [
        { href: "https://maligah.com/entreprises/details/Global%20cleaning%20services", icon: <Facebook size={20} /> },
        // { href: "https://www.instagram.com/naoussi.services.official/", icon: <Instagram size={20} /> },
        // { href: "#", icon: <Linkedin size={20} /> },
        // { href: "#", icon: <Twitter size={20} /> },
    ];
    const quickLinks: Link[] = t("footer.quickLinks", { returnObjects: true }) as Link[];
    const bottomLinks: Link[] = t("footer.bottomLinks", { returnObjects: true }) as Link[];
    const contactInfo = t("footer.contactInfo", { returnObjects: true }) as {
        address: string;
        phone: string[];
        hours: string;
        email: string;
    };

    return (
        <footer className="bg-primary text-white">
            <div className="px-[10%] mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* À propos */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/images/logo.png" alt={t("footer.logoAlt")} className="h-20 w-auto" />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{aboutDescription}</p>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-3">
                        {t("footer.about.followUs")}
                    </h3>
                    <div className="flex gap-4 text-lg">
                        {socialLinks.map((s, idx) => (
                            <a
                                key={idx}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary transition"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Liens rapides */}
                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-4">
                        {t("footer.quickLinksTitle")}
                    </h3>
                    <ul className="space-y-2 leading-relaxed text-[.95rem] md:text-[1.07rem]">
                        {quickLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.href} className="text-gray-300 hover:text-secondary transition">
                                    → {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-4">
                        {t("footer.contact.title")}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                        <strong>{t("footer.contact.address")}:</strong> {contactInfo.address}
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                        <strong>{t("footer.contact.phone")}:</strong>{" "}
                        {contactInfo.phone.join(", ")}
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                        <strong>{t("footer.contact.email")}:</strong> {contactInfo.email}
                    </p>
                    <p className="text-gray-300 text-sm">
                        <strong>{t("footer.contact.hours")}:</strong> {contactInfo.hours}
                    </p>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-4">
                        {t("footer.newsletter.title")}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{t("footer.newsletter.description")}</p>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder={t("footer.newsletter.placeholder")}
                            className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                        <button
                            type="submit"
                            className="w-full bg-secondary text-white py-2 rounded-md hover:opacity-90 transition"
                        >
                            {t("footer.newsletter.button")}
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="bg-fcc-blue text-white py-3">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-center md:text-left">
                        © 2025 Global cleaning services. Tous droits réservés. <br className="md:hidden" />
                        <span className="block md:inline text-center">
                            {t("footer.bottom.poweredBy")}{" "}
                            <a
                                href="https://naoussi-services.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold hover:underline"
                            >
                                HEMBA RICHARD
                            </a>
                        </span>
                    </p>
                    <div className="flex gap-6 mt-2 md:mt-0">
                        {bottomLinks.map((link, idx) => (
                            <a key={idx} href={link.href} className="hover:underline text-[.95rem] md:text-[1.07rem]">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
