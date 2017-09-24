var	gulp	=	require('gulp');
var	sass	=	require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var	sourcemaps	=	require('gulp-sourcemaps');
//var dir = "../7_Sass_Listy_Mapy/"//

gulp.task('sass',	function()	{
		return	gulp.src('scss/**/*.scss')
    .pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle:'extended'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
})

gulp.task('watch', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
		gulp.watch("js/*.js").on('change', browserSync.reload);
});
