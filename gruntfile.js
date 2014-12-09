module.exports = function (grunt) {
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),

            assemble: {
                options: {
                    layoutdir: 'include/html/layouts/',
                    partials:'include/html/partials/**/*',
                    helpers: ['include/html/helpers/*.js']
                },
                site: {
                    expand: true,
                    cwd: 'include/html/pages/',
                    src: ['**/*.hbs'],
                    dest: 'public/'
                }
            },

            clean: {
                html: ['public/*.html']
            },

            jshint: {
                all: ['<%= pkg.jsSource %>/**/*.js']
            },

            concat: {
                options: {
                    // define a string to put between each file in the concatenated output
                    separator: ';'
                },
                dist: {
                    files: {
                        '<%= pkg.jsDestination %>/<%= pkg.name %>-src.js': ['<%= pkg.jsSource %>/**/*.js']
                    }
                },
                bower: {
                  files: {
                    //Copy jquery from bower
                    '<%= pkg.jsDestination %>/vendor/jquery.min.js': ['bower_components/jquery/dist/jquery.min.js'],
                    '<%= pkg.jsDestination %>/vendor/jquery.min.map': ['bower_components/jquery/dist/jquery.min.map'],

                    //Only import bootstrap plugins that are used
                    '<%= pkg.jsDestination %>/vendor/bootstrap.js': [
                      'bower_components/bootstrap/js/modal.js',
                      'bower_components/bootstrap/js/collapse.js',
                      'bower_components/bootstrap/js/transition.js',
                      'bower_components/bootstrap/js/dropdown.js'
                    ],

                    //Respond.js for older browsers
                    '<%= pkg.jsDestination %>/vendor/respond.min.js': ['bower_components/respond/dest/respond.min.js']
                  }
                }
            },

            uglify: {
                dist: {
                    files: {
                        '<%= pkg.jsDestination %>/<%= pkg.name %>-min.js': ['<%= pkg.jsDestination %>/<%= pkg.name %>-src.js']
                    }
                },
                bower: {
                  files: {
                    '<%= pkg.jsDestination %>/vendor/bootstrap-min.js': ['<%= pkg.jsDestination %>/vendor/bootstrap.js']
                  }
                }
            },

            modernizr: {
                dist: {
                    devFile : 'bower_components/modernizr/modernizr.js',
                    outputFile: '<%= pkg.jsDestination %>/vendor/modernizr.min.js',
                    files: {
                        src: [
                          '<%= pkg.jsSource %>/{,*/}*.js',
                          '<%= pkg.lessSource %>/{,*/}*.less'
                        ]
                    }
                }
            },

            less: {
                main: {
                    options: {
                        paths: ["<%= pkg.lessSource %>"]
                    },
                    files: {
                        "<%= pkg.cssDestination %>/<%= pkg.name %>.css": "<%= pkg.lessSource %>/<%= pkg.name %>.less",
                        "<%= pkg.cssDestination %>/<%= pkg.name %>-bootstrap.css": "<%= pkg.lessSource %>/<%= pkg.name %>-bootstrap.less"
                    }
                }
            },

            cssmin: {
                compress:{
                    files:{
                        "<%= pkg.cssDestination %>/<%= pkg.name %>-min.css":["<%= pkg.cssDestination %>/<%= pkg.name %>.css"],
                        "<%= pkg.cssDestination %>/<%= pkg.name %>-bootstrap-min.css":["<%= pkg.cssDestination %>/<%= pkg.name %>-bootstrap.css"]
                    }
                }
            },

            watch: {
                js: {
                    files: [
                        '<%= pkg.jsSource %>/**/*' ],
                    tasks: ['jshint','concat:dist', 'uglify:dist', 'modernizr']
                },
                less: {
                    files: ['<%= pkg.lessSource %>/**/*'],
                    tasks: ['less','cssmin', 'modernizr']
                },
                html: {
                  files: ['include/html/**/*.hbs'],
                  tasks: ['clean', 'assemble']
                }
            }
        });

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less','cssmin', 'modernizr', 'clean', 'assemble']);
    grunt.registerTask('build', ['default']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-modernizr");
};
