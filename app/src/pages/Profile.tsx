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
    <>
      <div
        className="flex justify-center items-center h-lvh">
        <div className="w-full h-full p-5">
          <h1 className="text-2xl font-bold">Informacion</h1>
          <div className="w-full px-10">
            <form
              className="flex flex-col gap-2"
            >
              <label
                className="font-thin"
              >ID</label>
              <input
                className="w-full bg-gray-200"
                value={user.IDUser}
                type="text"
                disabled />
              <label
                className="font-thin"
              >Username</label>
              <input
                className="w-full bg-gray-200"
                value={user.Username}
                type="text"
                disabled />
            </form>
            <button
              className="my-10 text-center w-full bg-red-400 rounded-2xl"
              onClick={handleLogOut}
            >LogOut</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
