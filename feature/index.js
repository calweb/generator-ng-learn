'use strict';
var util = require('util');
var path = require('path');
var touch = require("touch");
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({

    init: function () {
        console.log('Creating the feature - ' + this.name);

    },

    askFor: function () {
        var done = this.async();

        var prompts = [
            {
              name: 'appname',
              message: 'What is the name of your main app module?',
              default: 'changeme'
            },
            {
                name: 'rootFolder',
                message: 'Where do you want to place this feature - what is the root folder?',
                default: 'app'
            }
        ];

        this.prompt(prompts, function (props) {
            this.rootFolder = props.rootFolder;
            this.appname = props.appname;

            done();
        }.bind(this));
    },

    files: function () {
        this.projectName = this.appname;
        this.camelModuleName = this._.camelize(this.name);
        this.capitalModuleName = this._.capitalize(this.name);
        this.lowerModuleName = this.name.toLowerCase();
        var modulePath = path.join('app', this.rootFolder, this.camelModuleName);
        this.mkdir(modulePath);

            this.template('_module.module.js', path.join(modulePath, this.camelModuleName + '.module.js'));
            this.template('_module.js', path.join(modulePath, this.camelModuleName + '.js'));
            this.template('_moduleSpec.js', path.join(modulePath, this.camelModuleName + '.spec.js'));

        this.template('_moduleHtml.tpl.html', path.join(modulePath, this.camelModuleName + '.tpl.html'));
        this.template('_module.scss', path.join(modulePath, this.camelModuleName + '.scss'));

        this._addModuleToAppJs(this.projectName, this.camelModuleName, this.lowerModuleName);


    },

    touchIndexHtml: function() {
        // Touch the index.html file to force the index grunt task to rebuild it (that task adds the new module to the scripts)
        var indexHtmlFilePath = 'app/index.html';
        touch(indexHtmlFilePath, {mtime: true});
    },

    _addModuleToAppJs: function app(projectName, camelModuleName, lowerModuleName) {

        var hook   = '])));',
            path   = 'app/app.js',
            insert = "    '" + projectName + "." + camelModuleName + "',\n";

        var file   = this.readFileAsString(path);

        if (file.indexOf(insert) === -1) {
            this.write(path, file.replace(hook, insert + hook));
        }

    }


});

module.exports = ModuleGenerator;
