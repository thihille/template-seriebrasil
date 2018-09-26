var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    autoPrefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');

gulp.task('default', ['copy'], function(){
  gulp.start('build-img');
});
gulp.task('copy',['clean'], function(){
  return gulp.src(['dev/**/*'])
      .pipe(gulp.dest('dist/'))
});
gulp.task('clean',function(){
  return gulp.src('dist')
      .pipe(clean());
});
gulp.task('build-img', function(){
  gulp.src('dist/assets/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/assets/img/'));
});

//Após a execução do Babel
gulp.task('usemin', function(){
  gulp.src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify()],
      css: [autoPrefixer(),cssmin()]
    }))
    .pipe(gulp.dest('dist'));
  gulp.start('clean-js');
});
gulp.task('clean-js',function(){
  return gulp.src([
    'dist/assets/css/*.css',
    '!dist/assets/css/template.min.css',
    'dist/assets/js/*.js',
    '!dist/assets/js/template.min.js',
    'dist/dev-js',
    'dist/assets/js/lib'
  ]).pipe(clean());
});