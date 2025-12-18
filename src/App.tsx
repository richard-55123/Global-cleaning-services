import { Routes, Route } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"

import LoginInvestissementPage from "./pages/LoginInvestissementPage"
import UserInvest from "./pages/result"
import InvestissementPage from "./pages/investire"
import { Home } from "./pages"

const App: React.FC = () => {
  return (
    <Routes>

      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<LoginInvestissementPage />} />
      <Route path="/investir" element={<InvestissementPage />} />

      <Route path="/invest" element={<RootLayout />}>
        <Route path="me" element={<UserInvest />} />
      </Route>

    </Routes>
  )
}

export default App
