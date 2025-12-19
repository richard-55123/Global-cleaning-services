import React, { useEffect, useState } from "react"
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom"
import { User, LogOut, Menu, X } from "lucide-react"
import clsx from "clsx"

import logo from "/images/logo.png"
import { logout as logoutUtil } from "../../utils/auth"
import { useUserStore } from "../../stores/resultatStore"
import { useInvestissementStore } from "../../stores/loginStore"

const menuItems = [
    { title: "Dashboard", path: "/", icon: User },
]

const PrivateLayout: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const { nom, pays, phone, fetchUser } = useUserStore()
    const logoutStore = useInvestissementStore((s) => s.logout)

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    const handleLogout = () => {
        logoutStore()
        logoutUtil()
        navigate("/")
    }

    return (
        <div className="relative h-screen flex bg-gray-50 overflow-hidden">

            <aside
                className={clsx(
                    "fixed inset-y-0 left-0 z-40 w-72 bg-primary text-white",
                    "transform transition-transform duration-300 lg:static lg:translate-x-0",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-20 flex items-center justify-between px-6 border-b border-white/20">
                    <img src={logo} alt="Logo" className="h-10 object-contain" />
                    <button
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="px-6 py-10 space-y-3">
                    {menuItems.map(({ title, path, icon: Icon }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setSidebarOpen(false)}
                            className={clsx(
                                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all",
                                "hover:bg-white/15",
                                location.pathname === path && "bg-white/25 font-semibold"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="text-sm">{title}</span>
                        </Link>
                    ))}
                </nav>

                {/* Logout */}
                <div className="mt-auto p-6">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/30 hover:bg-white/15 transition"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="text-sm font-medium">Déconnexion</span>
                    </button>
                </div>
            </aside>

            {/* Overlay mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* ===== MAIN ===== */}
            <div className="flex-1 flex flex-col overflow-auto">

                {/* HEADER */}
                <header className="relative bg-white/80 backdrop-blur border-b border-gray-200">
                    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 h-20">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden"
                            >
                                <Menu className="w-6 h-6 text-gray-700" />
                            </button>

                            {/* TYPO INSPIRED */}
                            <div>
                                <p className="text-sm font-semibold text-primary">
                                    Espace Investisseur
                                </p>
                                <h1 className="text-lg sm:text-xl font-bold text-black/70 leading-tight">
                                    Bienvenue, {nom || "Utilisateur"}
                                </h1>
                            </div>
                        </div>

                        {/* USER INFO (VISIBLE MOBILE) */}
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden xs:block">
                                <p className="text-sm font-medium text-gray-700">
                                    {nom}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {pays} · {phone}
                                </p>
                            </div>
                            <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                {nom?.charAt(0) || "U"}
                            </div>
                        </div>
                    </div>
                </header>

                {/* CONTENT */}
                <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default PrivateLayout
