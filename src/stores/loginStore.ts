import { create } from "zustand"
import { loginService } from "../services/loginService"
import type { LoginPayload, User } from "../types/loginTypes"

interface InvestissementState {
    user: User | null
    token: string | null
    loading: boolean
    error: string | null

    loginInvestissement: (payload: LoginPayload) => Promise<void>
    logout: () => void
}

export const useInvestissementStore = create<InvestissementState>((set) => ({
    user: null,
    token: null,
    loading: false,
    error: null,

    loginInvestissement: async (payload) => {
        try {
            set({ loading: true, error: null })

            const res = await loginService(payload)

            set({
                user: res.user,
                token: res.token,
                loading: false
            })

            localStorage.setItem("token", res.token)
        } catch (err: any) {
            set({
                error: err.response?.data?.message || "Erreur de connexion",
                loading: false
            })
        }
    },

    logout: () => {
        set({ user: null, token: null, error: null })
        localStorage.removeItem("token")
    }
}))
