module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      css: ["css/**"],
    },

    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/stylesheet.css': 'sass/stylesheet.scss'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['clean','sass']);

};
