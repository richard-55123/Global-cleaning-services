import React from "react";
import {
    Home,
    Briefcase,
    Leaf,
} from "lucide-react";
import { MdCleaningServices, MdOutlineConstruction } from "react-icons/md";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CleanServices: React.FC = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t("clean.service1.title"),
            description: t("clean.service1.desc"),
            icon: <Home className="w-6 h-6 text-primary" />,
        },
        {
            title: t("clean.service2.title"),
            description: t("clean.service2.desc"),
            icon: <Briefcase className="w-6 h-6 text-primary" />,
        },
        {
            title: t("clean.service3.title"),
            description: t("clean.service3.desc"),
            icon: <MdOutlineConstruction className="w-6 h-6 text-primary" />,
        },
        {
            title: t("clean.service4.title"),
            description: t("clean.service4.desc"),
            icon: <Leaf className="w-6 h-6 text-primary" />,
        },
        {
            title: t("clean.service5.title"),
            description: t("clean.service5.desc"),
            icon: <MdCleaningServices className="w-6 h-6 text-primary" />,
        },
    ];

    return (
        <section className="px-[10%] py-16 bg-white" id="services">
            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* Image */}
                <div className="flex-1">
                    <img
                        src="/images/r4.png"
                        alt="Naoussi Services - Cleaning Service"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <p className="text-primary text-sm uppercase font-semibold mb-2">
                        {t("clean.tag")}
                    </p>

                    <h2 className="text-[1.8rem] md:text-[3rem] font-heading font-bold text-black/70 leading-[1.2] mb-6">
                        {t("clean.title")}
                    </h2>

                    <p className="text-black/70 text-[1rem] md:text-[1.1rem] leading-relaxed max-w-3xl mb-8">
                        {t("clean.desc")}
                    </p>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#E0FFFC] rounded-lg mb-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div>{service.icon}</div>
                                <div>
                                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-black/70 text-[1rem] md:text-[1.1rem] leading-relaxed max-w-3xl mb-6">
                        {t("clean.text2")}
                    </p>

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300"
                    >
                        {t("clean.cta")}
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default CleanServices;
