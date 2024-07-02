import { Link } from "preact-router/match"
function Navbar() {


  return (
    <nav className="flex gap-x-4 p-4 justify-center">
      <Link href="/"  >Upload Passwords</Link>
      <Link href="/get-passwords"  >Retrieve Passwords</Link>
    </nav>
  )
}

export default Navbar