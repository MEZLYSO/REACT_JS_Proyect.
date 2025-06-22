import { useEffect, useState } from "react"
import useLogin from "../hooks/useLogin"

function Login() {
  const [button, setButton] = useState("Ingresar")
  const { handleChange, handleSubmit, status, setStatus } = useLogin()

  useEffect(() => {
    if (status) {
      setButton("Ingresar")
    }
  }, [status])

  return (
    <>
      {!status ? <></> : <>
        <div className="bg-red-600 fixed w-full text-center text-bold text-2xl text-white pb-3">
          <h1>Error</h1>
          <p
            className="text-sm text-bold"
          >Verifique su contraseña y usuario</p>
          <p
            className="text-sm text-bold"
          >o su conexion a internet</p>
        </div>
      </>}
      <div className="w-full min-h-screen flex justify-center items-center p-4 sm:p-10">
        <div className="bg-white h-auto w-full max-w-md shadow-gray-400 shadow-2xl  rounded-2xl p-6 sm:p-10 m-4 sm:m-10 font-black text-2xl sm:text-4xl flex-col">
          <img
            src="https://raw.githubusercontent.com/Yagogo39/FrontendProyecto/refs/heads/main/registro-app/public/logo.jpeg"
            alt="Descripcion"
            className="w-32 sm:w-40 mx-auto p-4 rounded-3xl"
          />
          <h1 className="flex justify-center text-3xl sm:text-4xl">Inicio de sesion</h1>
          <form
            onSubmit={handleSubmit}
          >
            <p className="font-normal text-xl sm:text-2xl mt-6 sm:mt-10">Usuario:</p>
            <input
              onChange={handleChange}
              id="username"
              className="focus:border-none font-light text-xl sm:text-2xl border-2 rounded-2xl mt-3 sm:mt-5 py-2 sm:py-3 px-4 sm:px-8 w-full"
              type="text"
              placeholder="(ej. username)"
            />

            <p className="font-normal text-xl sm:text-2xl mt-6 sm:mt-10">Contraseña:</p>
            <input
              onChange={handleChange}
              id="password"
              className="focus:border-none font-light text-xl sm:text-2xl border-2 rounded-2xl mt-3 sm:mt-5 py-2 sm:py-3 px-4 sm:px-8 w-full"
              type="password"
              placeholder="password"
            />

            <div className="pt-6 sm:pt-10 mx-2 sm:mx-4">
              <button
                onClick={() => { setButton("Ingresando..."); setStatus(undefined); }}
                className="cursor-progress w-full h-12 sm:h-15 rounded-full bg-green-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-600 text-white text-xl sm:text-2xl">
                {button}
              </button>
            </div>
          </form>
          <p className="font-normal text-xl sm:text-2xl mt-6 sm:mt-10 mx-4 sm:mx-8 text-center">
            ¿No tienes cuenta?{' '}
            <a className="cursor-progress underline text-blue-600 hover:text-blue-400" href="https://frontendproyecto-6u8g.onrender.com/">
              Registrate
            </a>
          </p>

        </div>
      </div>
    </>
  )
}

export default Login
