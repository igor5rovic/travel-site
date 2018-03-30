var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', () => {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', () => {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', () => {
		gulp.start('cssInject');
	});	
});

gulp.task('cssInject', ['styles'],function(){
	return gulp.src('./app/temp/styles/styles.css')
			.pipe(browserSync.stream());
});