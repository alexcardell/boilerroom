const { commonPrompts } = require('../common.js');

const reEsyGen = {
    description: 'Generates a ReasonML Native project, compiled with esy',
    prompts: [commonPrompts.projectName],
    actions: _ => {
        const actions = [];
        const base = 'packages/re-esy';

        const templateFiles = [
            `${base}/*`,
            `${base}/.*`,
            `${base}/lib/**`,
            `${base}/exe/**`,
            `${base}/test/**`,
            `!**/__snapshots__`,
            `!**/*.install`,
            `!**/*dune*`,
            `!**/*opam*`,
            `!**/_esy`,
            `!**/.merlin`,
            `!**/node_modules`,
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

module.exports = reEsyGen;
