const package = require('../package.json');
const welcome = require('cli-welcome');
const path = require('path');
const chalk = require('chalk');
const cliHandleUnhandled = require('cli-handle-unhandled');

module.exports = () => {
    cliHandleUnhandled();
    welcome({
        title: `Buddy Custom Actions`,
        tagLine: package.description,
        version: package.version,
        bgColor: '#00ffff',
        color: '#000000',
        clear: true
    });

    console.log('This tool will scaffold a new custom action in a '+ chalk.bold(path.join(process.cwd(), '.buddy', 'actions', 'action-name'))  +' folder.');
    console.log();
};