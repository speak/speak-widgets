var React = require('react');
var classNames = require('classnames');

var VideoButton = React.createClass({ 

  getDefaultProps: function() {
    return {
      hasTooltip: true,
      disabled: false,
      enabled: false,
      onClick: function(){}
    }
  },
  
  getTooltip: function() {
    if (this.props.disabled) return "No Cameras";
    if (this.props.user.publishing_video) return "Stop Video";
    return "Start Video";
  },
  
  render: function(){
    var tooltip;
    var classes = classNames({
      'video': true,
      'animated': true,
      'disabled': this.props.disabled,
      'enabled': this.props.enabled
    });

    if (this.props.hasTooltip) {
      tooltip = <span className="tooltip">{this.getTooltip()}<i className="triangle"></i></span>;
    }

    return <li {...this.props} className="call-control">
      <a className={classes}></a>
      {tooltip}
    </li>;
  }
});

module.exports = VideoButton;
