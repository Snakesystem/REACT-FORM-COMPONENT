import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="navbar fixed-bottom bg-light px-5">
        <div className="container-fluid">
            <Link className="nav-link" target="_blank" to="https://github.com/Snakesystem">Snakesystem</Link>
        </div>
    </nav>
  )
}
