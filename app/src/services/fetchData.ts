import axios from "axios"

const fetchData = () => {

  // const baseURL = "https://api-js-proyect.onrender.com"
  const baseURL = "http://192.168.199.170:3000"

  const loginUser = async (username: string, password: string) => {
    return await axios.post(baseURL + "/user/auth", { username, password })
      .then(response => response.data)
  }

  const timeUser = async (id: string) => {
    return await axios.get(baseURL + "/user/time/" + id)
      .then(response => response.data)
  }

  return { loginUser, timeUser }
}

export default fetchData
