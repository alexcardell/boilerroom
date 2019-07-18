const commonPrompts = {
    projectName: {
        type: 'input',
        name: 'projectName',
        message: 'What is this project called?',
    },
    authorName: {
        type: 'input',
        name: 'authorName',
        message: 'Author\'s name?',
    },
    authorEmail: {
        type: 'input',
        name: 'authorEmail',
        message: 'Author\'s email?',
    },
};

module.exports = {
    commonPrompts,
};
