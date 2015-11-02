var React = require('react');
var classNames = require('classnames');
var AvailabilityBadge = require('./availability-badge');
var $ = require('jquery');

var Avatar = React.createClass({ 

  getDefaultProps: function() {
    return {
      animated: false,
      initials: true,
      size: 'large',
      simple: false,
      offline: false
    };
  },
  
  getInitialState: function() {
    var url = this.getAvatarUrl();
    var gravatar = url && url.match(/gravatar/i);
    
    return {
      url: url,
      gravatar_hidden: !!gravatar,
      mounted_at: (new Date()).getTime()
    }
  },

  getInitial: function(){
    var item = this.props.user;
    if (item.first_name) {
      return item.first_name[0];
    } else if (item.email) {
      return item.email[0]
    }
    return "";
  },
  
  preventDrag: function(ev) {
    ev.preventDefault();
  },
  
  showPlaceholder: function(ev) {
    this.showImage(this.refs.placeholder);
    this.setState({gravatar_hidden: true});
  },
  
  avatarLoaded: function(ev) {
    this.showImage(this.refs.avatar);
    this.setState({gravatar_hidden: false});
  },
  
  showImage: function(target) {
    var now = (new Date()).getTime();
    var diff = now-this.state.mounted_at;
    
    if (diff > 200) {
      $(target).fadeIn(200);
    } else {
      $(target).show();
    }
  },
  
  getAvatarUrl: function() {
    var item = this.props.user;
    
    if (item.avatars) {
      var url = item.avatar || item.avatars[this.props.size];
      return url.replace("d=blank", "d=404");
    }
    return null;
  },
  
  componentDidUpdate: function(prevProps, prevState){
    var url = this.getAvatarUrl();
    if (this.state.url != url) {
      this.setState({gravatar_hidden: false, url: url});
    }
  },
  
  render: function(){
    var item = this.props.user;
    var gravatar, initials, placeholder, missed_calls_badge, muted_badge, availability;

    var hidden = {display: "none"};
    var classes = classNames({
      'avatar': true,
      'animated': this.props.animated,
      'speaking': item.speaking && !item.muted,
      'muted': item.muted,
      'small': this.props.small
    });
    
    if (item.missed_calls && !this.props.simple) {
      missed_calls_badge = <span className="badge animated fadeIn">{item.missed_calls}</span>;
    }
    if (item.muted && this.props.simple) {
      muted_badge = <span className="badge muted animated fadeIn"></span>
    }
    if (item.default_avatar_path) {
      placeholder = <img ref="placeholder" style={hidden} className="default-avatar" onDragStart={this.preventDrag} src={'images' + item.default_avatar_path} />;
    }
    if (item.avatars) {
      gravatar = <img ref="avatar" style={this.state.gravatar_hidden ? hidden : null} onLoad={this.avatarLoaded} onError={this.showPlaceholder} className="gravatar" onDragStart={this.preventDrag} src={this.state.url} />;
    }
    if (!this.props.simple) {
      availability = <AvailabilityBadge user={item} tooltip={this.props.simple} offline={this.props.offline} />;
    }
    if (this.props.initials) {
      initials = <span className="initials">{this.getInitial()}</span>;
    }

    return (<div className={classes} {...this.props}>
      <span className="audio-activity-wrapper"><i className="audio-activity"></i></span>
      {placeholder}
      {initials}
      {gravatar}
      {missed_calls_badge}
      {muted_badge}
      {availability}
    </div>);
  }
});

module.exports = Avatar;
