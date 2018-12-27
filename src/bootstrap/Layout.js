import React, { Component } from "react";
import "./Layout.css";
class Layout extends Component {
  render() {
    return (
      <div>
        <h1 className="display-3">Display Basics</h1>
        <div className="container">
          <div className="row border" style={{ height: "200px" }}>
            <div className="col bg-info">First</div>
            <div className="col bg-primary" bg-success>
              Second
            </div>
            <div className="col bg-danger">Third</div>
            <div className="col bg-success">Fourth</div>
          </div>
          <div className="row border" style={{ height: "200px" }}>
            <div className="col bg-info">First</div>
            <div className="col bg-primary" bg-success>
              Second
            </div>
          </div>
          <h1> Custom Widths </h1>
          <div className="row">
            <div className="col-9">
              <p>
                {" "}
                This will the base for my app in the future along With wrong
                writings, 정말 프로그래밍이란 쉽지 않다 내가 무엇을 하는지 조차
                헷갈리는 세상이라고 볼 수 있다
              </p>
            </div>
            <div className="col-3">
              <div className="nav flex-column">
                <a href="" className="nav-link">
                  Home
                </a>
                <a href="" className="nav-link">
                  About
                </a>
                <a href="" className="nav-link">
                  Signout
                </a>
                <a href="" className="nav-link">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
