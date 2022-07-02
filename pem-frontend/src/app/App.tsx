import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import { getTodayYearMonthISO } from "./util/util"

function App() {
  const yearMonth = getTodayYearMonthISO()

  const RootRedirect = () => {
    return <Navigate replace to={`/expenses/${yearMonth}`} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/expenses/:yearMonth" element={<MainPage />} />
        <Route path="/" element={<RootRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
