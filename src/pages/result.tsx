import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import { Home } from "lucide-react"
import { useUserStore } from "../stores/resultatStore"

const UserInvest: React.FC = () => {
    const { fetchUser, loading, error, ...user } = useUserStore()

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    if (loading)
        return (
            <p className="text-center py-20 text-gray-500">Chargement...</p>
        )
    if (error)
        return (
            <p className="text-center py-20 text-red-500">{error}</p>
        )

    const conseillerPhone = "+237656459046"

    // === TEXTE ACCUEIL POURCENT === 0
    if (user.pourcent === 0) {
        const whatsappMessage = `Bonjour, je souhaite commencer mon investissement auprès de Global Investment. 
Nom: ${user.nom}
Pays: ${user.pays}
Téléphone: ${user.phone}
Réseau: ${user.codePays}
Montant à investir: ${user.MontantIvest}
Merci de me guider pour finaliser mon investissement.`

        const whatsappLink = `https://wa.me/${conseillerPhone}?text=${encodeURIComponent(
            whatsappMessage
        )}`

        return (
            <section className="px-6 py-16 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
                <div className="max-w-xl text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Bienvenue, {user.nom} !
                    </h2>
                    {/* <p className="text-gray-700 mb-4 text-lg">
            Vous êtes sur le point d’investir avec Global Investment. 
            Votre capital de <span className="font-semibold">{user.MontantIvest}</span> vous permettra de recevoir <span className="font-semibold">{user.MontantRecevoir}</span> selon vos choix. 
          </p> */}
                    <p className="text-gray-700 mb-6 text-lg">
                        Pour finaliser votre investissement, contactez votre conseiller dès maintenant. Il vous guidera et activera votre dossier immédiatement.
                    </p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
                    >
                        Contacter le conseiller via WhatsApp
                    </a>
                </div>
            </section>
        )
    }

    // === INFO UTILISATEUR NORMAL
    const infoItems = [
        { title: "Nom", value: user.nom, icon: <Home className="w-6 h-6 text-white" /> },
        { title: "Pays", value: user.pays, icon: <MdOutlineAccountBalanceWallet className="w-6 h-6 text-white" /> },
        { title: "Code Pays", value: user.codePays, icon: <MdOutlineAccountBalanceWallet className="w-6 h-6 text-white" /> },
        { title: "Téléphone", value: user.phone, icon: <MdOutlineAccountBalanceWallet className="w-6 h-6 text-white" /> },
        { title: "Montant Investi", value: `${user.MontantIvest}`, icon: <MdOutlineAccountBalanceWallet className="w-6 h-6 text-white" /> },
        { title: "Montant à Recevoir", value: `${user.MontantRecevoir}`, icon: <MdOutlineAccountBalanceWallet className="w-6 h-6 text-white" /> },
        { title: "Durée", value: user.duree ?? "Non définie", icon: <MdOutlineAccountBalanceWallet className="w-6 h-6 text-white" /> },
    ]

    const getProgressColor = (percent: number) => {
        if (percent < 50) return "bg-red-500"
        if (percent < 80) return "bg-yellow-500"
        return "bg-green-500"
    }

    // WhatsApp contact rapide
    const whatsappMessage = `Bonjour, je souhaite contacter mon conseiller pour mon investissement. 
Nom: ${user.nom}
Pays: ${user.pays}
Téléphone: ${user.phone}
Montant à investir: ${user.MontantIvest}`
    const whatsappLink = `https://wa.me/${conseillerPhone}?text=${encodeURIComponent(
        whatsappMessage
    )}`

    return (
        <section className="px-8 py-16 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">

                {/* TITRE PRINCIPAL */}
                <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
                    Global Investment Dashboard
                </h2>

                {/* Barre de progression */}
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-12 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                        Progression Globale
                    </h3>
                    <div className="w-full bg-gray-200 h-8 rounded-full overflow-hidden">
                        <motion.div
                            className={`${getProgressColor(user.pourcent)} h-8 rounded-full flex items-center justify-center text-white font-semibold`}
                            initial={{ width: 0 }}
                            animate={{ width: `${user.pourcent}%` }}
                            transition={{ duration: 1.5 }}
                        >
                            {user.pourcent}%
                        </motion.div>
                    </div>
                </div>

                {/* Cartes d'information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {infoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-5 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-md text-white cursor-pointer"
                        >
                            <div className="p-3 bg-white/20 rounded-full">{item.icon}</div>
                            <div>
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <p className="text-sm opacity-90">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bouton WhatsApp */}
                <div className="text-center mt-16">
                    <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-green-500 text-white font-semibold px-12 py-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300"
                    >
                        Contacter le conseiller via WhatsApp
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default UserInvest
