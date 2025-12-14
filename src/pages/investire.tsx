"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    ChevronDown,
    CheckCircle,
    AlertCircle,
    ArrowUp,
    Eye
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { useInvestissementStore } from "../stores/investissementStore"
import { countries, type CountryConfig } from "../components/ux/countries"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const DEFAULT_COUNTRY = "Cameroun"

const InvestissementPage: React.FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { createInvestissement, loading } = useInvestissementStore()

    const wrapperRef = useRef<HTMLDivElement>(null)
    const defaultCountry = countries.find(c => c.name === DEFAULT_COUNTRY)!

    const [selectedCountry, setSelectedCountry] =
        useState<CountryConfig>(defaultCountry)

    const [search, setSearch] = useState(defaultCountry.name)
    const [open, setOpen] = useState(false)

    const [form, setForm] = useState({
        nom: "",
        phone: "",
        reseauMobile: defaultCountry.mobileNetworks[0],
        montant: defaultCountry.minInvestment.toString(),
        password: "",
        confirmPassword: ""
    })

    /* ===============================
       UI HELPERS
    ================================ */

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () =>
            document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const filteredCountries = useMemo(
        () =>
            countries.filter(c =>
                c.name.toLowerCase().includes(search.toLowerCase())
            ),
        [search]
    )

    /* ===============================
       VALIDATIONS
    ================================ */

    const montantNumber = Number(form.montant)
    const montantValid = montantNumber >= selectedCountry.minInvestment
    const montantRecevoir = montantNumber * 10

    const phoneValid =
        form.phone.length >= selectedCountry.minLength &&
        form.phone.length <= selectedCountry.maxLength

    const passwordValid = form.password.length >= 6
    const passwordsMatch =
        form.password === form.confirmPassword &&
        form.confirmPassword.length > 0

    const canSubmit =
        form.nom &&
        phoneValid &&
        montantValid &&
        passwordValid &&
        passwordsMatch

    /* ===============================
       HANDLERS
    ================================ */

    const handleCountrySelect = (country: CountryConfig) => {
        setSelectedCountry(country)
        setSearch(country.name)
        setForm({
            ...form,
            reseauMobile: country.mobileNetworks[0],
            montant: country.minInvestment.toString(),
            phone: ""
        })
        setOpen(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!canSubmit) {
            toast.error("Veuillez remplir correctement le formulaire.")
            return
        }

        try {
            await createInvestissement({
                nom: form.nom,
                pays: selectedCountry.name,
                phone: form.phone,
                codePays: selectedCountry.callingCode,
                reseauMobile: form.reseauMobile,
                MontantIvest: montantNumber.toString(),
                MontantRecevoir: montantRecevoir.toString(),
                password: form.password
            })

            toast.success("Investissement créé avec succès")

            // Optionnel : reset
            // setForm({...})
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    /* ===============================
       RENDER
    ================================ */

    return (
        <section className="py-24 px-4 sm:px-6 md:px-[8%] bg-gradient-to-b from-[#E0FFFC] to-white relative">
            <button
                onClick={() => navigate("/")}
                className="absolute top-6 left-6 p-3 rounded-full bg-white shadow-md"
            >
                <ArrowUp size={24} />
            </button>

            {/* HEADER */}
            <div className="text-center mb-16">
                <motion.h2
                    className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] font-heading font-bold text-black/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {t("invest.title")}
                </motion.h2>
                <p className="max-w-2xl mx-auto text-black/70 mt-4">
                    {t("invest.subtitle")}
                </p>
            </div>

            {/* CARD */}
            <motion.div
                className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {/* IMAGE */}
                <div className="hidden md:flex items-center justify-center bg-[#E0FFFC]">
                    <img
                        src="/images/result.png"
                        className="w-full h-full object-cover"
                        alt="Invest"
                    />
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                    {/* NOM */}
                    <div className="flex flex-col">
                        <label className="text-sm text-black/60 mb-1">{t("invest.fields.nom")}</label>
                        <input
                            placeholder={t("invest.fields.nom")}
                            className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-primary"
                            value={form.nom}
                            onChange={(e) => setForm({ ...form, nom: e.target.value })}
                        />
                    </div>

                    {/* COUNTRY */}
                    <div ref={wrapperRef} className="relative">
                        <label className="text-sm text-black/60 mb-1 block">
                            {t("invest.country")}
                        </label>

                        <div
                            onClick={() => setOpen(true)}
                            className="flex items-center justify-between px-5 py-4 border rounded-xl cursor-pointer"
                        >
                            <span>{search}</span>
                            <ChevronDown />
                        </div>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    className="absolute z-20 bg-white shadow-xl rounded-xl mt-2 w-full"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="p-3 border-b">
                                        <input
                                            autoFocus
                                            placeholder={t("invest.searchCountry")}
                                            className="w-full px-4 py-3 border rounded-lg"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>

                                    <ul className="max-h-60 overflow-auto">
                                        {filteredCountries.map(c => (
                                            <li
                                                key={c.cca2}
                                                onClick={() => handleCountrySelect(c)}
                                                className="px-4 py-3 hover:bg-[#D0FFF8] cursor-pointer rounded-lg"
                                            >
                                                {c.name}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* PHONE */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            value={selectedCountry.callingCode}
                            readOnly
                            className="sm:w-28 px-4 py-4 border rounded-xl bg-gray-100"
                        />
                        <input
                            placeholder={`${t("invest.fields.phone")} (${selectedCountry.minLength}-${selectedCountry.maxLength})`}
                            className={`flex-1 px-5 py-4 border rounded-xl ${phoneValid ? "" : "border-red-400"}`}
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                    </div>

                    {/* NETWORK */}
                    <div className="flex flex-col">
                        <label className="text-sm text-black/60 mb-1">{t("invest.fields.reseau")}</label>
                        <select
                            className="w-full px-5 py-4 border rounded-xl"
                            value={form.reseauMobile}
                            onChange={(e) => setForm({ ...form, reseauMobile: e.target.value })}
                        >
                            {selectedCountry.mobileNetworks.map(net => (
                                <option key={net}>{net}</option>
                            ))}
                        </select>
                    </div>

                    {/* AMOUNT */}
                    <div className="flex flex-col">
                        <label className="text-sm text-black/60 mb-1">Montant</label>
                        <input
                            type="number"
                            min={selectedCountry.minInvestment}
                            className={`w-full px-5 py-4 border rounded-xl ${montantValid ? "" : "border-red-400"}`}
                            value={form.montant}
                            onChange={(e) => setForm({ ...form, montant: e.target.value })}
                        />
                        <p className="text-sm text-black/60 mt-2">
                            Min : {selectedCountry.minInvestment} {selectedCountry.currency}
                        </p>
                    </div>

                    {/* RESULT */}
                    <div className="bg-[#E0FFFC] rounded-xl p-5 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-black/60">{t("invest.receive")}</p>
                            <p className="text-2xl font-bold text-secondary">
                                {montantRecevoir || 0} {selectedCountry.currency}
                            </p>
                        </div>
                        {montantValid && <CheckCircle className="text-primary w-8 h-8" />}
                    </div>

                    {/* PASSWORD */}
                    <div className="flex flex-col">
                        <label className="text-sm text-black/60 mb-1">{t("invest.fields.password")}</label>
                        <input
                            type="password"
                            placeholder={t("invest.fields.password")}
                            className={`w-full px-5 py-4 border rounded-xl ${passwordValid ? "" : "border-red-400"}`}
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div className="flex flex-col">
                        <label className="text-sm text-black/60 mb-1">{t("invest.fields.confirmPassword")}</label>
                        <input
                            type="password"
                            placeholder={t("invest.fields.confirmPassword")}
                            className={`w-full px-5 py-4 border rounded-xl ${passwordsMatch ? "" : "border-red-400"}`}
                            value={form.confirmPassword}
                            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                        />
                        {!passwordsMatch && form.confirmPassword && (
                            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {t("invest.passwordMismatch")}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            disabled={!canSubmit || loading}
                            className="flex-1 bg-primary text-white py-4 rounded-full font-semibold shadow-xl disabled:opacity-50"
                        >
                            {loading ? t("invest.loading") : t("invest.button")}
                        </button>

                        <Link
                            to="/login"
                            className="flex-1 flex items-center justify-center gap-2 py-4 border border-primary rounded-full font-semibold text-primary hover:bg-primary hover:text-white transition"
                        >
                            <Eye size={18} /> Voir mon investissement
                        </Link>
                    </div>
                </form>
            </motion.div>

            {/* TOASTIFY */}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
        </section>
    )
}

export default InvestissementPage
