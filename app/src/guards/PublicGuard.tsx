import { Navigate, Outlet } from "react-router-dom"

function PublicGuard() {
  const token = localStorage.getItem("user")
  return !token ? (
    <Outlet />
  ) : (
    <Navigate replace to="/profile" />
  )
}

export default PublicGuard
