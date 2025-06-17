import { Link } from "react-router-dom"
import { PrivatePages } from "../types/pages"

function Navbar() {
  return (
    <div className="fixed bottom-0 flex w-full justify-center py-2 shadow-black shadow-2xl">
      <div className="flex justify-around gap-5 py-5 text-2xl">
        <Link
          className="font-bold w-full text-center"
          to={PrivatePages.HOME}
        >
          Home
        </Link>
        <Link
          className="font-bold w-full"
          to={PrivatePages.PROFILE}
        >
          Profile
        </Link>
      </div>
    </div>
  )
}

export default Navbar
