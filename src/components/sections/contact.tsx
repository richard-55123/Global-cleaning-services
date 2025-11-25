import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import backgroundImage from "/images/contact.png";
import { useTranslation } from "react-i18next";

const ContactSection: React.FC = () => {
    const { t } = useTranslation();

    // Récupérer les numéros de téléphone en tant que tableau de string
    const phoneNumbers: string[] = t("contactSection.phone.numbers", { returnObjects: true }) as string[];

    return (
        <section className="relative w-full py-12 px-[10%] bg-gray-50 overflow-hidden" id="contact">
            <div
                className="absolute top-0 right-0 h-full w-[40%] opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className="mx-auto grid md:grid-cols-2 gap-10 relative z-10">
                {/* FORMULAIRE */}
                <div>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] mb-6 text-black/70">
                        {t("contactSection.title")}
                    </h2>
                    <p className="mb-6 leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl">
                        {t("contactSection.description")}
                    </p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder={t("contactSection.form.name")}
                                required
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="email"
                                placeholder={t("contactSection.form.email")}
                                required
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder={t("contactSection.form.phone")}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="text"
                                placeholder={t("contactSection.form.website")}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <textarea
                            placeholder={t("contactSection.form.message")}
                            rows={5}
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:opacity-90 text-white font-semibold py-3 rounded-md transition"
                        >
                            {t("contactSection.form.submit")}
                        </button>
                    </form>
                </div>

                {/* INFOS CONTACT */}
                <div className="text-black/70 p-8 flex flex-col justify-center space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-md shadow-md">
                            <FaMapMarkerAlt className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red">
                                {t("contactSection.location.title")}
                            </h3>
                            <p className="text-gray-600">{t("contactSection.location.address")}</p>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-md shadow-md">
                            <FaPhoneAlt className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red">
                                {t("contactSection.phone.title")}
                            </h3>
                            {phoneNumbers.map((number, index) => (
                                <p key={index} className="text-gray-600">{number}</p>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    <div className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-md shadow-md">
                            <FaEnvelope className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red">
                                {t("contactSection.hours.title")}
                            </h3>
                            <p className="text-gray-600">{t("contactSection.hours.schedule")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
