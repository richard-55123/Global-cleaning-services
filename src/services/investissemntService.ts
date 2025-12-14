import type { Investissement, InvestissementPayload, InvestissementResponse } from "../types/investissementType"
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
    const { data } = await api.get("/investissement")
    return data
}
