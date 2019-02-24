module.exports = function(plop) {
    plop.setGenerator('Javascript', {
        description: 'Generate a skeleton project',
        prompts: [
            {
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
        actions: function(data) {
            var actions = [];

            if (data.jsType === 'React') {
                var templateFiles = [
                    'packages/react/*',
                    'packages/react/.*',
                    'packages/react/src/**/*',
                    'packages/react/test/**/*',
                    '!**/node_modules',
                    '!**/yarn.lock',
                ];

                if (data.rendering === 'Client') {
                    templateFiles.push('!packages/react/src/server/**');
                    templateFiles.push('!packages/react/test/server/**');
                }

                var action = {
                    type: 'addMany',
                    destination: './out',
                    base: 'packages/react',
                    templateFiles: templateFiles,
                }

                actions.push(action);
            }

            return actions;
        }
    });
};
