var path = require('path');

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');

metalsmith(__dirname)
    .source('content')
    .destination('dist')
    .use(markdown())
    .build(function (err) {
        if (err) { console.error(err); }
    });
