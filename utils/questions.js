const ask = require('./ask');
const toggle = require('./toggle');
const slug = require('slug');

module.exports = async () => {
    const name = await ask({
        message: "Action name",
        type: 'input'
    });

    const description = await ask({
        message: "Action description",
        hint: "(it will be used in the readme file)",
    });

    const category = await ask({
        message: "Add category",
    });

    const dockerImage = await ask({
        message: "Select docker image",
        initial: 'Ubuntu'
    });

    const dockerVersion = await ask({
        message: "Select Docker image tag",
        initial: 'latest'
    });

    const outputs = await toggle({
        message: 'Do you want to add Outputs section?',
        initial: 'disabled'
    });

    const inputs = await toggle({
        message: 'Do you want to add Inputs section?',
        initial: 'disabled'
    });

    const executeCommands = await toggle({
        message: 'Do you want to add Execute Commands section?',
        initial: 'disabled'
    });

    const volumeMapping = await toggle({
        message: 'Do you want to add Volume Mapping section?',
        initial: 'disabled'
    });

    const workingDirectory = await toggle({
        message: 'Do you want to add Working Directory section?',
        initial: 'disabled'
    });

    const cachedDirectories = await toggle({
        message: 'Do you want to add Cached Directories section?',
        initial: 'disabled'
    });

    const data = {
        name,
        description,
        category,
        dockerImage,
        dockerVersion,
        slug: slug(name, {replacement:'_', lower:false}),
        outputs,
        inputs,
        executeCommands,
        volumeMapping,
        workingDirectory,
        cachedDirectories
    }

    return data;
};