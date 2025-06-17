import axios from "axios"

const fetchData = () => {

  const baseURL = "https://api-js-proyect.onrender.com"

  const loginUser = async (username: string, password: string) => {
    return await axios.post(baseURL + "/user/auth", { username, password })
      .then(response => response.data)
  }

  return { loginUser }
}

export default fetchData
