export interface Investissement {
    id: string
    nom: string
    pays: string
    phone: string
    codePays: string
    reseauMobile: string
    MontantIvest: string
    MontantRecevoir: string
    pourcent?: number
    duree?: number
    createdat: string | Date
    password?: string
}

export interface InvestissementPayload {
    nom: string
    pays: string
    phone: string
    codePays: string
    reseauMobile: string
    MontantIvest: string
    MontantRecevoir: string
    password: string
    pourcent?: number
    duree?: number
}

export interface InvestissementResponse {
    success: boolean
    message?: string
    token?: string
    data: Investissement
}