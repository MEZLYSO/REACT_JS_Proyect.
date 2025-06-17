import useLogin from "../hooks/useLogin"

function Profile() {

  const { handleLogOut } = useLogin()

  return (
    <>
      <div
        className="flex justify-center items-center h-lvh">
        <div>
          <form
            className="bg-white flex-col w-full max-w-sm"
          >
            <h1
              className="font-bold"
            >
              Informacion
            </h1>
            {/* <input type="text" value={user.Username} /> */}
          </form>
          <button
            className="text-center w-full bg-red-400 rounded-2xl"
            onClick={handleLogOut}
          >LogOut</button>
        </div>
      </div>
    </>
  )
}

export default Profile
