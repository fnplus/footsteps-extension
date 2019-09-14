var browserify = require('browserify');
var babelify = require('babelify');

b = browserify().transform(babelify.configure({
    presets: ["es2015"]
}))

