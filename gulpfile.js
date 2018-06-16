var gulp = require('gulp'), 
watch = require ('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require ('autoprefixer'),
cssvars = require ('postcss-simple-vars'),
nested = require ('postcss-nested'),
cssImport = require ('postcss-import');

gulp.task('default', function(){
    console.log('hooray');
});

gulp.task('html', function(){
    console.log ('html changes here');
});

gulp.task('styles', function(){
    //where to get 
    return gulp.src('./app/assets/styles/styles.css')
    //the pipe
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    //the destination
    .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});