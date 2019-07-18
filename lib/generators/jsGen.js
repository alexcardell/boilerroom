const { commonPrompts } = require('../common.js');

const jsGen = {
    description: 'Generate a Javascript project',
    prompts: [
        commonPrompts.projectName,
        {
            type: 'list',
            name: 'jsType',
            message: 'What type of Javascript project is this?',
            choices: ['React'],
        },
        {
            when: response => response.jsType === 'React',
            type: 'list',
            name: 'rendering',
            message: 'Client side or server side rendering?',
            choices: ['Client', 'Server'],
        },
    ],
    actions: ({ rendering }) => {
        const actions = [];

        const templateFiles = [
            'packages/js-react/*',
            'packages/js-react/.*',
            'packages/js-react/src/**',
            'packages/js-react/test/**',
            '!**/node_modules',
            '!**/yarn.lock',
        ];

        if (rendering === 'Client') {
            templateFiles.push('!packages/js-react/src/server/**');
            templateFiles.push('!packages/js-react/test/server/**');
        }

        const action = {
            type: 'addMany',
            destination: './out',
            base: 'packages/js-react',
            templateFiles: templateFiles,
        };

        actions.push(action);

        return actions;
    },
};

module.exports = jsGen;
