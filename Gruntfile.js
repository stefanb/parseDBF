module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
      		options: {
        		jshintrc: "./.jshintrc"
      		},
      		all: ['./index.js']
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                },
                src: ['test/*.js']
            },
	    coverage: {
	      options: {
	        coveralls: true
	      },
	      all: ['test/*.js']
	    },
	    options: {
	      files: 'test/*.js'
	    }            
        },
        coveralls: {
            // Options relevant to all targets
            options: {
                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                force: false
            },

            test: {
                // LCOV coverage file (can be string, glob or array)
                src: 'coverage-results/extra-results-*.info',
                options: {
                    // Any options for just this target
                }
            },
        }
    });
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-coveralls');
	grunt.registerTask('default', ['jshint','mochaTest']);
};
