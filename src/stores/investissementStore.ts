import { create } from "zustand"
import type { Investissement, InvestissementPayload } from "../types/investissementType"
import { createInvestissementService, deleteInvestissementService, getInvestissementByIdService, getInvestissementsService, updateInvestissementService } from "../services/investissemntService"


interface InvestissementState {
    investissements: Investissement[]
    currentInvestissement: Investissement | null
    loading: boolean
    error: string | null

    // CREATE
    createInvestissement: (
        payload: InvestissementPayload
    ) => Promise<Investissement>

    // READ
    fetchInvestissements: () => Promise<void>
    fetchInvestissementById: (id: string) => Promise<void>
    getInvestissementById: (id: string) => Investissement | null

    // UPDATE
    updateInvestissement: (
        id: string,
        payload: Partial<InvestissementPayload>
    ) => Promise<Investissement>

    // DELETE
    deleteInvestissement: (id: string) => Promise<void>

    // UTILS
    clearCurrent: () => void
    clearError: () => void
}

export const useInvestissementStore = create<InvestissementState>((set, get) => ({
    investissements: [],
    currentInvestissement: null,
    loading: false,
    error: null,

    /* ===============================
       CREATE
    ================================ */
    createInvestissement: async (payload) => {
        try {
            set({ loading: true, error: null })

            const res = await createInvestissementService(payload)

            // Stocker le token si présent
            if (res.token) {
                localStorage.setItem("token", res.token)
            }

            const newInvestissement = res.data

            set((state) => ({
                investissements: [newInvestissement, ...state.investissements],
                currentInvestissement: newInvestissement,
                loading: false
            }))

            return newInvestissement
        } catch (err: any) {
            const message =
                err.response?.data?.message ||
                "Erreur lors de la création de l'investissement"

            set({
                error: message,
                loading: false
            })

            throw new Error(message)
        }
    },

    /* ===============================
       FETCH ALL
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
                    "Erreur lors du chargement des investissements",
                loading: false
            })
        }
    },

    /* ===============================
       FETCH BY ID
    ================================ */
    fetchInvestissementById: async (id: string) => {
        try {
            set({ loading: true, error: null })

            const data = await getInvestissementByIdService(id)

            set({
                currentInvestissement: data,
                loading: false
            })
        } catch (err: any) {
            const message =
                err.response?.data?.message ||
                "Erreur lors du chargement de l'investissement"

            set({
                error: message,
                loading: false
            })

            throw new Error(message)
        }
    },

    /* ===============================
       GET BY ID (from cache)
    ================================ */
    getInvestissementById: (id: string) => {
        const { investissements } = get()
        return investissements.find(inv => inv.id === id) || null
    },

    /* ===============================
       UPDATE
    ================================ */
    updateInvestissement: async (id: string, payload: Partial<InvestissementPayload>) => {
        try {
            set({ loading: true, error: null })

            const updated = await updateInvestissementService(id, payload)

            set((state) => ({
                investissements: state.investissements.map(inv =>
                    inv.id === id ? { ...inv, ...updated } : inv
                ),
                currentInvestissement: state.currentInvestissement?.id === id
                    ? { ...state.currentInvestissement, ...updated }
                    : state.currentInvestissement,
                loading: false
            }))

            return updated
        } catch (err: any) {
            const message =
                err.response?.data?.message ||
                "Erreur lors de la mise à jour de l'investissement"

            set({
                error: message,
                loading: false
            })

            throw new Error(message)
        }
    },

    /* ===============================
       DELETE
    ================================ */
    deleteInvestissement: async (id: string) => {
        try {
            set({ loading: true, error: null })

            await deleteInvestissementService(id)

            set((state) => ({
                investissements: state.investissements.filter(inv => inv.id !== id),
                currentInvestissement: state.currentInvestissement?.id === id
                    ? null
                    : state.currentInvestissement,
                loading: false
            }))
        } catch (err: any) {
            const message =
                err.response?.data?.message ||
                "Erreur lors de la suppression de l'investissement"

            set({
                error: message,
                loading: false
            })

            throw new Error(message)
        }
    },

    /* ===============================
       UTILS
    ================================ */
    clearCurrent: () => set({ currentInvestissement: null }),
    clearError: () => set({ error: null })
}))