var gulp   = require("gulp");
var eslint = require("gulp-eslint");
var mocha  = require("gulp-spawn-mocha");

gulp.task("test", function () {
    return gulp.src(["test/unit/**/*.js"], {read: false})
        .pipe(mocha({
            compilers: "js:babel/register",
            env: {
                NODE_ENV: "test"
            },
            istanbul: true
        }));
});

gulp.task("lint", function () {
    return gulp.src(["src/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task("default", ["test", "lint"], function () {
    return gulp.watch(["src/**/*.js", "test/**/*.js"], ["test", "lint"]);
});
