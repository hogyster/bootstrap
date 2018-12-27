import React, { Component } from "react";
class Forms extends Component {
  render() {
    return (
      <div class="container">
        <h1> Form</h1>
        <form>
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="enter your email"
            />
          </div>
          <div className="form-group">
            <label for="password">Email Address</label>
            <input
              type="email"
              id="password"
              className="form-control"
              placeholder="enter your password"
            />
            <small className="text muted">Password must be 8 characters</small>
          </div>
          <div className="form-group">
            <label for="select">Select</label>
            <select id="select" class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="form-group">
            <label for="multiselect">Select</label>
            <select multiple id="mutliselect" class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <small class="text-muted">
              Hold down ctrl(pc) or cmd(mac) to select multiple
            </small>
          </div>
          <div className="form-group">
            <label for="textarea" />
            <textarea
              id="textarea"
              class="form-control form-control-sm"
              rows="4"
            />
          </div>
          <div className="form-group">
            <input type="file" class="form-control-file" id="" />
          </div>
          <div class="form-group">
            <label for="formControlRange">Example Range input</label>
            <input
              type="range"
              class="form-control-range"
              id="formControlRange"
            />
          </div>
          <input type="submit" value="Submit" class="btn btn-lg btn-primary" />
        </form>
      </div>
    );
  }
}

export default Forms;
