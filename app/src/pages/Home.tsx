import { useEffect, useState } from "react"
import useUser from "../hooks/useUser"

function Home() {
  const { user, getInfo, getTime, time } = useUser()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [currentQuote, setCurrentQuote] = useState(0)

  const targetDate = new Date(2025, 8, 18, 8, 0, 0)

  const motivationalQuotes = [
    "Cada kilómetro que corres te acerca a la meta. ¡Sigue adelante!",
    "El dolor es temporal, el orgullo de terminar es para siempre.",
    "No cuentes los días, haz que los días cuenten en tu entrenamiento.",
    "Correr no es solo un deporte, es un estilo de vida que eliges cada día.",
    "Tu cuerpo puede hacerlo. Es tu mente a la que necesitas convencer.",
    "Más fuerte que antes. Más rápido que ayer. ¡Tú puedes!",
    "La carrera no es contra los demás, es contra ti mismo y tus límites.",
    "Cada gota de sudor es una lágrima menos al cruzar la meta.",
    "El secreto para avanzar es comenzar. ¡Ponte tus zapatillas y corre!",
    "No importa lo lento que vayas, sigues adelantando a todos los que están en el sofá."
  ]

  getTime()
  useEffect(() => {
    getInfo()
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

    // Temporizador para cambiar frases motivacionales
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length)
    }, 8000)

    return () => {
      clearInterval(countdownTimer)
      clearInterval(quoteTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 mb-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Bienvenido, {user.Username || "Corredor"}!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sección del temporizador */}
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

          {/* Sección de frases motivacionales */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-green-400 to-green-700 p-6 rounded-xl shadow-md h-full flex flex-col justify-center">
              <div className="text-center text-white">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Motivación del día</h2>
                <div className="min-h-[120px] flex items-center justify-center">
                  <p className="text-lg md:text-xl italic animate-fadeIn">
                    "{motivationalQuotes[currentQuote]}"
                  </p>
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                  {motivationalQuotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuote(index)}
                      className={`w-2 h-2 rounded-full ${currentQuote === index ? 'bg-white' : 'bg-white/50'}`}
                      aria-label={`Mostrar frase ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección adicional de dashboard */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-medium text-gray-700 mb-2">⏱️ Tiempo salida</h3>
            <p className="text-2xl font-bold text-green-600">{time.StartTime}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-medium text-gray-700 mb-2">👟 Tiempo llegada</h3>
            <p className="text-2xl font-bold text-green-600">{time.EndTime}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-medium text-gray-700 mb-2">🏃🏻‍➡️ Tiempo llegada</h3>
            <p className="text-2xl font-bold text-green-600">{time.ElapsedTime}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
