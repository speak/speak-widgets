"use strict";

var React = require("react");
var classNames = require("classnames");

var VideoButton = React.createClass({
  displayName: "VideoButton",

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
      return "No Cameras";
    }if (this.props.user.publishing_video) {
      return "Stop Video";
    }return "Start Video";
  },

  render: function render() {
    var tooltip;
    var classes = classNames({
      video: true,
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
      React.createElement("a", { className: classes, onClick: this.handleClick }),
      tooltip
    );
  }
});

module.exports = VideoButton;