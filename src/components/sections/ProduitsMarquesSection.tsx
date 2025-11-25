import { motion } from "framer-motion";
import { Tag, ShoppingBag } from "lucide-react";
import type { FC } from "react";

const produits = [
    "Gel nettoyant",
    "Crème à récurer",
    "Gel javel",
    "Nettoyant",
];

const marques = ["Domestos", "AKS", "CIF", "Maratem", "Mr Bee"];

const ProduitsMarquesSection: FC = () => {
    return (
        <section className="px-[10%] py-16 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                    Produits & Marques
                </h2>
                <p className="text-gray-500 mt-2 text-lg max-w-2xl mx-auto">
                    Découvrez nos produits de nettoyage professionnels ainsi que les
                    marques partenaires reconnues pour leur qualité.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Produits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <ShoppingBag className="text-blue-600 w-8 h-8" />
                        <h3 className="text-2xl font-bold text-gray-700">Produits</h3>
                    </div>

                    <div className="grid gap-4">
                        {produits.map((item, idx) => (
                            <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
                                <span className="text-lg text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Marques */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Tag className="text-green-600 w-8 h-8" />
                        <h3 className="text-2xl font-bold text-gray-700">Marques</h3>
                    </div>

                    <div className="grid gap-4">
                        {marques.map((item, idx) => (
                            <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
                                <span className="text-lg text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProduitsMarquesSection;