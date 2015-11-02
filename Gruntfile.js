module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  
  grunt.registerMultiTask('build', 'Build the widgets', function(){
    grunt.task.run(this.data.tasks);
  });
};
