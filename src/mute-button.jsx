var React = require('react');
var classNames = require('classnames');

var MuteButton = React.createClass({ 

  getDefaultProps: function() {
    return {
      hasTooltip: true,
      disabled: false,
      enabled: false,
      onClick: function(){}
    }
  },
  
  getTooltip: function() {
    if (this.props.disabled) return "No Microphones";
    if (this.props.enabled) return "Unmute Microphone";
    return "Mute Microphone";
  },

  render: function(){
    var tooltip;
    var classes = classNames({
      'mute': true,
      'animated': true,
      'warning': this.props.enabled && this.props.speaking,
      'disabled': this.props.disabled,
      'enabled': this.props.enabled
    });
    
    if (this.props.hasTooltip) {
      tooltip = <span className="tooltip">{this.getTooltip()}<i className="triangle"></i></span>;
    }

    return <span>
      <a className={classes} onClick={this.props.onClick}></a>
      {tooltip}
    </span>;
  }
});

module.exports = MuteButton;