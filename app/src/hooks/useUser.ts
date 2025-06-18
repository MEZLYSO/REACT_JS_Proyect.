import { useState } from "react"
import fetchData from "../services/fetchData"

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

  const initialStateTime = {
    StartTime: "",
    EndTime: "",
    ElapsedTime: ""
  }

  const [user, setUser] = useState(initialState)
  const [time, setTime] = useState(initialStateTime)

  const { timeUser } = fetchData()

  const getInfo = () => {
    const data = localStorage.getItem("user")
    if (data) {
      setUser(JSON.parse(data))
    }
  }

  const getTime = async () => {
    const date = await timeUser(user.IDParticipant)
    setTime(date.data[0])
  }

  return { user, getInfo, getTime, time }
}

export default useUser
