"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutNaoussi() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-white px-[10%] pb-16" id="about">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <p className="text-primary text-sm uppercase font-semibold mb-2">
                    {t("about.titleTag")}
                </p>

                <h2 className="text-[1.8rem] md:text-[3rem] font-heading font-bold text-black/70 leading-[1.2] mb-6">
                    {t("about.title")}
                </h2>

                <p className="text-black/70 text-[1rem] md:text-[1.1rem] leading-relaxed max-w-3xl">
                    {t("about.desc")}
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                {/* Left Content */}
                <div className="flex-1">
                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#E0FFFC] p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 mb-8"
                    >
                        {/* Item 1 */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <ShieldCheck className="text-primary w-7 h-7" />
                                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary">
                                    {t("about.feature1.title")}
                                </h3>
                            </div>
                            <p className="text-black/70 text-sm">
                                {t("about.feature1.desc")}
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <Leaf className="text-primary w-7 h-7" />
                                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary">
                                    {t("about.feature2.title")}
                                </h3>
                            </div>
                            <p className="text-black/70 text-sm">
                                {t("about.feature2.desc")}
                            </p>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <p className="text-black/70 leading-relaxed mb-10 text-[1rem] md:text-[1.1rem]">
                        {t("about.text2")}
                    </p>

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300"
                    >
                        {t("about.cta")}
                    </motion.a>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex-1 relative flex justify-center"
                >
                    <img
                        src="/images/teamss.png"
                        alt="Agent de nettoyage Naoussi Services"
                        className="rounded-2xl w-full max-w-md object-cover shadow-xl"
                    />

                    {/* Experience Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-primary/20 rounded-2xl px-10 py-6 text-center"
                    >
                        <h2 className="text-3xl font-bold text-primary">25+</h2>
                        <p className="text-black/70 font-medium text-sm">
                            {t("about.experience")}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
