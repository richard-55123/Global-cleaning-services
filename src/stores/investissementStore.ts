import { create } from "zustand"
import type { Investissement, InvestissementPayload } from "../types/investissementType"
import {
    createInvestissementService,
    getInvestissementsService
} from "../services/investissemntService"

interface InvestissementState {
    investissements: Investissement[]
    loading: boolean
    error: string | null

    createInvestissement: (
        payload: InvestissementPayload
    ) => Promise<Investissement>

    fetchInvestissements: () => Promise<void>
}

export const useInvestissementStore = create<InvestissementState>((set) => ({
    investissements: [],
    loading: false,
    error: null,

    /* ===============================
       CREATE
    ================================ */
    createInvestissement: async (payload) => {
        try {
            set({ loading: true, error: null })

            const res = await createInvestissementService(payload)

            set((state) => ({
                investissements: [...state.investissements, res.data],
                loading: false
            }))

            return res.data
        } catch (err: any) {
            const message =
                err.response?.data?.message ||
                "Erreur lors de l'investissement"

            set({
                error: message,
                loading: false
            })

            throw new Error(message)
        }
    },

    /* ===============================
       FETCH LIST
    ================================ */
    fetchInvestissements: async () => {
        try {
            set({ loading: true, error: null })

            const data = await getInvestissementsService()

            set({
                investissements: data,
                loading: false
            })
        } catch (err: any) {
            set({
                error:
                    err.response?.data?.message ||
                    "Erreur lors du chargement",
                loading: false
            })
        }
    }
}))
