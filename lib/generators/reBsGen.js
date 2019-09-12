const { commonPrompts } = require('../common.js');

const reBsGen = {
    description: 'Generates a ReasonML Bucklescript project',
    prompts: [
        commonPrompts.projectName,
        {
            type: 'confirm',
            name: 'react',
            message: 'Do you want to use ReasonReact?',
            default: false,
        },
    ],
    actions: _ => {
        const actions = [];
        const base = 'packages/re-bs';

        const templateFiles = [
            `${base}/*`,
            `${base}/.*`,
            `${base}/src/**`,
            `${base}/__tests__/**`,
            '!**/__snapshots__',
            '!**/node_modules',
            '!**/.merlin'
        ];

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

module.exports = reBsGen;
