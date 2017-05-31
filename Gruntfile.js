
module.exports = function(grunt) {

  grunt.initConfig({

        // LESS > CSS
        less: {
            file: {
                files: {
                    'css/styles.css': 'less/*.less'
                }
            }
        }

        // MINIFICA O JS
        // uglify: {
        //     file: {
        //         files: {
        //             'dist/js/scripts.min.js': ['dev/js/jquery-3.2.1.min.js', 'dev/js/bootstrap.min.js', 'dev/js/scripts.js']
        //         }
        //     }
        // }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less']);
    // grunt.registerTask('default', ['less', 'cssmin', 'uglify']);

};
