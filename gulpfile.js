var gulp  = require('gulp');
var shell = require('gulp-shell');

var deploygh = function() {
  "use strict";
  let gh = require('gh-pages');

  //process.env.CMDDESC="Deploy GitBook on Github";

  let json = require('./package.json');
  let REPO = json.repository.url;
  console.log(REPO);

  gh.publish('./gh-pages', { repo: REPO, logger: function(m) { console.error(m); } });
}

//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('deploy', [ 'build', 'push'], deploygh);

/*
//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/losh deploy-gitbook"]));
});
*/

//  "deploy-togbsio": "./scripts/losh deploy-togbsio",
gulp.task('deploygb',
  shell.task(
    "git ci -am 'deploy to gitbooks'"+
    ";"+
    "git push gbs master",
    { verbose: true }
  )
);

//  "deploy-togbsio": "./scripts/losh deploy-togbsio",
gulp.task('push',
  shell.task(
    "git ci -am 'deploy to github'"+
    ";"+
    "git push origin master",
    { verbose: true }
  )
);

//"generate-wiki": "./scripts/losh generate-wiki"
//"deploy-wiki": "./scripts/losh deploy-wiki"
gulp.task('deployw', function() {
  return gulp.src('').pipe(shell([
     "./scripts/losh generate-wiki",
     "./scripts/losh deploy-wiki"
     ]))
});

// npm install -g http-server
//  "generate-gitbook": "./scripts/generate-gitbook",
gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});

// "serve": "gitbook serve txt gh-pages",
gulp.task('serve', function() {
  return gulp.src('').pipe(shell(['gitbook serve `pwd` gh-pages']));
});


// open browser at https://crguezl.github.io/ull-esit-1617/
gulp.task('opengh', function() {
  return gulp.src('').pipe(shell(['open https://crguezl.github.io/ull-esit-1617/']));
});

// open browser at https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/
gulp.task('opengb', function() {
  return gulp.src('').pipe(shell(['open https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/']));
});

// open browser at local
gulp.task('open', function() {
  return gulp.src('').pipe(shell(['open localhost:4000']));
});
//
// "serve": "gitbook serve txt gh-pages",
gulp.task('exam', function() {
  return gulp.src('').pipe(shell([
      'pandoc txt/repasos/gulp.md -o examenes/gulp.tex',
      'pandoc txt/repasos/npm.md -o examenes/npm.tex',
      'pandoc txt/repasos/ssh.md -o examenes/ssh.tex',
      'pandoc txt/repasos/heroku.md -o examenes/heroku.tex',
      'pandoc txt/repasos/rest.md -o examenes/rest.tex',
      'cd examenes; pdflatex template.tex examen.pdf'
  ]));
});
