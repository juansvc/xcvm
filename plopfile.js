/* eslint-disable @typescript-eslint/no-var-requires */
const inquirerFuzzyPath = require('inquirer-fuzzy-path');
const storyGenerator = require('./src/generators/story');

module.exports = function (plop) {
  plop.setGenerator('stories', storyGenerator);

  //#region  //*=========== Handlebars Helper ===========

  plop.setHelper('directoryCase', function (title) {
    return title.replace(/(^|\/|-)(\S)/g, (s) => s.toUpperCase());
  });

  plop.setHelper('getFolder', (path) => {
    const split = path.split('/');
    // remove filename
    split.pop();
    if (split[0] === 'src') split.splice(0, 1);
    return split.join('/');
  });

  plop.setHelper('getName', (path) => {
    const split = path.split('/');
    return split[split.length - 1].replace(/\.tsx$/, '');
  });
  //#endregion  //*======== Handlebars Helper ===========

  //#region  //*=========== Inquirer Prompt ===========
  plop.setPrompt('fuzzypath', inquirerFuzzyPath);
  //#endregion  //*======== Inquirer Prompt ===========
};
