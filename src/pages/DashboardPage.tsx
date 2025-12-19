"use client"

import { useState, useEffect } from "react"
import { Eye, Edit, Trash2, Search, ChevronLeft, ChevronRight, X, Save } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInvestissementStore } from "../stores/investissementStore"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function DashboardPage() {
    const {
        investissements,
        loading,
        fetchInvestissements,
        deleteInvestissement,
        updateInvestissement,
        fetchInvestissementById,
        currentInvestissement
    } = useInvestissementStore()

    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [editForm, setEditForm] = useState({
        nom: "",
        pays: "",
        phone: "",
        codePays: "",
        reseauMobile: "",
        MontantIvest: "",
        MontantRecevoir: "",
        pourcent: "",
        duree: ""
    })

    const itemsPerPage = 8

    useEffect(() => {
        fetchInvestissements()
    }, [])

    // Charger un investissement pour la vue/édition
    const handleViewInvestissement = async (id: string) => {
        try {
            await fetchInvestissementById(id)
            setSelectedItemId(id)
            setIsViewModalOpen(true)
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const handleEditInvestissement = async (id: string) => {
        try {
            await fetchInvestissementById(id)
            if (currentInvestissement) {
                setEditForm({
                    nom: currentInvestissement.nom || "",
                    pays: currentInvestissement.pays || "",
                    phone: currentInvestissement.phone || "",
                    codePays: currentInvestissement.codePays || "",
                    reseauMobile: currentInvestissement.reseauMobile || "",
                    MontantIvest: currentInvestissement.MontantIvest || "",
                    MontantRecevoir: currentInvestissement.MontantRecevoir || "",
                    pourcent: currentInvestissement.pourcent?.toString() || "",
                    duree: currentInvestissement.duree?.toString() || ""
                })
                setSelectedItemId(id)
                setIsEditModalOpen(true)
            }
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedItemId) return

        try {
            await updateInvestissement(selectedItemId, {
                ...editForm,
                pourcent: editForm.pourcent ? parseFloat(editForm.pourcent) : undefined,
                duree: editForm.duree ? parseInt(editForm.duree) : undefined
            })
            toast.success("Investissement mis à jour avec succès")
            setIsEditModalOpen(false)
            setSelectedItemId(null)
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const filteredData = investissements.filter(inv => {
        return inv.nom.toLowerCase().includes(search.toLowerCase()) ||
            inv.phone.includes(search) ||
            inv.pays.toLowerCase().includes(search.toLowerCase())
    })

    const totalPages = Math.ceil(filteredData.length / itemsPerPage)
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handleDelete = async (id: string) => {
        try {
            await deleteInvestissement(id)
            toast.success("Investissement supprimé avec succès")
            setDeleteConfirm(null)
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('fr-FR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount)
    }

    const formatDate = (dateString: string | Date) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }

    // Calculer le bénéfice
    const calculateBenefice = (investi: string, recevoir: string) => {
        const investiNum = Number(investi) || 0
        const recevoirNum = Number(recevoir) || 0
        return recevoirNum - investiNum
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
            <ToastContainer position="top-right" />

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                    Tableau de Bord
                </h1>
                <p className="text-gray-600 mt-2">
                    Gérez vos investissements et surveillez vos performances
                </p>
            </div>



            {/* Main Content */}
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                {/* Table Header */}
                <div className="p-4 md:p-6 border-b">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-heading font-bold text-gray-900">
                                Liste des Investissements
                            </h2>
                            <p className="text-gray-600 mt-1 text-sm md:text-base">
                                {filteredData.length} investissement(s) trouvé(s)
                            </p>
                        </div>

                        <div className="w-full md:w-auto">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Client</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Pays</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Téléphone</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Investi</th>
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">À Recevoir</th>


                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan={8} className="py-8 text-center">
                                        <div className="flex justify-center">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                        </div>
                                    </td>
                                </tr>
                            ) : paginatedData.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="py-8 text-center text-gray-500">
                                        Aucun investissement trouvé
                                    </td>
                                </tr>
                            ) : (
                                paginatedData.map((inv, index) => {
                                    return (
                                        <motion.tr
                                            key={inv.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                                        <span className="text-white font-bold">
                                                            {inv.nom.charAt(0)}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">{inv.nom}</p>
                                                        <p className="text-sm text-gray-500">{inv.reseauMobile}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg">🇫🇷</span>
                                                    <span className="font-medium">{inv.pays}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div>
                                                    <p className="font-medium">{inv.codePays} {inv.phone}</p>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-primary">
                                                    {formatCurrency(Number(inv.MontantIvest))}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-secondary">
                                                    {formatCurrency(Number(inv.MontantRecevoir))}
                                                </div>
                                            </td>

                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleViewInvestissement(inv.id)}
                                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                                        title="Voir détails"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleEditInvestissement(inv.id)}
                                                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                                                        title="Modifier"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setDeleteConfirm(deleteConfirm === inv.id ? null : inv.id)}
                                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                                            title="Supprimer"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>

                                                        {deleteConfirm === inv.id && (
                                                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border p-3 z-10">
                                                                <p className="text-sm text-gray-900 mb-3">
                                                                    Confirmer la suppression ?
                                                                </p>
                                                                <div className="flex gap-2">
                                                                    <button
                                                                        onClick={() => handleDelete(inv.id)}
                                                                        className="flex-1 px-3 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
                                                                    >
                                                                        Supprimer
                                                                    </button>
                                                                    <button
                                                                        onClick={() => setDeleteConfirm(null)}
                                                                        className="flex-1 px-3 py-1.5 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition"
                                                                    >
                                                                        Annuler
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden">
                    {loading ? (
                        <div className="py-8 text-center">
                            <div className="flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            </div>
                        </div>
                    ) : paginatedData.length === 0 ? (
                        <div className="py-8 text-center text-gray-500">
                            Aucun investissement trouvé
                        </div>
                    ) : (
                        <div className="p-4 space-y-4">
                            {paginatedData.map((inv) => {
                                return (
                                    <motion.div
                                        key={inv.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white border rounded-xl p-4 shadow-sm"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                                    <span className="text-white font-bold text-lg">
                                                        {inv.nom.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{inv.nom}</h3>
                                                    <p className="text-sm text-gray-500">{inv.reseauMobile}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                <button
                                                    onClick={() => handleViewInvestissement(inv.id)}
                                                    className="p-2 text-blue-600"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleEditInvestissement(inv.id)}
                                                    className="p-2 text-green-600"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteConfirm(deleteConfirm === inv.id ? null : inv.id)}
                                                    className="p-2 text-red-600"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mb-3">
                                            <div>
                                                <p className="text-xs text-gray-500">Pays</p>
                                                <p className="font-medium flex items-center gap-1">
                                                    <span>🇫🇷</span> {inv.pays}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Téléphone</p>
                                                <p className="font-medium">{inv.codePays} {inv.phone}</p>
                                            </div>

                                        </div>

                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="text-center p-2 bg-blue-50 rounded-lg">
                                                <p className="text-xs text-gray-500">Investi</p>
                                                <p className="font-bold text-primary text-sm">
                                                    {formatCurrency(Number(inv.MontantIvest))}
                                                </p>
                                            </div>
                                            <div className="text-center p-2 bg-green-50 rounded-lg">
                                                <p className="text-xs text-gray-500">À Recevoir</p>
                                                <p className="font-bold text-secondary text-sm">
                                                    {formatCurrency(Number(inv.MontantRecevoir))}
                                                </p>
                                            </div>

                                        </div>

                                        {/* Delete confirmation mobile */}
                                        {deleteConfirm === inv.id && (
                                            <div className="mt-3 p-3 bg-red-50 rounded-lg">
                                                <p className="text-sm text-gray-900 mb-2">
                                                    Confirmer la suppression ?
                                                </p>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleDelete(inv.id)}
                                                        className="flex-1 px-3 py-2 bg-red-600 text-white text-sm rounded-lg"
                                                    >
                                                        Supprimer
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteConfirm(null)}
                                                        className="flex-1 px-3 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg"
                                                    >
                                                        Annuler
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 md:px-6 py-4 border-t">
                        <div className="text-sm text-gray-600">
                            Page {currentPage} sur {totalPages}
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                            >
                                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                            </button>

                            {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                                let pageNum
                                if (totalPages <= 3) {
                                    pageNum = i + 1
                                } else if (currentPage === 1) {
                                    pageNum = i + 1
                                } else if (currentPage === totalPages) {
                                    pageNum = totalPages - 2 + i
                                } else {
                                    pageNum = currentPage - 1 + i
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-8 h-8 md:w-10 md:h-10 rounded-lg text-sm md:text-base ${currentPage === pageNum
                                            ? "bg-primary text-white"
                                            : "border hover:bg-gray-50"
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                )
                            })}

                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                            >
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal de visualisation */}
            <AnimatePresence>
                {isViewModalOpen && currentInvestissement && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Détails de l'investissement
                                    </h3>
                                    <button
                                        onClick={() => setIsViewModalOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                            <span className="text-white font-bold text-xl">
                                                {currentInvestissement.nom.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{currentInvestissement.nom}</h4>
                                            <p className="text-gray-600">{currentInvestissement.reseauMobile}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-gray-50 p-3 rounded-xl">
                                            <p className="text-xs text-gray-500">Pays</p>
                                            <p className="font-medium">{currentInvestissement.pays}</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-xl">
                                            <p className="text-xs text-gray-500">Code Pays</p>
                                            <p className="font-medium">{currentInvestissement.codePays}</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-xl">
                                            <p className="text-xs text-gray-500">Téléphone</p>
                                            <p className="font-medium">{currentInvestissement.phone}</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-xl">
                                            <p className="text-xs text-gray-500">Réseau</p>
                                            <p className="font-medium">{currentInvestissement.reseauMobile}</p>
                                        </div>
                                        {currentInvestissement.pourcent && (
                                            <div className="bg-gray-50 p-3 rounded-xl">
                                                <p className="text-xs text-gray-500">Pourcentage</p>
                                                <p className="font-medium">{currentInvestissement.pourcent}%</p>
                                            </div>
                                        )}
                                        {currentInvestissement.duree && (
                                            <div className="bg-gray-50 p-3 rounded-xl">
                                                <p className="text-xs text-gray-500">Durée</p>
                                                <p className="font-medium">{currentInvestissement.duree} jours</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-600">Montant Investi</p>
                                                <p className="text-2xl font-bold text-primary">
                                                    {formatCurrency(Number(currentInvestissement.MontantIvest))}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">À Recevoir</p>
                                                <p className="text-2xl font-bold text-secondary">
                                                    {formatCurrency(Number(currentInvestissement.MontantRecevoir))}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-3 pt-3 border-t">
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm text-gray-600">Bénéfice</p>
                                                <p className={`text-lg font-bold ${calculateBenefice(currentInvestissement.MontantIvest, currentInvestissement.MontantRecevoir) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(calculateBenefice(currentInvestissement.MontantIvest, currentInvestissement.MontantRecevoir))}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-sm text-gray-500">
                                        <p>Créé le: {formatDate(currentInvestissement.createdat)}</p>
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            onClick={() => {
                                                setIsViewModalOpen(false)
                                                handleEditInvestissement(currentInvestissement.id)
                                            }}
                                            className="flex-1 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
                                        >
                                            Modifier
                                        </button>
                                        <button
                                            onClick={() => setIsViewModalOpen(false)}
                                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Modal d'édition */}
            <AnimatePresence>
                {isEditModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <form onSubmit={handleUpdateSubmit} className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Modifier l'investissement
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={() => setIsEditModalOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Informations de base */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Nom complet *
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.nom}
                                                onChange={(e) => setEditForm({ ...editForm, nom: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Pays *
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.pays}
                                                onChange={(e) => setEditForm({ ...editForm, pays: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Code Pays *
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.codePays}
                                                onChange={(e) => setEditForm({ ...editForm, codePays: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Téléphone *
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.phone}
                                                onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Montants et options */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Réseau Mobile *
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.reseauMobile}
                                                onChange={(e) => setEditForm({ ...editForm, reseauMobile: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Montant Investi *
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={editForm.MontantIvest}
                                                onChange={(e) => setEditForm({ ...editForm, MontantIvest: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Montant à Recevoir *
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={editForm.MontantRecevoir}
                                                onChange={(e) => setEditForm({ ...editForm, MontantRecevoir: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Pourcentage (%)
                                                </label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={editForm.pourcent}
                                                    onChange={(e) => setEditForm({ ...editForm, pourcent: e.target.value })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Durée (jours)
                                                </label>
                                                <input
                                                    type="number"
                                                    value={editForm.duree}
                                                    onChange={(e) => setEditForm({ ...editForm, duree: e.target.value })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bénéfice calculé */}
                                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-gray-600">Bénéfice calculé</p>
                                            <p className={`text-xl font-bold mt-1 ${calculateBenefice(editForm.MontantIvest, editForm.MontantRecevoir) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {formatCurrency(calculateBenefice(editForm.MontantIvest, editForm.MontantRecevoir))}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-600">Rendement</p>
                                            <p className="text-xl font-bold text-primary mt-1">
                                                {editForm.pourcent ? `${editForm.pourcent}%` : "N/A"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-6">
                                    <button
                                        type="submit"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
                                    >
                                        <Save className="w-4 h-4" />
                                        Enregistrer les modifications
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsEditModalOpen(false)}
                                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}