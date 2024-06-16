import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar px-5 fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">RHF SNAKESYSTEM</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link me-3" to="/">Home</Link>
            <Link className="nav-link me-3" to="/form-state">State & Submition</Link>
            <Link className="nav-link me-3" to="/validation">Validation</Link>
            <Link className="nav-link me-3" to="/type-data">Type Data</Link>
            <Link className="nav-link me-3" to="/watch-mode">Watch & Mode</Link>
            <Link className="nav-link me-3" to="/field-value">Field Value</Link>
            <Link className="nav-link me-3" to="/controller">Controller</Link>
            <Link className="nav-link" to="/state-management">State Management</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
