import React from "react";
import "./searchbar.css";

const Searchbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <form className="d-flex" role="search">
              <a href="/">
                <img className="mx-2" src="Logo.png" alt="logo" />
                <span className="">
                  <b>A.T.INKS</b>
                </span>
              </a>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div>
                <div className="d-flex">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <img
                        className="nav-link img-1 dropdown-toggle"
                        alt="logo"
                        src="Logo.png"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      {/* <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <div className="user-logo d-flex">
                      <li className="nav-item dropdown">
                        <img
                          className="nav-link img-2 dropdown-toggle"
                          alt="user-logo"
                          style={{ height: "50px" }}
                          src="UserLogo.png"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        />
                        {/* <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                        </ul> */}
                      </li>
                      <a href="/">
                        <p>
                          User Admin
                          <p
                            style={{
                              fontSize: "10px",
                              margin: "0",
                              color: "gray",
                            }}
                          >
                            useradmin@elred.com
                          </p>
                        </p>
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Searchbar;
