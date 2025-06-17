import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import PrivateGuard from "./guards/PrivateGuard"
import PublicGuard from "./guards/PublicGuard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicGuard />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<PrivateGuard />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
