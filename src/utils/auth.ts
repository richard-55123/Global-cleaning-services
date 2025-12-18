export const hasToken = (): boolean => {
    return Boolean(localStorage.getItem("token"))
}


export const logout = (): void => {
    localStorage.removeItem("token")
    window.location.replace("/")
}
