import { useState } from "react"
import fetchData from "../services/fetchData"
import { useNavigate } from "react-router-dom"

const useLogin = () => {

  const initialState = {
    username: "",
    password: ""
  }

  const [userdata, setUserData] = useState(initialState)

  const handleChange = (e: any) => {
    setUserData({
      ...userdata,
      [e.target.id]: e.target.value
    })
  }

  const { loginUser } = fetchData()
  const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const response = await loginUser(userdata.username, userdata.password)
    sessionStorage.setItem("user", JSON.stringify(response.data[0]))
    navigate("/profile", { replace: true })
  }

  return { handleChange, handleSubmit }
}

export default useLogin
