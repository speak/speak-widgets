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
  
  render: function(){
    var tooltip;
    var classes = classNames({
      'add-people': true,
      'animated': true,
      'disabled': this.props.disabled,
      'enabled': this.props.enabled
    });

    if (this.props.hasTooltip) {
      tooltip = <span className="tooltip">Add People<i className="triangle"></i></span>
    }

    return <span>
      <a className={classes} {...this.props}></a>
      {tooltip}
    </span>;
  }
});

module.exports = AddPeopleButton;