const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = {
  load: (filePath) => {
    filePath = filePath || 'config.json';
    const json = readFileSync(resolve(process.cwd(), filePath));

    try {
      process.env = {
        ...process.env,
        ...JSON.parse(json)
      };
    } catch (error) {
      console.error(error)
    }
  }
};
