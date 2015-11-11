"use strict";

var React = require("react");
var classNames = require("classnames");

var LeaveButton = React.createClass({
  displayName: "LeaveButton",

  getDefaultProps: function getDefaultProps() {
    return {
      hasTooltip: true,
      disabled: false,
      enabled: false,
      onClick: function onClick() {}
    };
  },

  render: function render() {
    var tooltip;
    var classes = classNames({
      leave: true,
      animated: true,
      disabled: this.props.disabled
    });

    if (this.props.hasTooltip) {
      tooltip = React.createElement(
        "span",
        { className: "tooltip" },
        "Leave Call",
        React.createElement("i", { className: "triangle" })
      );
    }

    return React.createElement(
      "span",
      null,
      React.createElement("a", { className: classes }),
      tooltip
    );
  }
});

module.exports = LeaveButton;