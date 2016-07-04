var path = require('path');

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var assets = require('metalsmith-assets');

metalsmith(__dirname)
    .source('content')
    .destination('dist')
    .use(markdown())
    .use(assets({
	source: 'assets'
    }))
    .build(function (err) {
        if (err) { console.error(err); }
    });
