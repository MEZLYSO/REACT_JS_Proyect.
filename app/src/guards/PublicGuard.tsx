import { Navigate, Outlet } from "react-router-dom"

function PublicGuard() {
  const token = sessionStorage.getItem("user")
  return !token ? (
    <Outlet />
  ) : (
    <Navigate replace to="/profile" />
  )
}

export default PublicGuard
