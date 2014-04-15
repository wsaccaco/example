var gulp = require('gulp'),
	browserify = require('browserify'),
	uglify = require('uglify');

var path = {
	scripts = ''
};

gulp.task('js', function () {
	return gulp.src(path.scripts)
		.pipe(browserify())
		.pipe(uglify())
		.pipe(gulp.dest('./dist/main.js'))
});

gulp.task('default',['js']);