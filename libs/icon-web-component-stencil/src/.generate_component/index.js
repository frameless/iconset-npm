const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2), {
  string: ['prefix', 'path'],
});
const { kebabCase, startCase } = require('lodash');

const { component, test, generateIconsName, generateIconsSetPage } = require('./component_templates.js');

const componentPrefix = `${argv.prefix}-`;
const componentsPath = argv.path;
console.log({ componentsPath });
if (fs.existsSync(componentsPath)) throw new Error(`A component with that name already exists.`);

if (!componentsPath) throw new Error('You must include a components path name.');

fs.mkdirSync(componentsPath, { recursive: true });

function writeFileErrorHandler(err) {
  if (err) throw err;
}

const directoryPath = path.join(__dirname, '../optimized-svgs');

fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const iconsNames = files.map((file) => `${componentPrefix}${kebabCase(file.replace('.svg', ''))}`);

  files.forEach(function (file) {
    const iconTitle = startCase(file.replace('.svg', ''));
    const fileName = `${componentPrefix}${kebabCase(file.replace('.svg', ''))}`;
    const dir = `${componentsPath}/${kebabCase(fileName)}/`;

    fs.readFile(path.join(__dirname, `../optimized-svgs/${file}`), 'utf8', function (err, svg) {
      if (err) {
        return console.log(err);
      }

      // throw an error if the file already exists
      if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

      // create the folder
      fs.mkdirSync(dir);
      fs.writeFile(`${dir}/${kebabCase(fileName)}.tsx`, component(fileName, svg), writeFileErrorHandler);
      fs.writeFile(`${dir}/${kebabCase(fileName)}.spec.tsx`, test(fileName), writeFileErrorHandler);
    });
  });

  fs.writeFile(`${componentsPath}/icons-name.ts`, generateIconsName(iconsNames), writeFileErrorHandler);
  fs.writeFile(`${componentsPath}/icon-set.html`, generateIconsSetPage(iconsNames), writeFileErrorHandler);
});
