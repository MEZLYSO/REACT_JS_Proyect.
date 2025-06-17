import { useEffect } from "react"
import useUser from "../hooks/useUser"

function Home() {

  const { user, getInfo } = useUser()
  useEffect(() => {

    getInfo()
  }, [])

  return (
    <div className="p-5 flex-col">
      <div>
        <h1 className="text-2xl font-bold">
          Bienvenido {user.Username}
        </h1>
        <div>
          Faltan
        </div>
      </div>
    </div>
  )
}

export default Home
