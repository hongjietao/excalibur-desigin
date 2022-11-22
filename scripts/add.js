const path = require("path");
const { spwan } = require("child_process");
const handlebars = require("handlebars");
const fs = require("fs");
const glob = require("glob");

/**
 * abc-xyz => AbcXyz
 * @param {*} str
 */
const varCase = (str) =>
  str
    .replace(/-[a-z]/g, (m) => m[1].toUpperCase())
    .replace(/^.{1}/, (m) => m.toUpperCase());

/**
 * Ab-cXyz => abcxyz
 * @param {*} str
 */
const lowCase = (str) =>
  str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, "");

/**
 * 闭包
 */
(() => {
  // 变量名称
  const component = process.argv[2];
  // 目录名称
  const dirName = lowCase(component);
  // 组件名称
  const componentName = varCase(component);
  // 组件路径
  const componentPath = path.join(process.cwd(), `src/${dirName}`);
  // 新建目录
  spwan("mkdir", ["-p", componentPath]);
  // 读模板目录
  const tplFiles = glob.sync(path.join(__dirname, `template/*.hbs`));

  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, "utf8");
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });

    const newPath = filePath
      .replace(`script/template`, `src/${dirName}`)
      .replace("component", dirName)
      .replace("Component", componentName)
      .replace(".hbs", "");

    await fs.writeFile(newPath, result);

    console.log(`write ${newPath} success!`);
  });
})();
