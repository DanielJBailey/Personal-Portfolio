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
    return gulp.src('build/js/index.js') 
    //babelize the file
    .pipe(babel({
        presets: ['env']
    })) 
    //rename it to index.js
    .pipe(rename("script.js")) 
    //replace file in directory with new compiled file
    .pipe(gulp.dest('build/js')) 
})


gulp.task('watch', () => {
    // watch sass files for any changes then run sass task
    gulp.watch('build/scss/**/*.scss', gulp.series('sass'));
    //watch only script file for changes not entire directory then run babel and useref task
    gulp.watch('build/js/index.js', gulp.series('babel')); 
});
