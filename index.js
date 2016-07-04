var path = require('path');

var metalsmith = require('metalsmith');

metalsmith(__dirname)
    .source('content')
    .destination('dist')
    .build(function (err) {
        if (err) { console.error(err); }
    });
