const { commonPrompts } = require('../common.js');

const reEsyGen = {
    description: 'Generates a ReasonML Native project, compiled with esy',
    prompts: [commonPrompts.projectName],
    actions: ({ projectName }) => {
        const actions = [];
        const base = 'packages/re-esy';

        const templateFiles = [
            `${base}/*`,
            `${base}/.*`,
            `${base}/lib/**`,
            `${base}/exe/**`,
            `${base}/test/**`,
            `!${base}/**/__snapshots__`,
            `!${base}/*.install`,
            `!${base}/**/*dune*`,
            `!${base}/**/*opam*`,
            `!${base}/**/_esy`,
            `!${base}/**/node_modules`,
        ];

        const action = {
            type: 'addMany',
            destination: './out',
            base,
            templateFiles: templateFiles,
        };

        actions.push(action);

        return actions;
    },
};

module.exports = reEsyGen;
