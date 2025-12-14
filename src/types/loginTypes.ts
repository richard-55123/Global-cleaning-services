export interface LoginPayload {
    codePays: string
    phone: string
    password: string
}

export interface User {
    id: string
    nom: string
    phone: string
    codePays: string
    pays: string
}

export interface AuthResponse {
    token: string
    user: User
    message: string
}
