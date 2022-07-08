import React from "react";

export default function Navbar() {
  return (
    <>
      {/* NAVBAR UPPER */}
      <div className="sticky-top">

      <nav className="shadow p-1 navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container container-fluid mb-1">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="size-nav navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <img
                    src="https://www.edubridgeindia.com/public/assets/images/dm_str_icon.svg"
                    alt=""
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                  Free MasterClass with Experts from the Industry & EduBridge
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <img
                    src="https://www.edubridgeindia.com/public/assets/images/dm_bag_icon.svg"
                    alt=""
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                  Free Job Consultation
                </a>
              </li>
              <li className="nav-item">
              <button className=" btn btn-danger" type="submit">
                Book Now
              </button>

              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* NAVBAR LOWER */}
      <nav className="navbar-lower shadow-sm navbar navbar-expand-lg">
        <div className="container container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-danger" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}
