import { create } from "zustand";
import api from "../services/api";

interface UserState {
    nom: string;
    pays: string;
    codePays: string;
    phone: string;
    MontantIvest: string;
    MontantRecevoir: string;
    pourcent: number;
    duree: string | null;
    loading: boolean;
    error: string | null;
    fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
    nom: "",
    pays: "",
    codePays: "",
    phone: "",
    MontantIvest: "",
    MontantRecevoir: "",
    pourcent: 0,
    duree: null,
    loading: false,
    error: null,
    fetchUser: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.post("/invest/me");
            set({ ...response.data, loading: false });
        } catch (err: any) {
            set({ error: err.message || "Erreur API", loading: false });
        }
    },
}));
