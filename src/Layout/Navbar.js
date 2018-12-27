import React, { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-info bg-dark py-1">
          <a className="navbar-brand" href="#">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="card-image-top"
              style={{ width: "30px", height: "30px", align: "right" }}
            />
            Hogyster
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form className="searchbar form-inline my-2 my-lg-0">
            <input
              className="form-control-sm mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="searchbar btn-sm btn-outline-info my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto" id="menus">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  메인 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  팔로잉
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  프로젝트 찾기
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  크리에이터
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <a
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-lg fa-comment" />
              </a>
              <a
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-lg fa-bell" />
              </a>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  <img
                    src="/assets/d.jpg"
                    alt="logo"
                    className="card-image-top rounded-circle"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
