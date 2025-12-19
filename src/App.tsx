import { Routes, Route } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"

import LoginInvestissementPage from "./pages/LoginInvestissementPage"
// import UserInvest from "./pages/result"
import InvestissementPage from "./pages/investire"
import { Home } from "./pages"
import UserInvest from "./pages/result"
import { hasToken } from "./utils/auth"
import DashboardPage from "./pages/DashboardPage"

const App: React.FC = () => {

  const isAuth = hasToken()

  return (
    <Routes>

      <Route path="/" element={<RootLayout />}>
        <Route index element={isAuth ? <UserInvest /> : <Home />} />
        <Route path="/conseil" element={<DashboardPage />} />
      </Route>
      <Route path="/login" element={<LoginInvestissementPage />} />
      <Route path="/investir" element={<InvestissementPage />} />

      {/* <Route path="/" element={<RootLayout />}>
        <Route index element={<UserInvest />} />
      </Route> */}

    </Routes>
  )
}

export default App
