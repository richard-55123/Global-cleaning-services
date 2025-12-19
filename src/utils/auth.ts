export const getToken = (): string | null => {
    return localStorage.getItem("token")
}

export const hasToken = (): boolean => {
    return !!getToken()
}

export const logout = () => {
    localStorage.removeItem("token")
}
