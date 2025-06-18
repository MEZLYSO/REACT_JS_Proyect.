import { useState } from "react"

const useUser = () => {

  const initialState = {
    IDUser: 0,
    Username: "",
    Userpassword: "",
    IDParticipant: "",
    NameParticipant: "",
    Category: "",
    LastName_1: "",
    LastName_2: ""
  }

  const [user, setUser] = useState(initialState)

  const getInfo = () => {
    const data = localStorage.getItem("user")
    if (data) {
      setUser(JSON.parse(data))
    }
  }

  return { user, getInfo }
}

export default useUser
