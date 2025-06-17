import { useEffect, useState } from "react"

const useUser = () => {

  const initialState = {
    ID: 0,
    Username: ""
  }

  const [user, setUser] = useState(initialState)

  useEffect(() => {
    const data = localStorage.getItem("user")
    try {
      data ? setUser(JSON.parse(data)) : null
    } catch (err) {

    }
  }, [])

  return { user }
}

export default useUser
