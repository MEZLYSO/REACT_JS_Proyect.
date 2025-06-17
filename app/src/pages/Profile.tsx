import { useNavigate } from "react-router-dom"

function Profile() {

  const navigate = useNavigate()
  const handleLogOut = () => {
    sessionStorage.removeItem("user")
    navigate("/", { replace: true })
  }

  return (
    <div>
      This profile welcome
      <button
        onClick={handleLogOut}
      >LogOut</button>
    </div>
  )
}

export default Profile
