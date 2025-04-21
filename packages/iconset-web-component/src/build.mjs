import lodash from "lodash";
import minimist from "minimist";
import { existsSync } from "node:fs";
import { glob, mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import {
  component,
  test,
  generateIconsName,
  generateIconsSetPage,
} from "./component_templates.js";

const { kebabCase } = lodash;
const argv = minimist(process.argv.slice(2), {
  string: ["prefix", "path"],
});

const init = async (componentPrefix, componentsPath) => {
  if (existsSync(componentsPath))
    throw new Error(
      `A component with this name already exists: ${componentsPath}`
    );

  if (!componentsPath)
    throw new Error("You must include a components path name.");

  await mkdir(componentsPath, { recursive: true });

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  const directoryPath = join(
    dirname(new URL(import.meta.url).pathname),
    "../../iconset-svg/dist/Regular/"
  );

  const iconNames = [];
  for await (const file of glob(`${directoryPath}*.svg`)) {
    const iconName = kebabCase(basename(file, ".svg"));
    const customElementName = `${componentPrefix}-${iconName}`;
    iconNames.push(customElementName);

    const dir = `${componentsPath}/${iconName}`;

    let svg;

    try {
      svg = await readFile(file);
    } catch (e) {
      console.error(`Cannot read: ${file}`);
      console.error(e);
      return;
    }

    const data = {
      iconName,
      customElementName,
      svg,
    };
    console.log(data);

    // throw an error if the file already exists
    if (existsSync(dir))
      throw new Error("A component with that name already exists.");

    // create the folder
    await mkdir(dir, { recursive: true });

    await writeFile(
      `${dir}/${iconName}.tsx`,
      component(customElementName, svg),
      writeFileErrorHandler
    );
    console.log(`Created: ${dir}/${iconName}.tsx`);

    await writeFile(
      `${dir}/${iconName}.spec.tsx`,
      test(customElementName),
      writeFileErrorHandler
    );
    console.log(`Created: ${dir}/${iconName}.spec.tsx`);
  }

  await writeFile(
    `${componentsPath}/icons-name.ts`,
    generateIconsName(iconNames),
    writeFileErrorHandler
  );
  console.log(`Created ${componentsPath}/icons-name.ts`);
  await writeFile(
    `${componentsPath}/index.html`,
    generateIconsSetPage(iconNames),
    writeFileErrorHandler
  );
  console.log(`Created ${componentsPath}/index.html`);
};

init(argv.prefix, argv.path);
