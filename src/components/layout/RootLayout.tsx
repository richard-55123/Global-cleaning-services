
import { hasToken } from "../../utils/auth"
import PrivateLayout from "../PrivateLayoute/PrivateLayout"
import { Layout } from "."

const RootLayout: React.FC = () => {
    const isAuth = hasToken()


    // Si l'utilisateur est connecté et essaie d'aller sur "/"
    // if (isAuth && location.pathname === "/") {
    //     return <Navigate to="/" replace />
    // }

    // Si l'utilisateur n'est PAS connecté et va sur une route privée
    // if (!isAuth && location.pathname.startsWith("/")) {
    //     return <Navigate to="/" replace />
    // }

    return isAuth ? <PrivateLayout /> : <Layout />
}

export default RootLayout
