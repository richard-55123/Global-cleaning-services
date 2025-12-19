import { Routes, Route, Navigate } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import LoginInvestissementPage from "./pages/LoginInvestissementPage"
import InvestissementPage from "./pages/investire"
import { Home } from "./pages"
import UserInvest from "./pages/result"
import { hasToken } from "./utils/auth"
import DashboardPage from "./pages/DashboardPage"

const App: React.FC = () => {
  const isAuth = hasToken()

  return (
    <Routes>
      {/* Routes principales avec layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={isAuth ? <UserInvest /> : <Home />} />
        <Route path="conseil" element={<DashboardPage />} />
      </Route>

      {/* Routes sans layout */}
      <Route path="/login" element={<LoginInvestissementPage />} />
      <Route path="/investir" element={<InvestissementPage />} />

      {/* Redirection pour les routes inconnues */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App