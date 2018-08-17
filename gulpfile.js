var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var useref = require('gulp-useref');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

//SASS TASK
gulp.task('sass', () => {
    // Get source files with gulp.src
    return gulp.src('build/scss/**/*.scss') 
    // Sends it through a gulp plugin
    .pipe(sass()) 
    // Outputs the file in the destination folder
    .pipe(gulp.dest('build/css')) 
});

//BABEL TASK
gulp.task('babel', () => {
    //Get script file
    return gulp.src('build/js/script.js') 
    //babelize the file
    .pipe(babel({
        presets: ['env']
    })) 
    //rename it to index.js
    .pipe(rename("index.js")) 
    //replace file in directory with new compiled file
    .pipe(gulp.dest('dist/js')) 
})

//MINIFY AND CONCATENATE CSS & JS FILES
gulp.task('useref', () => {
    return gulp.src('build/*.html')
    .pipe(useref())
    // Minify only JS after babelizing
    //.pipe(gulpIf('*.js', uglify()))
    // Minify only CSS after compiling
    //.pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
    // watch sass files for any changes then run sass task
    gulp.watch('build/scss/**/*.scss', gulp.series('sass', 'useref'));
    //watch only script file for changes not entire directory then run babel and useref task
    gulp.watch('build/js/script.js', gulp.series('babel', 'useref')); 
});
