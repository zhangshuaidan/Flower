var gulp = require("gulp");
var $=require("gulp-load-plugins")();

var app={
	src:"src/",
	build:"build/",
	dist:"dist/"
};

gulp.task("depend",function(){
	gulp.src("bower_components/**/*").pipe(gulp.dest(app.build+"depend")).pipe(gulp.dest(app.dist+"depend"));
});

gulp.task("html",function(){
	gulp.src(app.src+"**/*.html").pipe(gulp.dest(app.build)).pipe(gulp.dest(app.dist));
});

gulp.task("less",function(){
	gulp.src(app.src+"less/index.less").pipe($.less()).pipe(gulp.dest(app.build+"css")).pipe($.cssmin()).pipe(gulp.dest(app.dist+"css"));
});

gulp.task("js",function(){
	gulp.src(app.src+"js/**/*.js").pipe($.concat("index.js")).pipe(gulp.dest(app.build+"js")).pipe($.uglify()).pipe(gulp.dest(app.dist+"js"));
});

gulp.task("img",function(){
	gulp.src(app.src+"img/**/*").pipe(gulp.dest(app.build+"img")).pipe($.imagemin()).pipe(gulp.dest(app.dist+"img"));
});

gulp.task("font",function(){
	gulp.src(app.src+"font/**/*").pipe(gulp.dest(app.build+"font")).pipe(gulp.dest(app.dist+"font"));
});

gulp.task("data",function(){
	gulp.src(app.src+"data/**/*").pipe(gulp.dest(app.build+"data")).pipe(gulp.dest(app.dist+"data"));
})

gulp.task("clean",function(){
	gulp.src([app.build,app.dist]).pipe($.clean());
});

gulp.task("build",["depend","html","less","js","img","font","data"]);
gulp.watch("bower_components/**/*",["depend"]);
gulp.watch(app.src+"**/*.html",["html"]);
gulp.watch(app.src+"less/**/*.less",["less"]);
gulp.watch(app.src+"js/**/*.js",["js"]);
gulp.watch(app.src+"img/**/*",["img"]);
gulp.watch(app.scr+"data/**/*",["data"]);
gulp.watch(app.src+"font/**/*",["font"]);

gulp.task("default",["build"]);

