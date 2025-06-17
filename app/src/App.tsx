import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import PrivateGuard from "./guards/PrivateGuard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
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
