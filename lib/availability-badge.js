"use strict";

var React = require("react");
var classNames = require("classnames");

var AvailabilityBadge = React.createClass({
  displayName: "AvailabilityBadge",

  getDefaultProps: function getDefaultProps() {
    return {
      offline: false
    };
  },

  getTooltip: function getTooltip() {
    if (this.isOffline()) {
      return "Offline";
    }if (this.props.user.last_idle_at) {
      return "Idle";
    }return "Available";
  },

  isOffline: function isOffline() {
    var user = this.props.user;

    if (this.props.offline) {
      return true;
    }if (user.me) {
      return this.props.offline || user.manual_offline;
    }return !user.online || user.manual_offline;
  },

  render: function render() {
    var user = this.props.user;
    var offline = this.isOffline();

    var classes = classNames({
      availability: true,
      idle: offline || user.last_idle_at
    });

    var availability_classes = classNames({
      "icon-circle": !offline && user.instant && !user.manual_offline && user.online,
      "icon-half-circle": !offline && !user.instant && !user.manual_offline,
      "icon-empty-circle": offline
    });

    return React.createElement(
      "div",
      { className: classes, title: this.props.tooltip ? this.getTooltip() : "" },
      React.createElement("i", { className: availability_classes })
    );
  }
});

module.exports = AvailabilityBadge;