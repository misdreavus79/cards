module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
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
				banner: '<%= banner %>\n'
			},
			dist: {
				src: 'memory.js', //<%= pkg.name %>
				dest: 'memory.min.js' //<%= pkg.name %><%= pkg.version %>
			}
		},
		sass: {
			dist: {
				files: {
					'style.css': 'style.scss'
				}
			}
		},
		cssmin: {
			compress: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'style.min.css': ['reset.css', 'style.css']
				}
			}
		},
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3
				},
				files: {
					//'destination': 'source'
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['jquery-2.1.3.min.js', 'memory.min.js'],
				dest: '<%= pkg.name %>-<%= pkg.version %>.js'
			}
		}

	}); 

	//load tasks
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['uglify', 'cssmin']);
};