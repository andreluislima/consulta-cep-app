import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg w-100 p-4">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="link-logo">
            CEP Register
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav-custom">
            <div>
              <Link to="/" className="nav-link-custom">
                Home
              </Link>
            </div>

            <div>
              <Link to="/novo-registro" className="nav-link-custom">
                Novo Registro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
