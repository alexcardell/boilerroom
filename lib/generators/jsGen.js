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
        const base = 'packages/js-react';

        const templateFiles = [
            `${base}/*`,
            `${base}/.*`,
            `${base}/src/**`,
            `${base}/test/**`,
            '!**/node_modules',
            '!**/yarn.lock',
        ];

        if (rendering === 'Client') {
            templateFiles.push(`!${base}/src/server/**`);
            templateFiles.push(`!${base}/test/server/**`);
        }

        const action = {
            type: 'addMany',
            destination: './out',
            base,
            templateFiles,
        };

        actions.push(action);

        return actions;
    },
};

module.exports = jsGen;
