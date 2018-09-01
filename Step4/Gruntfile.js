module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      css : {
        files : 'assets/sass/*.scss',
        tasks : ['sass']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
          'assets/css/*.css',
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
        files: { // Dictionary of files
          'assets/css/main.css':'assets/sass/main.scss', // 'destination': 'source'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');




  // Default task(s).
  grunt.registerTask('default', [ 'sass' ,'browserSync', 'watch' ]);
//
};
