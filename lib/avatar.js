"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react/addons");
var AvailabilityBadge = require("./availability-badge");
var $ = require("jquery");

var Avatar = React.createClass({
  displayName: "Avatar",

  getDefaultProps: function getDefaultProps() {
    return {
      animated: false,
      initials: true,
      size: "large",
      simple: false,
      offline: false
    };
  },

  getInitialState: function getInitialState() {
    var url = this.getAvatarUrl();
    var gravatar = url && url.match(/gravatar/i);

    return {
      url: url,
      gravatar_hidden: !!gravatar,
      mounted_at: new Date().getTime()
    };
  },

  getInitial: function getInitial() {
    var item = this.props.user;
    if (item.first_name) {
      return item.first_name[0];
    } else if (item.email) {
      return item.email[0];
    }
    return "";
  },

  preventDrag: function preventDrag(ev) {
    ev.preventDefault();
  },

  showPlaceholder: function showPlaceholder(ev) {
    this.showImage(this.refs.placeholder.getDOMNode());
    this.setState({ gravatar_hidden: true });
  },

  avatarLoaded: function avatarLoaded(ev) {
    this.showImage(this.refs.avatar.getDOMNode());
    this.setState({ gravatar_hidden: false });
  },

  showImage: function showImage(target) {
    var now = new Date().getTime();
    var diff = now - this.state.mounted_at;

    if (diff > 200) {
      $(target).fadeIn(200);
    } else {
      $(target).show();
    }
  },

  getAvatarUrl: function getAvatarUrl() {
    var item = this.props.user;

    if (item.avatars) {
      var url = item.avatar || item.avatars[this.props.size];
      return url.replace("d=blank", "d=404");
    }
    return null;
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    var url = this.getAvatarUrl();
    if (this.state.url != url) {
      this.setState({ gravatar_hidden: false, url: url });
    }
  },

  render: function render() {
    var item = this.props.user;
    var gravatar, initials, placeholder, missed_calls_badge, muted_badge, availability;

    var hidden = { display: "none" };
    var cx = React.addons.classSet;
    var classes = cx({
      avatar: true,
      animated: this.props.animated,
      speaking: item.speaking && !item.muted,
      muted: item.muted,
      small: this.props.small
    });

    if (item.missed_calls && !this.props.simple) {
      missed_calls_badge = React.createElement(
        "span",
        { className: "badge animated fadeIn" },
        item.missed_calls
      );
    }
    if (item.muted && this.props.simple) {
      muted_badge = React.createElement("span", { className: "badge muted animated fadeIn" });
    }
    if (item.default_avatar_path) {
      placeholder = React.createElement("img", { ref: "placeholder", style: hidden, className: "default-avatar", onDragStart: this.preventDrag, src: "images" + item.default_avatar_path });
    }
    if (item.avatars) {
      gravatar = React.createElement("img", { ref: "avatar", style: this.state.gravatar_hidden ? hidden : null, onLoad: this.avatarLoaded, onError: this.showPlaceholder, className: "gravatar", onDragStart: this.preventDrag, src: this.state.url });
    }
    if (!this.props.simple) {
      availability = React.createElement(AvailabilityBadge, { user: item, tooltip: this.props.simple, offline: this.props.offline });
    }
    if (this.props.initials) {
      initials = React.createElement(
        "span",
        { className: "initials" },
        this.getInitial()
      );
    }

    return React.createElement(
      "div",
      _extends({ className: classes }, this.props),
      React.createElement(
        "span",
        { className: "audio-activity-wrapper" },
        React.createElement("i", { className: "audio-activity" })
      ),
      placeholder,
      initials,
      gravatar,
      missed_calls_badge,
      muted_badge,
      availability
    );
  }
});

module.exports = Avatar;