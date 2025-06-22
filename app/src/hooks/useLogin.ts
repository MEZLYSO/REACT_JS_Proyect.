import { useState } from "react"
import fetchData from "../services/fetchData"
import { useNavigate } from "react-router-dom"
import { PrivatePages, PublicPages } from "../types/pages"

const useLogin = () => {

  const initialState = {
    username: "",
    password: ""
  }

  const [userdata, setUserData] = useState(initialState)
  const [status, setStatus] = useState()

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
    try {
      const response = await loginUser(userdata.username, userdata.password)
      localStorage.setItem("user", JSON.stringify(response.data[0]))
      navigate(PrivatePages.HOME, { replace: true })
    } catch (err: any) {
      setStatus(err)
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem("user")
    navigate(PublicPages.LOGIN, { replace: true })
  }

  return { handleChange, handleSubmit, handleLogOut, status, setStatus }
}

export default useLogin
