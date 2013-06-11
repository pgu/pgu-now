### Install

#### Create webapp

- `yo angular`
- `mv component.json bower.json`
- `vi .bowerrc`, add: `"json": "bower.json"`
- (vi Gruntfile.js, rename component.json to bower.json -> ineffective)


#### Add bootstrap from angular

- `bower search angular` or see [ng-ui](http://angular-ui.github.io/bootstrap/) or [ng-github](https://github.com/angular-ui/bootstrap/tree/gh-pages#readme)
- **bower.json**: add "angular-ui-bootstrap-bower": "~0.3.0"
- **index.html**: add `<link rel="stylesheet" href="styles/bootstrap-2.3.1/bootstrap.css">`
- **index.html**: add `<script src="components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js"></script>`
- `./node_modules/bower/bin/bower install`


#### Start the server

- `grunt`
- `grunt server`


see [this](http://exposure101-development.blogspot.fr/2013/04/complete-end-to-end-setup-google-app.html)

#### Intellij, wtf
- how complicated it is in intellij, dios mio!
- import module as **java** if not, you just can not add it the web facet and thus unable to add the appengine facet
- create artifacts, runners, ... for 'app' and 'dist'
- `grunt` generates the 'dist' and upload it with
`./appcfg.sh --email=guilcher.pascal.dev@gmail.com update /media/pgu/workspace_intellij_perso/pgu-now/dist`
(yeah, intellij does not give a way to change the google account)

