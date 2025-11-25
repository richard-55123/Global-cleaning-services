import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"
import { Home } from "./pages"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App