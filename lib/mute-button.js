"use strict";

var React = require("react");
var classNames = require("classnames");

var MuteButton = React.createClass({
  displayName: "MuteButton",

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
      return "No Microphones";
    }if (this.props.enabled) {
      return "Unmute Microphone";
    }return "Mute Microphone";
  },

  render: function render() {
    var tooltip;
    var classes = classNames({
      mute: true,
      animated: true,
      warning: this.props.enabled && this.props.speaking,
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

module.exports = MuteButton;