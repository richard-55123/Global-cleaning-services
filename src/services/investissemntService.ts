import type {
    Investissement,
    InvestissementPayload,
    InvestissementResponse
} from "../types/investissementType"
import api from "./api"

export const createInvestissementService = async (
    payload: InvestissementPayload
): Promise<InvestissementResponse> => {
    const { data } = await api.post<InvestissementResponse>(
        "/invest/create",
        payload
    )
    return data
}

export const getInvestissementsService = async (): Promise<Investissement[]> => {
    const { data } = await api.get<Investissement[]>("/invest/all")
    return data
}

export const getInvestissementByIdService = async (
    id: string
): Promise<Investissement> => {
    const { data } = await api.get<Investissement>(`/invest/${id}`)
    return data
}

export const updateInvestissementService = async (
    id: string,
    payload: Partial<InvestissementPayload>
): Promise<Investissement> => {
    const { data } = await api.patch<Investissement>(`/invest/${id}`, payload)
    return data
}

export const deleteInvestissementService = async (
    id: string
): Promise<{ message: string }> => {
    const { data } = await api.delete<{ message: string }>(`/invest/${id}`)
    return data
}