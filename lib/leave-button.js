"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      "li",
      _extends({}, this.props, { className: "call-control" }),
      React.createElement("a", { className: classes }),
      tooltip
    );
  }
});

module.exports = LeaveButton;