"use client";
import { motion } from "framer-motion";
import { Eye, Target, HeartHandshake } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function VisionMissionValues() {
    const { t } = useTranslation();

    const items = [
        {
            icon: <Eye className="w-10 h-10" />,
            title: t("identity.vision.title"),
            desc: t("identity.vision.desc"),
        },
        {
            icon: <Target className="w-10 h-10" />,
            title: t("identity.mission.title"),
            desc: t("identity.mission.desc"),
        },
        {
            icon: <HeartHandshake className="w-10 h-10" />,
            title: t("identity.values.title"),
            desc: t("identity.values.desc"),
        },
    ];

    return (
        <section
            className="w-full bg-primary text-white py-20 px-[10%] bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/images/mission.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/90"></div>

            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="uppercase text-sm font-semibold tracking-wide text-blue-200 mb-2">
                        {t("identity.tag")}
                    </p>

                    <h2 className="text-[2rem] md:text-[3rem] font-heading font-bold leading-tight mb-4">
                        {t("identity.title")}
                    </h2>

                    <p className="text-blue-100 leading-relaxed text-[1rem] md:text-[1.1rem]">
                        {t("identity.desc")}
                    </p>
                </motion.div>

                {/* 3 Cards */}
                <div className="grid md:grid-cols-3 gap-10">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="mb-5">{item.icon}</div>

                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
