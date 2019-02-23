module.exports = function(plop) {
    plop.setGenerator('Javascript', {
        description: 'Generate a skeleton project',
        prompts: [
            {
                type: 'input',
                name: 'destination',
                message: 'Project destination? ',
                default: './out',
            },
            {
                type: 'list',
                name: 'projectType',
                message: 'What type of project is this?',
                choices: ['Javascript'],
            }, {
                when: function(response) {
                    return response.projectType === 'Javascript';
                },
                type: 'list',
                name: 'jsType',
                message: 'What type of Javascript project is this?',
                choices: ['React', 'Node'],
            }, {
                when: function(response) {
                    return response.jsType === 'React';
                },
                type: 'list',
                name: 'rendering',
                message: 'Client side or server side rendering?',
                choices: ['Client', 'Server']
            }
        ],
        actions: [{
            when: function(response) {
                return (
                    response.projectType === 'Javascript'
                    && response.projectType === 'React'
                    && response.rendering === 'Client'
                );
            },
            type: 'addMany',
            destination: './out',
            templateFiles: [
                'packages/react/**',
                'packages/react/.*',
                '!packages/react/**server**',
                '!**/node_modules',
                '!**/yarn.lock',
            ],
            base: 'packages/react-client',
        }, {
            when: function(response) {
                return (
                    response.projectType === 'Javascript'
                    && response.projectType === 'React'
                    && response.rendering === 'Server'
                );
            },
            type: 'addMany',
            destination: './out',
            templateFiles: [
                'packages/react/**',
                'packages/react/.*',
                '!**/node_modules',
                '!**/yarn.lock',
            ],
            base: 'packages/react',
        }],
    });
};
