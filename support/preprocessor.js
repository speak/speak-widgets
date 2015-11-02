// https://facebook.github.io/jest/docs/tutorial-react.html#content

var ReactTools = require('react-tools');
module.exports = {
  process: function(src) {
    return ReactTools.transform(src);
  }
};