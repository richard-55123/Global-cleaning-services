export interface InvestissementPayload {
    nom: string
    pays: string
    phone: string
    codePays: string
    reseauMobile: string
    MontantIvest: string
    MontantRecevoir: string
    password: string
}

export interface Investissement {
    id: string
    nom: string
    pays: string
    phone: string
    codePays: string
    reseauMobile: string
    MontantIvest: string
    MontantRecevoir: string
    createdat: string
}

export interface InvestissementResponse {
    message: string
    data: Investissement
}
