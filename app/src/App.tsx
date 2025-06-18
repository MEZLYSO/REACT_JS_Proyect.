import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import PrivateGuard from "./guards/PrivateGuard"
import PublicGuard from "./guards/PublicGuard"
import Home from "./pages/Home"
import { PrivatePages } from "./types/pages"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicGuard />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route index element={<Login />} />
        </Route>
        <Route element={<PrivateGuard />}>
          <Route path={PrivatePages.PROFILE} element={<Profile />} />
          <Route path={PrivatePages.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
