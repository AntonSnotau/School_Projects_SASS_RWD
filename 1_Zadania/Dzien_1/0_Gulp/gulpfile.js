var	gulp	=	require('gulp');
var	sass	=	require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

gulp.task('sass',	function()	{
		return	gulp.src('scss/style.scss')
    .pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
})

gulp.task('watch', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});
