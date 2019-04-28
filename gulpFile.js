const gulp = require('gulp');
const gulpNodemon = require('gulp-nodemon');
const gulpWatch = require('gulp-watch');
const gulpYaml = require('gulp-yaml');


gulp.task('yaml2json',()=>{
    gulp.src('./swagger/swagger.yaml').pipe(gulpYaml({
        space: 4
    })).pipe(gulp.dest('./swagger'));
});

gulp.task('nodemon',()=>{
    gulpNodemon({
        script: './index.js',
        ignore: ['node_modules/']
    }).on('restart',(files)=>{
        console.log(`Detected changes in ${files}`);        
    });
});

gulp.task('default',['yaml2json','nodemon']);