import axios from "axios"

const fetchData = () => {

  const baseURL = "https://api-js-proyect.onrender.com"
  // const baseURL = "http://192.168.199.170:3000"

  const loginUser = async (username: string, password: string) => {
    return await axios.post(baseURL + "/user/auth", { username, password })
      .then(response => response.data)
  }

  const timeUser = async (id: string) => {
    const response = await axios.get(`${baseURL}/user/time/${id}`)
    return response.data.data[0]
  }

  return { loginUser, timeUser }
}

export default fetchData
