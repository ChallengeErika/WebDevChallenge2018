module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: '*.css'
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            '*.css',
            'index.html'
          ]
        },
        options: {
          watchTask: true,
          server: ''
        }
      }
    },
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'expanded'
        },
        files: { // Dictionary of files
          'main.css': 'main.scss', // 'destination': 'source'
          'widgets.css': 'widgets.scss'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');




  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);

};
