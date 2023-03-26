var gulp = require("gulp");
var deploy = require("gulp-gh-pages");

gulp.task("deploy", function () {
  return gulp.src("./dist/**/*").pipe(
    deploy({
      remoteUrl: "https://github.com/pmsantanna/landing-evangelion.git",
      branch: "master",
    })
  );
});
