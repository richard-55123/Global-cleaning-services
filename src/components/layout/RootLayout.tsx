import { Navigate, useLocation } from "react-router-dom"
import { hasToken } from "../../utils/auth"
import PrivateLayout from "../PrivateLayoute/PrivateLayout"
import { Layout } from "."

const RootLayout: React.FC = () => {
    const isAuth = hasToken()
    const location = useLocation()

    // Si l'utilisateur est connecté et essaie d'aller sur "/"
    if (isAuth && location.pathname === "/") {
        return <Navigate to="/invest/me" replace />
    }

    // Si l'utilisateur n'est PAS connecté et va sur une route privée
    if (!isAuth && location.pathname.startsWith("/invest")) {
        return <Navigate to="/" replace />
    }

    return isAuth ? <PrivateLayout /> : <Layout />
}

export default RootLayout
