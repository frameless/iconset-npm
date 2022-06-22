const fs = require('fs');
const { kebabCase } = require('lodash');
const argv = require('minimist')(process.argv.slice(2), {
  string: ['prefix', 'path'],
});
const path = require('path');
const { component, test, generateIconsName, generateIconsSetPage } = require('./component_templates.js');

const componentPrefix = `${argv.prefix}-`;
const componentsPath = argv.path;

if (fs.existsSync(componentsPath)) throw new Error(`A component with this name already exists: ${componentsPath}`);

if (!componentsPath) throw new Error('You must include a components path name.');

fs.mkdirSync(componentsPath, { recursive: true });

function writeFileErrorHandler(err) {
  if (err) throw err;
}

const directoryPath = path.join(__dirname, '../../iconset-svg/dist/Regular');

fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    console.error('Unable to scan directory: ' + err);
    return;
  }

  const iconsNames = files.map((file) => `${componentPrefix}${kebabCase(file.replace('.svg', ''))}`);

  files.forEach(function (file) {
    const fileName = `${componentPrefix}${kebabCase(file.replace('.svg', ''))}`;
    const formattedName = kebabCase(fileName);
    const dir = `${componentsPath}/${formattedName}`;

    fs.readFile(path.join(directoryPath, file), 'utf8', function (err, svg) {
      if (err) {
        console.error(err);
        return;
      }

      // throw an error if the file already exists
      if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

      // create the folder
      fs.mkdirSync(dir);
      fs.writeFile(`${dir}/${formattedName}.tsx`, component(fileName, svg), writeFileErrorHandler);
      fs.writeFile(`${dir}/${formattedName}.spec.tsx`, test(fileName), writeFileErrorHandler);
    });
  });

  fs.writeFile(`${componentsPath}/icons-name.ts`, generateIconsName(iconsNames), writeFileErrorHandler);
  fs.writeFile(`${componentsPath}/icon-set.html`, generateIconsSetPage(iconsNames), writeFileErrorHandler);
});
