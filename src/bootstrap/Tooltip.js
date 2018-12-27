import React, { Component } from "react";
import "./Bootstrap.css";
import $ from "jquery";

class Tooltip extends Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <button
        type="button"
        class="btn btn-secondary"
        data-toggle="tooltip"
        data-html="true"
        title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
      >
        Tooltip with HTML
      </button>
    );
  }
}

export default Tooltip;
