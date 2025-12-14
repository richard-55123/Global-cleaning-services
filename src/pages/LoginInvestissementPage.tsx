"use client"
import React, { useState, useMemo, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useInvestissementStore } from "../stores/loginStore"
import { countries, type CountryConfig } from "../components/ux/countries"

const DEFAULT_COUNTRY = "Cameroun"

const LoginInvestissementPage: React.FC = () => {
    const { t } = useTranslation()
    const { loginInvestissement, loading, error } = useInvestissementStore()

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
       HANDLERS
    ================================ */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!canSubmit) return

        await loginInvestissement({
            codePays: form.codePays,
            phone: form.phone,
            password: form.password
        })
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
       CLOSE DROPDOWN OUTSIDE CLICK
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

    /* ===============================
       RENDER
    ================================ */
    return (
        <section
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[10%] bg-gradient-to-b from-[#E0FFFC] to-white overflow-hidden py-12"
        >
            {/* IMAGE DE FOND DISCRÈTE */}
            <div className="absolute inset-0 opacity-10">
                <img
                    src="/images/result.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CARTE */}
            <motion.div
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-3xl font-bold text-center mb-4 text-black/80">
                    {t("login.title")}
                </h2>
                <p className="text-center text-black/70 mb-8">
                    {t("login.subtitle")}
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* SELECTEUR DE PAYS */}
                    <div ref={wrapperRef} className="relative">
                        <label className="text-sm text-black/60 mb-1 block">Pays</label>
                        <div
                            onClick={() => setOpen(true)}
                            className="flex items-center justify-between px-5 py-4 border rounded-xl cursor-pointer"
                        >
                            <span>{searchCountry}</span>
                            <ChevronDown />
                        </div>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    className="absolute z-20 bg-white shadow-xl rounded-xl mt-2 w-full max-h-60 overflow-auto"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="p-3 border-b">
                                        <input
                                            autoFocus
                                            placeholder="Rechercher un pays..."
                                            className="w-full px-4 py-3 border rounded-lg"
                                            value={searchCountry}
                                            onChange={(e) => setSearchCountry(e.target.value)}
                                        />
                                    </div>
                                    <ul>
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

                    {/* CODE PAYS (readonly) */}
                    <div className="flex flex-col">
                        <label className="text-sm text-black/60 mb-1">Code pays</label>
                        <input
                            value={form.codePays}
                            readOnly
                            className="w-full px-5 py-4 border rounded-xl bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* TELEPHONE */}
                    <div className="flex flex-col">
                        <label className="text-sm text-black/60 mb-1">{t("login.fields.phone")}</label>
                        <input
                            type="tel"
                            placeholder={`${t("login.fields.phone")} (${selectedCountry.minLength}-${selectedCountry.maxLength})`}
                            className={`w-full px-5 py-4 border rounded-xl ${phoneValid ? "border-gray-300" : "border-red-400"}`}
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                    </div>

                    {/* MOT DE PASSE */}
                    <div className="flex flex-col">
                        <label className="text-sm text-black/60 mb-1">{t("login.fields.password")}</label>
                        <input
                            type="password"
                            placeholder={t("login.fields.password")}
                            className={`w-full px-5 py-4 border rounded-xl ${passwordValid ? "border-gray-300" : "border-red-400"}`}
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* BUTTON */}
                    <button
                        disabled={!canSubmit || loading}
                        className="w-full bg-primary text-white py-4 rounded-full font-semibold shadow-xl disabled:opacity-50 transition-all hover:bg-primary/90"
                    >
                        {loading ? t("login.loading") : t("login.button")}
                    </button>
                </form>

                <p className="text-center text-sm text-black/60 mt-5">
                    {t("login.noAccount")}{" "}
                    <a href="/investir" className="text-primary font-semibold hover:underline">
                        {t("login.register")}
                    </a>
                </p>
            </motion.div>
        </section>
    )
}

export default LoginInvestissementPage
