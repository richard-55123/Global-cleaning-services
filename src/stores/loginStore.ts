import { create } from "zustand"
import { loginService } from "../services/loginService"
import type { LoginPayload, User } from "../types/loginTypes"

interface InvestissementState {
    user: User | null
    token: string | null
    loading: boolean
    error: string | null

    loginInvestissement: (payload: LoginPayload) => Promise<{ user: User; token: string }>
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

            return res
        } catch (err: any) {
            const message =
                err.response?.data?.message || "Erreur de connexion"

            set({
                error: message,
                loading: false
            })

            throw new Error(message)
        }
    },

    logout: () => {
        set({ user: null, token: null, error: null })
        localStorage.removeItem("token")
    }
}))
