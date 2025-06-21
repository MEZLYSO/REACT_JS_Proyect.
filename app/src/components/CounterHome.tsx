import { useEffect, useState } from "react"

function CounterHome() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const targetDate = new Date(2025, 8, 18, 8, 0, 0)


  useEffect(() => {
    // Temporizador para la cuenta regresiva
    const countdownTimer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(countdownTimer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)


    return () => {
      clearInterval(countdownTimer)
    }
  }, [])


  return (
    <>
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-xl shadow-md h-full">
          <h2 className="text-xl font-semibold mb-4 text-center text-green-600">
            Tiempo restante para la carrera
          </h2>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-green-700">{timeLeft.days}</div>
              <div className="text-sm text-green-600">Días</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-green-700">{timeLeft.hours}</div>
              <div className="text-sm text-green-600">Horas</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-green-700">{timeLeft.minutes}</div>
              <div className="text-sm text-green-600">Minutos</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-green-700">{timeLeft.seconds}</div>
              <div className="text-sm text-green-600">Segundos</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Próxima carrera: 18 de septiembre de 2025, 8:00 AM
          </p>
        </div>
      </div>

    </>
  )
}

export default CounterHome
