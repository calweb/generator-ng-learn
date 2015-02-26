### Yeoman Angular Learning Generator

This is a simple [Yeoman](http://yeoman.io/) generator based off my friend and coworker Tim Whitacre's [Generator TIY Webapp](https://github.com/twhitacre/generator-tiy-webapp). It has been made specifically for students at The Iron Yard to ease them into learning AngularJS.  While there are many generators out there, this one's specific purpose is to teach, and as such, will have components unique to a learning environment such as sub-generators that follow our course progression rather than adding a service or directive.

### What it Includes

* Angular v.1.3.14*
* Gulp
* HTML5 Boilerplate
* jQuery
* Normalize
* Mocha/Chai
* Sass*
* Modernizer*
* Bourbon*
* Underscore*

_* optional during setup_

### Installation & Usage

To install:

```sh
npm install -g generator-ng-learn
```

To update:

```sh
npm update -g generator-ng-learn
```

Check Current Version - [Current Version](https://github.com/calweb/generator-ng-learn/releases)

```sh
npm list -g  generator-ng-learn
```

This is used like any other Yeoman generator. Simply navigate to your new project folder and run:

```sh
yo ng-learn
```

There are a few specific tasks so feel free to check out the `gulpfile.js` but the four most used ones will be.

* `gulp` - This will run the default and build your `dist` folder
* `gulp watch` - Starts a server and watches for changes, also livereload
* `gulp test-server` - Starts a server instance to view your Mocha tests in the browser
* `gulp deploy` - Deploys your `dist` folder to a `gh-pages` branch as a subtree push

### Sub-generators

Currently, there is only one sub-generator that creates a feature folder.

To create a feature, run (in your project directory):
`yo ng-learn:feature <featureName>`

This command will create a folder with the following files and wire it up as a dependency in your main `app.js` as a module.

```js
app/<featureName>/
  <featureName>.module.js // routing config, module dependencies
  <featureName>.js // right now just the main controller for this feature
  <featureName>.tpl.html // view associated with this module
  <featureName>.scss // sass file for particular feature/view
  <featureName>.spec.js // test file
```
