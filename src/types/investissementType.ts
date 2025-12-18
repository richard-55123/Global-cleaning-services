export interface Investissement {
    id: string
    nom: string
    pays: string
    phone: string
    codePays: string
    reseauMobile: string
    MontantIvest: string
    MontantRecevoir: string
    code: string
    password: string
    pourcent: number
    duree: number | null
    createdat: string
    updatedat: string
}

export interface InvestissementPayload {
    nom: string
    pays: string
    phone: string
    codePays: string
    reseauMobile: string
    MontantIvest: string
}

export interface InvestissementResponse {
    message: string
    data: Investissement
    token: string
}
