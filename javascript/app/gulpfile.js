var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify');
	streamify = require('gulp-streamify');

var path = {
	scripts : './main.js'
};

gulp.task('js', function () {
	browserify(path.scripts).bundle()
	.pipe(source('main.min.js'))
	.pipe(streamify( uglify() ))
	.pipe(gulp.dest('./dist'))
})


gulp.task('watch', function() {
  	// Watch .js files

	gulp.watch('./models/*' , ['js']);
});


gulp.task('default',['js','watch']);