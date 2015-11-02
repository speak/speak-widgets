var React = require('react');
var classNames = require('classnames');

var AvailabilityBadge = React.createClass({ 
  getDefaultProps: function() {
    return {
      offline: false
    }
  },
  
  getTooltip: function() {
    if (this.isOffline()) return "Offline";
    if (this.props.user.last_idle_at) return "Idle";
    return "Available";
  },
  
  isOffline: function() {
    var user = this.props.user;

    if (this.props.offline) return true;
    if (user.me) return this.props.offline || user.manual_offline;
    return !user.online || user.manual_offline;
  },

  render: function(){
    var user = this.props.user;
    var offline = this.isOffline();
    
    var classes = classNames({
      'availability': true,
      'idle': (offline || user.last_idle_at)
    });

    var availability_classes = classNames({
      'icon-circle': !offline && user.instant && !user.manual_offline && user.online,
      'icon-half-circle': !offline && !user.instant && !user.manual_offline,
      'icon-empty-circle': offline
    });
    
    return <div className={classes} title={this.props.tooltip ? this.getTooltip() : ""}>
      <i className={availability_classes}></i>
    </div>;
  }
});

module.exports = AvailabilityBadge;
