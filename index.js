#!/usr/bin/env node
const path = require('path');
const init = require('./utils/init');
const questions = require('./utils/questions');
const Scaffold = require('scaffold-generator');
const mustache = require('mustache');
const chalk = require('chalk');

(async () => {
    init();
    
    const data = await questions();
    
    const inDir = path.join(__dirname, 'templates', 'action');
    const outDir = path.join(process.cwd(), '.buddy', 'actions', data.slug);

    new Scaffold({
        data: data,
        render: mustache.render,
        override: false
    })
        .copy(inDir, outDir)
        .then(async () => {
            console.log();
            console.log(chalk.green.inverse.bold(' Done ') + ' custom action ' + chalk.bold(data.name) + ' was created')
        })
})();
