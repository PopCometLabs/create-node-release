#!/usr/bin/env node

var fs = require('fs'),
    util = require('util');

fs.readFile('package.json', function (err, data) {
    var package = JSON.parse(data.toString());
    var version = package.version.split('.');
    var index = 1;

    var major = process.argv[2] === '-m';

    if (major) {
        index = 0;
    }

    version[index] = parseInt(version[index], 10) + 1;

    if (major) {
        package.version = version[0] + '.0.0';
    } else {
        package.version = version.join('.');
    }

    fs.writeFile('package.json', JSON.stringify(package, null, 2),
        function (err) {

        if (err) {
            console.log('Could not update file');
            process.exit(1);
        }

        console.log(package.version);
    });
});
