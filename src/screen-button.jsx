var React = require('react');
var classNames = require('classnames');

var ScreenButton = React.createClass({ 

  getDefaultProps: function() {
    return {
      hasTooltip: true,
      disabled: false,
      enabled: false,
      onClick: function(){}
    }
  },
  
  getTooltip: function() {
    if (this.props.disabled) return "Screen Unavailable";
    if (this.props.user.publishing_screen) return "Unshare Screen";
    return "Share Screen";
  },
  
  render: function(){
    var tooltip;
    var classes = classNames({
      'screen': true,
      'animated': true,
      'disabled': this.props.disabled,
      'enabled': this.props.enabled
    });

    if (this.props.hasTooltip) {
      tooltip = <span className="tooltip">{this.getTooltip()}<i className="triangle"></i></span>
    }

    return <li {...this.props} className="call-control">
      <a className={classes}></a>
      {tooltip}
    </li>;
  }
});

module.exports = ScreenButton;