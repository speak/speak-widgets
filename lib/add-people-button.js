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

  render: function render() {
    var tooltip;
    var classes = classNames({
      "add-people": true,
      animated: true,
      disabled: this.props.disabled,
      enabled: this.props.enabled
    });

    if (this.props.hasTooltip) {
      tooltip = React.createElement(
        "span",
        { className: "tooltip" },
        "Add People",
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

module.exports = AddPeopleButton;