import React, { Component } from "react";
class Layoutresp extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1> Responsive Layout</h1>
          <div className="row border" style={{ height: "200px" }}>
            <div className="col-3 col-xl-1 bg-info" />
            <div className="col-6 col-xl-10 bg-success" />
            <div className="col-3 col-xl-1 bg-info" />
          </div>
          <div className="row border" style={{ height: "200px" }}>
            <div className="col-md-4 col-xl-1 bg-info" />
            <div className="col-md-4 col-xl-10 bg-success" />
            <div className="col-md-4 col-xl-1 bg-info" />
          </div>
        </div>
      </div>
    );
  }
}

export default Layoutresp;
