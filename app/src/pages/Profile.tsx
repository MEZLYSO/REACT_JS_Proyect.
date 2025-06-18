import { useEffect } from "react"
import useLogin from "../hooks/useLogin"
import useUser from "../hooks/useUser"

function Profile() {
  const { handleLogOut } = useLogin()
  const { user, getInfo } = useUser()

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mb-15">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mi Perfil
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Información personal y de tu cuenta
          </p>
        </div>

        {/* Tarjeta de perfil */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Banner superior */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 h-24 sm:h-32"></div>

          {/* Contenido principal */}
          <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {/* Sección de avatar y nombre */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-20 mb-6">
              <div className="bg-white p-1 rounded-full shadow-lg">
                <div className="bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-4xl font-bold text-green-800">
                  {user.NameParticipant?.charAt(0) || user.Username?.charAt(0) || 'U'}
                </div>
              </div>
              <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900">
                  {user.NameParticipant || 'Usuario'} {user.LastName_1 || ''} {user.LastName_2 || ''}
                </h2>
                <p className="text-green-800 font-medium">{user.Category || 'Miembro'}</p>
              </div>
            </div>

            {/* Grid de información */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Columna izquierda - Datos de cuenta */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Datos de Cuenta
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Nombre de usuario</label>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <p className="text-gray-900">{user.Username || '-'}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">ID de usuario</label>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <p className="text-gray-900">{user.IDUser || '-'}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Tipo de cuenta</label>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <p className="text-gray-900">{user.Category || '-'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Datos personales */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Datos Personales
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">ID de participante</label>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <p className="text-gray-900">{user.IDParticipant || '-'}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Nombre completo</label>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <p className="text-gray-900">
                        {[user.NameParticipant, user.LastName_1, user.LastName_2].filter(Boolean).join(' ') || '-'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Botón de cerrar sesión */}
            <div className="mt-10 pt-6 border-t border-gray-200 flex justify-center">
              <button
                onClick={handleLogOut}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
