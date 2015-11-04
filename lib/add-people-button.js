"use strict";

var React = require("react");
var classNames = require("classnames");

var AddPeopleButton = React.createClass({
  displayName: "AddPeopleButton",

  getDefaultProps: function getDefaultProps() {
    return {
      hasTooltip: true,
      disabled: false,
      enabled: false,
      onClick: function onClick() {}
    };
  },

  getTooltip: function getTooltip() {
    return "Add People";
  },

  render: function render() {
    var tooltip;
    var classes = classNames({
      "add-people": true,
      animated: true,
      disabled: this.props.disabled,
      enabled: this.props.enabled
    });

    if (this.props.hasTooltip) {
      React.createElement(
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

module.exports = AddPeopleButton;