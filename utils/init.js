const package = require('../package.json');
const welcome = require('cli-welcome');
const cliHandleUnhandled = require('cli-handle-unhandled');

module.exports = () => {
    cliHandleUnhandled();
    welcome({
        title: `Buddy Custom Actions`, 
        tagLine: package.description, 
        version: package.version,
        bgColor: '#ffff00',
        color: '#0000ff',
        clear: true
    });
};