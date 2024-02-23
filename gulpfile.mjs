import gulp from 'gulp';
import gulp_sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import copy from 'gulp-copy';
import * as SASS from 'sass';
import zip from 'gulp-zip';
import clean from 'gulp-clean';
import yaml from 'gulp-yaml';

const sass = gulp_sass(SASS);
const paths = {
  styles: {
    src: 'new/**/*.scss',
    public: 'public/styles/app.scss',
    appCss: 'public/styles/',
    dest: 'src/assets'
  }
};

gulp.task('themes', () => {
  return gulp.src('./public/themes.yml')
    .pipe(yaml({ space: 2 }))
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('watchThemes', () => {
  gulp.watch('./public/themes.yml', gulp.parallel('themes'));
});

gulp.task('app', () => {
  return gulp.src(paths.styles.public).pipe(sass()).pipe(gulp.dest(paths.styles.appCss));
});

gulp.task('styles', () => {
  return gulp.src(paths.styles.src).pipe(sass()).pipe(cleanCSS()).pipe(gulp.dest(paths.styles.dest));
});

gulp.task('debugStyles', () => {
  return gulp.src(paths.styles.src).pipe(sass()).pipe(gulp.dest(paths.styles.dest));
});

gulp.task('watchStyles', () => {
  gulp.watch(paths.styles.src, gulp.parallel('styles'));
});

gulp.task('clean', () => {
  return gulp.src(['release',
    'dist'], { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task('copy', () => {
  return gulp.src(['*.*',
    '!release.zip',
    'dist/*.css',
    'public/**/*'], { allowEmpty: true }).pipe(copy('release'));
});

gulp.task('zip', () => {
  return gulp.src('release/**/*').pipe(zip('release.zip')).pipe(gulp.dest('.'));
});

gulp.task('release', gulp.series('clean', 'styles', 'copy', 'zip'));
