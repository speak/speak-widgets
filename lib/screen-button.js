"use strict";

var React = require("react");
var classNames = require("classnames");

var ScreenButton = React.createClass({
  displayName: "ScreenButton",

  getDefaultProps: function getDefaultProps() {
    return {
      hasTooltip: true,
      disabled: false,
      enabled: false,
      onClick: function onClick() {}
    };
  },

  getTooltip: function getTooltip() {
    if (this.props.disabled) {
      return "Screen Unavailable";
    }if (this.props.enabled) {
      return "Unshare Screen";
    }return "Share Screen";
  },

  render: function render() {
    var tooltip;
    var classes = classNames({
      screen: true,
      animated: true,
      disabled: this.props.disabled,
      enabled: this.props.enabled
    });

    if (this.props.hasTooltip) {
      tooltip = React.createElement(
        "span",
        { className: "tooltip" },
        this.getTooltip(),
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

module.exports = ScreenButton;