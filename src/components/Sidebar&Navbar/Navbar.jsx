import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import profile from './Images/profile.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">

        <span className="navbar-brand fw-bold">
          Nikhita
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          
          {/* push to right */}
          <div className="ms-auto dropdown">

            <button
              className="btn p-0 border-0"
              data-bs-toggle="dropdown"
            >
              <img
                src={profile}
                alt="profile"
                width="40"
                height="40"
                className="rounded-circle"
              />
            </button>

            <ul className="dropdown-menu dropdown-menu-end text-center p-3 shadow">

              <li>
                <img
                  src={profile}
                  alt="profile"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px" }}
                />
              </li>

              <li>
                <strong>Nikhita</strong>
              </li>

              <li className="mb-2">
                <small className="text-muted">nikhita@mail.com</small>
              </li>

              <li><hr className="dropdown-divider" /></li>

              <li>
                <Link to="/login"><button className="btn btn-danger w-100" onClick={()=>localStorage.removeItem("operators")}>
                Logout
                </button></Link>
              </li>

            </ul>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;