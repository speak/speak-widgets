var React = require('react');
var classNames = require('classnames');

var AddPeopleButton = React.createClass({ 

  getDefaultProps: function() {
    return {
      hasTooltip: true,
      disabled: false,
      enabled: false,
      onClick: function(){}
    }
  },
  
  getTooltip: function() {
    return "Add People";
  },
  
  render: function(){
    var tooltip;
    var classes = classNames({
      'add-people': true,
      'animated': true,
      'disabled': this.props.disabled,
      'enabled': this.props.enabled
    });

    if (this.props.hasTooltip) {
      <span className="tooltip">{this.getTooltip()}<i className="triangle"></i></span>
    }

    return <span>
      <a className={classes} onClick={this.handleClick}></a>
      {tooltip}
    </span>;
  }
});

module.exports = AddPeopleButton;