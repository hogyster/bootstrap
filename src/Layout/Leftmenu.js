import React, { Component } from "react";
import "./Leftmenu.scss";
import {
  Camera,
  PlusCircle,
  Video,
  Edit2,
  Monitor,
  Compass,
  User,
  MessageCircle,
  Bookmark
} from "react-feather";

class Leftmenu extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              {/* <!-- Sidebar --> */}
              {/* header */}
              {/* <div className="container"> */}
              <div className="sidebar-header">
                <div className="d-flex align-items-center " href="">
                  <img
                    className="img-fluid rounded-circle"
                    src="./assets/a.jpg"
                    alt="User picture"
                    style={{
                      width: "50px",
                      height: "50px"
                    }}
                  />
                  {/* </div> */}
                  <div className="container info">
                    <div className="user-info col p-2 m-0" id="info">
                      <strong> David Kang</strong>
                      <br />
                      <span className="user-role text-muted">웹디자이너</span>
                      <span className="user-status">
                        <br />
                        <span>Online</span>
                        <i class="fa fa-circle" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="mainmenu nav flex-column">
                {/* menus */}
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span className="Compass p-2">
                      <Compass />
                    </span>
                    탐색
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="User p-2">
                      <User />
                    </span>
                    팔로잉
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="MessageCircle p-2">
                      <MessageCircle />
                    </span>
                    메시지
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="Bookmark p-2">
                      <Bookmark />
                    </span>
                    북마크
                  </a>
                </li>
              </ul>

              {/* second menus */}

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>카테고리</span>
                <a className="d-flex align-items-center text-muted" href="#">
                  <span id="plus" style={{ color: " #10b2b8" }}>
                    <PlusCircle />
                  </span>
                </a>
              </h6>

              <ul className="nav flex-column mb-2" id="category">
                <li className="nav-item nav-link">
                  <a
                    href="#CameraMenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="active dropdown-toggle"
                    style={{ color: "#333" }}
                  >
                    <span className="Camera p-2">
                      <Camera />
                    </span>
                    사진
                  </a>
                  <ul className="collapse list-unstyled" id="CameraMenu">
                    <div className="sister">
                      <li>
                        <a href="#">Home 1</a>
                      </li>
                      <li>
                        <a href="#">Home 2</a>
                      </li>
                      <li>
                        <a href="#">Home 3</a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="nav-item nav-link">
                  <a
                    href="#VideoMenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="active dropdown-toggle"
                    style={{ color: "#333" }}
                  >
                    <span className="Video p-2">
                      <Video />
                    </span>
                    영상
                  </a>
                  <ul className="collapse list-unstyled" id="VideoMenu">
                    <li>
                      <a href="#">Home 1</a>
                    </li>
                    <li>
                      <a href="#">Home 2</a>
                    </li>
                    <li>
                      <a href="#">Home 3</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-link">
                  <a
                    href="#DesignMenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="active dropdown-toggle"
                    style={{ color: "#333" }}
                  >
                    <span className="DesignMenu p-2">
                      <Edit2 />
                    </span>
                    디자인
                  </a>
                  <ul className="collapse list-unstyled" id="DesignMenu">
                    <li>
                      <a href="#">Home 1</a>
                    </li>
                    <li>
                      <a href="#">Home 2</a>
                    </li>
                    <li>
                      <a href="#">Home 3</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-link">
                  <a
                    href="#ProgramMenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="active dropdown-toggle"
                    style={{ color: "#333" }}
                  >
                    <span className="MonitorMenu p-2 ">
                      <Monitor />
                    </span>
                    개발
                  </a>
                  <ul className="collapse list-unstyled" id="MonitorMenu">
                    <li>
                      <a href="#">Home 1</a>
                    </li>
                    <li>
                      <a href="#">Home 2</a>
                    </li>
                    <li>
                      <a href="#">Home 3</a>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* second menus */}

              {/* <!-- Page Content --> */}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Leftmenu;
