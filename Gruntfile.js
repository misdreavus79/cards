module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		jshint: {
			//all: ['src/js/**/*.js', 'Gruntfile.js'],
			options: {
				"bitwise": true,
				"curly": true,
				"eqnull": true,
				"eqeqeq": true,
				"undef": true,
				"browser": true,
				"devel": true,
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
				src: 'src/js/cards.js', //<%= pkg.name %>
				dest: 'src/js/cards.min.js' //<%= pkg.name %><%= pkg.version %>
			}
		},
		sass: {
			dist: {
				files: {
					'src/css/style.css': 'src/css/style.scss'
				}
			}
		},
		cssmin: {
			compress: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'build/css/style.min.css': ['src/css/reset.css', 'src/css/style.css']
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
				src: ['src/js/jquery.js', 'src/js/cards.min.js'],
				dest: 'build/js/<%= pkg.name %>-<%= pkg.version %>.js'
			}
		},
		watch: {
      		options: {
      			livereload: 35729,
      		},
      		sass: {
      			files: ['src/css/**/*.scss'],
      			tasks: ['sass'],
      		},
      		scripts: {
				files: ['src/js/**/*.js', 'Gruntfile.js'],
				tasks: ['jshint'],
				options: {
					spawn: false,
				}
      		},
      		html: {
      			files: ['src/*.html']
      		},
      		browserify: {
				files: ['src/js/**/*.jsx', 'Gruntfile.js'],
				tasks: ['browserify']
			}
      	},
      	browserify: {
			dist: {
				options: {
					transform: [
						[
							'babelify', 
							{
								presets: ['es2015', 'react']
							}
						]
					],
					alias: {
						
					},
					browserifyOptions: {
						standalone: 'cards'
					}
				},        
				src: ['src/js/components/**/Main.jsx'],
				dest: 'src/js/memory.js',
			}
		},
		copy: {
			img: {
				cwd: 'src',
				src: 'images/**',
				dest: 'build/',
				expand: true
			},
			html: {
				expand: true,
				src: ['src/*.html', '!**/node_modules/**', '!**/dist/**'],
				dest: 'build/',
				options:{
					process: function(content, srcpath){
						content = content.replace('<script src="//localhost:35729/livereload.js"></script>', '');
						content = content.replace('css/style.css', 'https://storage.googleapis.com/cards/css/style.min.css');
						content = content.replace('js/start.js', 'https://storage.googleapis.com/cards/js/start.min.js');
						return content;
					}
				}
			},
			pkgJson: {
				src: 'package.json',
				dest: 'dist/'
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('bundle', ['browserify']);
	grunt.registerTask('build', ['uglify', 'cssmin', 'imagemin', 'copy'])
};