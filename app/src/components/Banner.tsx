import { useEffect, useState } from "react"

function Banner() {

  const [currentQuote, setCurrentQuote] = useState(0)

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

  // getTime()
  useEffect(() => {
    // Temporizador para cambiar frases motivacionales
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length)
    }, 8000)

    return () => {
      clearInterval(quoteTimer)
    }
  }, [])


  return (
    <>
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

    </>
  )
}

export default Banner
