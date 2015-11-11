var React = require('react');
var classNames = require('classnames');

var LeaveButton = React.createClass({ 

  getDefaultProps: function() {
    return {
      hasTooltip: true,
      disabled: false,
      enabled: false,
      onClick: function(){}
    }
  },
  
  render: function(){
    var tooltip;
    var classes = classNames({
      'leave': true,
      'animated': true,
      'disabled': this.props.disabled
    });

    if (this.props.hasTooltip) {
      tooltip = <span className="tooltip">Leave Call<i className="triangle"></i></span>;
    }

    return <span>
      <a className={classes}></a>
      {tooltip}
    </span>;
  }
});

module.exports = LeaveButton;