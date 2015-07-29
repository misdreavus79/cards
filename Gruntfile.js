module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['*.js'],
			options: {
				"curly": true,
				"eqnull": true,
				"eqeqeq": true,
				"undef": true,
				"globals": {
					"jQuery": true
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %>' + ' <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
			},
			dist: {
				src: 'memory.js',
				dest: 'memory.min.js'
			}
		}
	}); 
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['uglify']);
};