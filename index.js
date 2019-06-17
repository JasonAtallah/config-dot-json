const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = {
  load: (options) => {
    const ifOption = (field) => options && options[field];
    const filePath = ifOption('filePath') ? options.filePath : 'config.json';
    const json = readFileSync(resolve(process.cwd(), filePath));

    try {
      if (ifOption('override')) {
        process.env = {
          ...process.env,
          ...JSON.parse(json)
        };
      } else {
        process.env = {
          ...JSON.parse(json),
          ...process.env
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
};
