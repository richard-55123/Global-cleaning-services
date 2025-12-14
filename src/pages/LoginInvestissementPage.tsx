"use client"
import React, { useState, useMemo, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowUp } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useInvestissementStore } from "../stores/loginStore"
import { countries, type CountryConfig } from "../components/ux/countries"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const DEFAULT_COUNTRY = "Cameroun"

const LoginInvestissementPage: React.FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { loginInvestissement, loading } = useInvestissementStore()

    const wrapperRef = useRef<HTMLDivElement>(null)
    const defaultCountry = countries.find(c => c.name === DEFAULT_COUNTRY)!

    const [selectedCountry, setSelectedCountry] = useState<CountryConfig>(defaultCountry)
    const [searchCountry, setSearchCountry] = useState(defaultCountry.name)
    const [open, setOpen] = useState(false)

    const [form, setForm] = useState({
        codePays: defaultCountry.callingCode,
        phone: "",
        password: ""
    })

    /* ===============================
       VALIDATIONS
    ================================ */
    const phoneValid =
        form.phone.length >= selectedCountry.minLength &&
        form.phone.length <= selectedCountry.maxLength

    const passwordValid = form.password.length > 0
    const canSubmit = phoneValid && passwordValid

    /* ===============================
       SUBMIT
    ================================ */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!canSubmit) {
            toast.error("Veuillez remplir correctement le formulaire.")
            return
        }

        try {
            await loginInvestissement(form)

            toast.success("Connexion réussie")

            // navigate("/dashboard") // si besoin
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const handleCountrySelect = (country: CountryConfig) => {
        setSelectedCountry(country)
        setSearchCountry(country.name)
        setForm({
            ...form,
            codePays: country.callingCode,
            phone: ""
        })
        setOpen(false)
    }

    /* ===============================
       CLOSE DROPDOWN
    ================================ */
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const filteredCountries = useMemo(
        () => countries.filter(c => c.name.toLowerCase().includes(searchCountry.toLowerCase())),
        [searchCountry]
    )

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#E0FFFC] to-white">
            <button
                onClick={() => navigate("/")}
                className="absolute top-6 left-6 p-3 rounded-full bg-white shadow-md"
            >
                <ArrowUp size={24} />
            </button>

            <motion.div
                className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-3xl font-bold text-center mb-4">
                    {t("login.title")}
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* SELECT PAYS */}
                    <div ref={wrapperRef} className="relative">
                        <div
                            onClick={() => setOpen(true)}
                            className="flex justify-between px-5 py-4 border rounded-xl cursor-pointer"
                        >
                            {searchCountry}
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
                                    <input
                                        autoFocus
                                        className="w-full px-4 py-3 border-b"
                                        value={searchCountry}
                                        onChange={(e) => setSearchCountry(e.target.value)}
                                    />
                                    {filteredCountries.map(c => (
                                        <div
                                            key={c.cca2}
                                            onClick={() => handleCountrySelect(c)}
                                            className="px-4 py-3 hover:bg-[#D0FFF8] cursor-pointer"
                                        >
                                            {c.name}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <input
                        readOnly
                        value={form.codePays}
                        className="w-full px-5 py-4 border rounded-xl bg-gray-100"
                    />

                    <input
                        type="tel"
                        placeholder="Téléphone"
                        className="w-full px-5 py-4 border rounded-xl"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Mot de passe"
                        className="w-full px-5 py-4 border rounded-xl"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />

                    <button
                        disabled={!canSubmit || loading}
                        className="w-full bg-primary text-white py-4 rounded-full disabled:opacity-50"
                    >
                        {loading ? "Connexion..." : "Se connecter"}
                    </button>
                </form>

                <p className="text-center text-sm text-black/60 mt-5"> {t("login.noAccount")}{" "} <Link to="/investir" className="text-primary font-semibold hover:underline"> {t("login.register")} </Link> </p>

                <ToastContainer position="top-right" autoClose={4000} />
            </motion.div>
        </section>
    )
}

export default LoginInvestissementPage
