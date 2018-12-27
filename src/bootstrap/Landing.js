import React, { Component } from "react";
import "./Landing.css";
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="bg-dark text-white"> This is an h1 block </h1>
        <h1 className="bg-dark text-white d-inline"> This is an h1 inline </h1>
        <span className="bg-info text-white">I am a regular span</span>
        <span className="bg-info text-white d-block m-6">
          I am a block span
        </span>
        {/* <h1 className="d-none d-sm-block">HIDDEN ON XS</h1>
        <h1 className="d-none d-md-block">HIDDEN ON XS and SM</h1> */}

        <h1>
          Current breakpoint is:
          <span className="d-inline d-sm-none text-danger">DEFAULT SMALL</span>
          <span className="d-none d-sm-inline d-md-none">NORMAL SMALL</span>
          <span className="d-none d-md-inline d-lg-none text-info">MEDIUM</span>
          <span className="d-none d-lg-inline d-xl-none text-success">
            LARGE
          </span>
          <span className="d-none d-xl-inline">EXTRA LARGE</span>
        </h1>

        <span id="test" className="border borderstyle border-info rounded">
          test
        </span>

        <h3 className="shadow-sm">Small Shadow</h3>
        <h3 className="shadow"> Regular Shadow</h3>
        <h3 className="shadow-lg"> Regular Shadow</h3>

        <h1 className="m-1 p-0 bg-info d-inline-block">p-0</h1>
        <h1 className="m-1 p-1 bg-info d-inline-block">p-0</h1>
        <h1 className="m-2 p-2 bg-info d-inline-block">p-0</h1>
        <h1 className="m-5 p-3 bg-info d-inline-block">p-0</h1>
        <div className="container">
          <span className="d-none d-sm-inline m-2 m-md-4 m-lg-6 bg-warning" />
          <span className="m-2 m-md-4 m-lg-6 bg-warning" />
          <span className="d-none m-2 m-md-4 m-lg-6 bg-warning" />
          <span className="m-2 m-md-4 m-lg-6 bg-warning" />
          <span className="m-2 m-md-4 m-lg-6 bg-warning" />
          <span className="m-2 m-md-4 m-lg-6 bg-warning" />
          <span className="m-2 m-md-4 m-lg-6 bg-warning" />
          <span className="m-2 m-md-4 m-lg-6 bg-warning" />
        </div>
      </div>
    );
  }
}

export default Landing;
