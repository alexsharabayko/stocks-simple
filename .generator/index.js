const { ComponentGenerator } = require('./component/index');

const generator = (plop) => {
  plop.setGenerator('component', ComponentGenerator);
};

module.exports = generator;
