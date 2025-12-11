"use client";
import React, { type JSX } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Clock } from "lucide-react";
import { ImMagicWand } from "react-icons/im";
import { useTranslation } from "react-i18next";

interface Step {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
    image?: string;
    bg?: string;
}

const HowItWorks: React.FC = () => {
    const { t } = useTranslation();

    const steps: Step[] = [
        {
            id: 1,
            icon: <CalendarCheck className="w-8 h-8 text-white" />,
            title: t("howItWorks.steps.0.title"),
            description: t("howItWorks.steps.0.description"),
            image: "/images/plan.png",
            bg: "bg-white"
        },
        {
            id: 2,
            icon: <Clock className="w-8 h-8 text-white" />,
            title: t("howItWorks.steps.1.title"),
            description: t("howItWorks.steps.1.description"),
            image: "/images/plann.png",
            bg: "bg-[#E0FFFC]"
        },
        {
            id: 3,
            icon: <ImMagicWand className="w-8 h-8 text-white" />,
            title: t("howItWorks.steps.2.title"),
            description: t("howItWorks.steps.2.description"),
            image: "/images/result.png",
            bg: "bg-white"
        }
    ];

    return (
        <section className="py-16 px-6 sm:px-12 md:px-[10%]">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.p
                    className="text-sm text-primary uppercase mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t("howItWorks.subtitle")}
                </motion.p>
                <motion.h2
                    className="text-[1.8rem] md:text-[3.1rem] text-black/70 font-heading font-bold leading-[1.2] mb-14"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {t("howItWorks.title")}
                </motion.h2>
                <motion.p
                    className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {t("howItWorks.description")}
                </motion.p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className={`relative rounded-xl shadow-lg overflow-hidden ${step.bg} cursor-pointer flex flex-col items-center text-center border-b-4 border-primary`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {step.image && (
                            <motion.img
                                src={step.image}
                                alt={step.title}
                                className="w-full object-contain max-h-64"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.35 + index * 0.2 }}
                            />
                        )}
                        <div className="p-6 text-center">
                            <motion.h3
                                className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                            >
                                {step.title}
                            </motion.h3>
                            <motion.p
                                className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                            >
                                {step.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Texte et bouton après les cartes */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-lg md:text-xl text-black/70 mb-6 mx-auto max-w-2xl">
                    {t("howItWorks.cta")}
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300"
                >
                    {t("howItWorks.button")}
                </a>
            </motion.div>
        </section>
    );
};

export default HowItWorks;
