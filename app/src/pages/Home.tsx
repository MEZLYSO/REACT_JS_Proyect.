import { useEffect } from "react"
import useUser from "../hooks/useUser"
import CounterHome from "../components/CounterHome"
import Banner from "../components/Banner"
import fetchData from "../services/fetchData"
import { useQuery } from "@tanstack/react-query"

function Home() {
  const { user, getInfo } = useUser()
  const { timeUser } = fetchData()

  useEffect(() => {
    getInfo()
  }, [])

  const { data, status } = useQuery({
    queryKey: ['time_user'],
    queryFn: async () => await timeUser(user.IDParticipant),
    refetchInterval: 5000,
    enabled: !!user.IDParticipant
  })

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 mb-17">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Bienvenido, {user.Username || "Corredor"}!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {/* Sección del temporizador */}
          <CounterHome />

          {/* Sección de frases motivacionales */}
          <Banner />

        </div>

        {/* Sección adicional de dashboard */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-medium text-gray-700 mb-2">⏱️ Tiempo salida</h3>
            <p className="text-2xl font-bold text-green-600">{status === 'pending' ? (<>Loading...</>) : data.StartTime}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-medium text-gray-700 mb-2">👟 Tiempo llegada</h3>
            <p className="text-2xl font-bold text-green-600">{status === 'pending' ? (<>Loading...</>) : data.EndTime}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-medium text-gray-700 mb-2">🏃🏻‍➡️ Tiempo total</h3>
            <p className="text-2xl font-bold text-green-600">{status === 'pending' ? (<>Loading...</>) : data.ElapsedTime}</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
