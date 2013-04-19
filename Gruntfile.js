module.exports = function (grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'js/app.min.js': ['js/plugins/*.js', 'js/app.js']
				},
				options: {
					banner: '/* Built on <%= grunt.template.today() %> */ '
				}
			}
		},
		watch: {
			files: ['js/plugins/*.js', 'js/app.js'],
			tasks: ['uglify:dist']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'uglify'
	]);
};