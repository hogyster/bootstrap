import React, { Component } from "react";
class Offset extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Offset</h1>
          <div className="row border">
            <div className="col-4 offset-1 border">
              <h1>Col-4</h1>
            </div>
            <div className="col-4 offset-1 border">
              <h1>Col-5</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row border">
            <div className="col-sm border"> LEFT</div>
            <div className="col-sm border">
              Right
              <div className="row border border-success">
                <div className="col-4 border"> ONE</div>
                <div className="col-4 border"> TWO</div>
                <div className="col-4 border"> THREE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offset;
