import React from "react";
import { useTranslation } from "react-i18next";

interface ProductItem {
    id: number;
    text: string;
}

const ProductsSection: React.FC = () => {
    const { t } = useTranslation();

    // Récupération des produits depuis la traduction
    const products: ProductItem[] = t("productsSection.products", { returnObjects: true }) as ProductItem[];
    const paragraphs: string[] = t("productsSection.paragraphs", { returnObjects: true }) as string[];

    return (
        <section className="relative bg-white py-16 px-[10%] overflow-hidden">
            <div
                className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">

                {/* IMAGE */}
                <div className="relative flex-1 w-full">
                    <div
                        className="absolute -left-10 lg:-left-20 top-5 lg:top-10 h-[110%] w-[85%] lg:w-[80%] bg-gradient-to-br from-primary/20 to-primary/5 -z-0 hidden lg:block border-2 border-primary/30"
                        style={{ borderRadius: "180px 35px 180px 25px", transform: "rotate(-2deg)" }}
                        aria-hidden="true"
                    />

                    <div className="relative w-full h-full flex justify-center items-center">
                        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                            <img
                                src="/images/vente.png"
                                alt={t("productsSection.imageAlt")}
                                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                                width={600}
                                height={400}
                            />

                            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-2/3 lg:w-3/5">
                                <div className="relative">
                                    <img
                                        src="/images/marque.png"
                                        alt={t("productsSection.brandsImageAlt")}
                                        className="w-full h-auto rounded-xl shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105"
                                        loading="lazy"
                                        width={400}
                                        height={300}
                                    />

                                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-primary/90 text-white px-4 py-3 lg:px-6 lg:py-4 rounded-xl text-center shadow-2xl min-w-[100px] lg:min-w-[120px]">
                                        <p className="text-xl lg:text-2xl xl:text-3xl font-bold drop-shadow-sm">
                                            {t("productsSection.satisfiedClients.number")}
                                        </p>
                                        <p className="leading-tight text-xs lg:text-sm font-medium text-white/95 mt-1">
                                            {t("productsSection.satisfiedClients.text")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEXTE */}
                <div className="flex-1 w-full flex flex-col justify-center space-y-6 lg:space-y-8">

                    <p className="uppercase text-gray-500 tracking-widest text-sm lg:text-base text-center lg:text-left font-semibold">
                        {t("productsSection.header")}
                    </p>

                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70 text-center lg:text-left">
                        {t("productsSection.title.part1")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {t("productsSection.title.highlight")}
                        </span>
                    </h2>

                    <div className="space-y-4 lg:space-y-6">
                        {paragraphs.map((text, index) => (
                            <p key={index} className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 text-center lg:text-left">
                                {text}
                            </p>
                        ))}
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-2xl mx-auto lg:mx-0">
                        {products.map((product) => (
                            <li key={product.id} className="flex items-start group">
                                <span className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full border-2 border-primary text-primary mr-3 mt-1 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                                    ✓
                                </span>
                                <span className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70">
                                    {product.text}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center lg:justify-start pt-4">
                        <a href="#contact">
                            <button className="relative bg-gradient-to-r from-primary to-primary/90 hover:from-secondary hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
                                <span className="relative z-10 flex items-center">
                                    {t("productsSection.button")}
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
