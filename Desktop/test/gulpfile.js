var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('browserSync',function(){
    browserSync.init({
        server :{
            baseDir : 'app'
        }
    })
});
gulp.task('watch',['browserSync','sass'],function(){
    gulp.watch('app/**/*.scss',['sass']);
    gulp.watch('app/**/*.js',browserSync.reload);
    gulp.watch('app/**/*.css',browserSync.reload);
    gulp.watch('app/**/*.html',browserSync.reload);
    gulp.watch('app/**/*.json',browserSync.reload);
});


