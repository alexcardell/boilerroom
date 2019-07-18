const { jsGen, reBsGen, reEsyGen } = require('./lib/generators.js');

module.exports = plop => {
    plop.setGenerator('Javascript', jsGen);
    plop.setGenerator('ReasonML Bucklescript', reBsGen);
    plop.setGenerator('ReasonML Native', reEsyGen);
};
