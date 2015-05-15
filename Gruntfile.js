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
                    coveralls: true,
                    reporter: 'spec',
                    instrument: true
                },
                coverage: ['test/*.js'],
                src: ['test/*.js'],
                all: ['test/*.js']
            },
            options: {
                files: 'test/*.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-coveralls');
    grunt.registerTask('default', ['jshint', 'mochaTest']);
};
