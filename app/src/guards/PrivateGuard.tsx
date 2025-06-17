import { Navigate, Outlet } from "react-router-dom"

function PrivateGuard() {
  const token = sessionStorage.getItem("user")
  return token ? (
    <Outlet />
  ) : (
    <Navigate replace to="/" />
  )
}

export default PrivateGuard
