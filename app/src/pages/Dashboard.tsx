import { PublicPages } from "../types/pages"
import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <div>
      <Link
        to={PublicPages.LOGIN}
      >Login</Link>
    </div>
  )
}

export default Dashboard
