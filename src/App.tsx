import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"
import { Home } from "./pages"
import InvestissementPage from "./pages/investire"
import LoginInvestissementPage from "./pages/LoginInvestissementPage"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/investir" element={<InvestissementPage />} />
        <Route path="/login" element={<LoginInvestissementPage />} />
      </Routes>
    </>
  )
}

export default App