const gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      sourcemap = require('gulp-sourcemaps'),
      less = require('gulp-less'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      sync = require('browser-sync').create(),
      htmlmin = require('gulp-htmlmin'),
      csso = require('postcss-csso'),
      rename = require('gulp-rename'),
      terser = require('gulp-terser'),
      squoosh = require('gulp-libsquoosh'),
      webp = require("gulp-webp"),
      del = require('del');

// Styles
const styles = () => {
  return gulp.src('source/less/style.less')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}
exports.styles = styles;

//HTML
const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'));
};
exports.html = html;

//js terser
const script = () => {
    return gulp.src('source/js/script.js')
      .pipe(terser())
      .pipe(rename('script.min.js'))
      .pipe(gulp.dest('build/js'));
}
exports.script = script;

//squoosh
const optimizeImages = () => {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'))
}
exports.optimizeImages = optimizeImages;

//copyimg
const copyImages = () => {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
  .pipe(gulp.dest('build/img'))
}
exports.copyImages = copyImages;

// WebP
const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}
exports.createWebp = createWebp;

// Copy
const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/*.ico",
    "source/img/**/*.svg",
    "source/img/**/*.webp",
    "!source/img/icons/*.svg",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}
exports.copy = copy;

//Clean
const clean = () => {
  return del("build");
};
exports.clean = clean;

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
exports.server = server;

//RELOAD
const reload = (done) => {
  sync.reload();
  done();
}

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series(styles));
  gulp.watch("source/js/script.js", gulp.series(script));
  gulp.watch("source/*.html", gulp.series(html, reload));
}

// Build
const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    createWebp,
    script,
  ),
);
exports.build = build;

// Default
exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    createWebp,
    script,
  ),
  gulp.series(
    server,
    watcher
  ));
